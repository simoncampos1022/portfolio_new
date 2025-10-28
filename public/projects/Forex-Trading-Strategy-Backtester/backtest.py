import pandas as pd
from datetime import datetime, timedelta
import pytz

# Configuration
PIP_SIZE = 0.0001  # For EURUSD
MAIN_TP_PIPS = 10
X1_TRIGGER_PIPS = 10
X2_TRIGGER_PIPS = 25
SL_PIPS = 35
MAX_HOLDING_PERIOD = timedelta(days=5)  # Close trades after 5 days

def parse_history_timestamp(ts_str):
    """Parse history.csv timestamp in format '1/3/2024 0:03' to UTC datetime"""
    try:
        # Parse with month-first format (M/D/Y)
        dt = datetime.strptime(ts_str, "%m/%d/%Y %H:%M")
    except ValueError:
        try:
            # Try day-first format (D/M/Y)
            dt = datetime.strptime(ts_str, "%d/%m/%Y %H:%M")
        except ValueError:
            # Try without leading zeros
            dt = datetime.strptime(ts_str, "%m/%d/%Y %H:%M")
    return dt.replace(tzinfo=pytz.UTC)

def simulate_trade_cycle(start_time: pd.Timestamp, df_ohlcv: pd.DataFrame, is_buy: bool) -> tuple:
    """
    Simulate a trading cycle starting at a specific timestamp using only open prices.
    Returns:
        outcome_string (str): One of {"TP", "X1", "X2", "SL", "EXP"} or None if invalid start
        closed_time (pd.Timestamp): Timestamp when position was closed or None
    """
    # Find the starting index by exact or closest timestamp within 1 minute
    try:
        start_index = df_ohlcv.index[df_ohlcv['timestamp'] == start_time].tolist()
        if not start_index:
            time_diff = (df_ohlcv['timestamp'] - start_time).abs()
            min_diff = time_diff.min()
            if min_diff <= timedelta(minutes=1):
                start_index = [time_diff.idxmin()]
                print(f"Using closest match: {df_ohlcv.at[start_index[0], 'timestamp']} instead of {start_time}")
            else:
                print(f"No matching timestamp found for {start_time}")
                return None, None
    except Exception as e:
        print(f"Error finding start index for {start_time}: {e}")
        return None, None

    if not start_index:
        return None, None

    start_index = start_index[0]

    # Initial setup
    entry_time = df_ohlcv.at[start_index, 'timestamp']
    open_price = df_ohlcv.at[start_index, 'open']

    # Set price levels based on trade direction
    if is_buy:
        tp_direct = round(open_price + MAIN_TP_PIPS * PIP_SIZE, 4)
        trigger_x1 = round(open_price - X1_TRIGGER_PIPS * PIP_SIZE, 4)
        trigger_x2 = round(open_price - X2_TRIGGER_PIPS * PIP_SIZE, 4)
        sl_level = round(open_price - SL_PIPS * PIP_SIZE, 4)
    else:
        tp_direct = round(open_price - MAIN_TP_PIPS * PIP_SIZE, 4)
        trigger_x1 = round(open_price + X1_TRIGGER_PIPS * PIP_SIZE, 4)
        trigger_x2 = round(open_price + X2_TRIGGER_PIPS * PIP_SIZE, 4)
        sl_level = round(open_price + SL_PIPS * PIP_SIZE, 4)

    # Track trade state
    current_target = tp_direct
    stage = 0  # 0: Main only, 1: Main + X1, 2: Main + X1 + X2
    exit_time = None
    outcome = None

    # Iterate through subsequent bars using integer index
    for j in range(start_index, len(df_ohlcv)):
        try:
            current_row = df_ohlcv.iloc[j]
            open_p = current_row['open']
            current_time = current_row['timestamp']

            # Check if we've exceeded max holding period
            if current_time - entry_time > MAX_HOLDING_PERIOD:
                outcome = "EXP"
                exit_time = current_time
                break
            
            # Check for TP hit based on open price
            if (is_buy and open_p >= current_target) or (not is_buy and open_p <= current_target):
                if stage == 0:
                    outcome = "TP"  # Direct TP
                elif stage == 1:
                    outcome = "X1"  # X1 exit
                elif stage == 2:
                    outcome = "X2"  # X2 exit
                exit_time = current_time
                break

            # Check for SL hit based on open price
            if (is_buy and open_p <= sl_level) or (not is_buy and open_p >= sl_level):
                outcome = "SL"
                exit_time = current_time
                break

            # Check for X1 trigger (if not already added)
            if stage == 0:
                if (is_buy and open_p <= trigger_x1) or (not is_buy and open_p >= trigger_x1):
                    stage = 1
                    current_target = open_price  # Reset TP to original entry

            # Check for X2 trigger (if not already added)
            if stage == 1:
                if (is_buy and open_p <= trigger_x2) or (not is_buy and open_p >= trigger_x2):
                    stage = 2
                    current_target = trigger_x1  # Set TP to X1 entry price

        except Exception as e:
            print(f"Error processing bar {j}: {e}")
            break

    return outcome, exit_time

def process_backtest(history_file: str, ohlcv_file: str):
    """Main backtest processing function"""
    print("Loading history data...")
    # Load history data with custom timestamp parsing
    df_history = pd.read_csv(history_file)
    df_history['Time & Date'] = df_history['Time & Date'].apply(parse_history_timestamp)
    print("Loading OHLCV data...")
    # Load OHLCV data
    df_ohlcv = pd.read_csv(ohlcv_file, parse_dates=['timestamp'])
    df_ohlcv['timestamp'] = pd.to_datetime(df_ohlcv['timestamp'], utc=True)
    
    # Ensure timestamps are timezone-aware UTC
    if df_ohlcv['timestamp'].dt.tz is None:
        df_ohlcv['timestamp'] = df_ohlcv['timestamp'].dt.tz_localize('UTC')
    
    # Sort by timestamp just in case
    df_ohlcv = df_ohlcv.sort_values('timestamp').reset_index(drop=True)
    
    # Initialize result columns in history dataframe
    for col in ['Buy result', 'Buy closed time', 'Sell result', 'Sell closed time']:
        if col not in df_history.columns:
            df_history[col] = None
    
    print("Starting backtest...")
    # Process each row in history.csv
    for i, row in df_history.iterrows():
        entry_time = row['Time & Date']
        
        # Simulate Buy cycle
        buy_outcome, buy_closed_time = simulate_trade_cycle(entry_time, df_ohlcv, is_buy=True)
        df_history.at[i, 'Buy result'] = buy_outcome
        df_history.at[i, 'Buy closed time'] = buy_closed_time
        
        # Simulate Sell cycle
        sell_outcome, sell_closed_time = simulate_trade_cycle(entry_time, df_ohlcv, is_buy=False)
        df_history.at[i, 'Sell result'] = sell_outcome
        df_history.at[i, 'Sell closed time'] = sell_closed_time
        
        # Progress reporting
        if i % 10 == 0 or i == len(df_history)-1:
            print(f"\nRow {i+1}/{len(df_history)}: Entry={entry_time}")
            print(f"  Buy result: {buy_outcome}, Closed: {buy_closed_time}")
            print(f"  Sell result: {sell_outcome}, Closed: {sell_closed_time}")
    
    print("\nFormatting close times before saving...")
    for col in ['Time & Date', 'Buy closed time', 'Sell closed time']:
        # Ensure column is datetime dtype first, coercing errors (e.g., None values) to NaT
        df_history[col] = pd.to_datetime(df_history[col], errors='coerce')
        
        # Apply string formatting for non-NaT values
        # Use '%Y/%-m/%-d %-H:%M' for Linux/macOS
        # Use '%Y/%#m/%#d %#H:%M' for Windows
        # Check your OS and uncomment the appropriate line:
        # df_history[col] = df_history[col].dt.strftime('%Y/%-m/%-d %-H:%M')
        df_history[col] = df_history[col].dt.strftime('%Y/%#m/%#d %#H:%M') 

        # Optionally, replace 'NaT' (Not a Time) or 'None' results from unsuccessful formatting
        # with an empty string or other placeholder in the CSV.
        # df_history[col] = df_history[col].fillna('')
    # Save updated history.csv
    output_file = history_file.replace('.csv', '_results.csv')
    df_history.to_csv(output_file, index=False)
    print(f"\nBacktest complete. Results saved to {output_file}")

# Execute backtest
if __name__ == "__main__":
    history_csv = "history.csv"
    ohlcv_csv = "EURUSD_1min.csv"
    process_backtest(history_csv, ohlcv_csv)