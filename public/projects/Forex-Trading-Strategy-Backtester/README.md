# Forex Trading Strategy Backtester

## Overview
This project provides a Python-based backtesting framework for a forex trading strategy, specifically designed for the EUR/USD currency pair. The script simulates trading cycles based on historical trade entry times and OHLCV (Open, High, Low, Close, Volume) data, evaluating both buy and sell trades. The strategy incorporates take-profit (TP), stop-loss (SL), and additional trigger levels (X1 and X2) to simulate dynamic trade management, with a maximum holding period for trades.

The backtester processes a history file containing trade entry timestamps and matches them with OHLCV data to simulate trade outcomes, producing a results file with detailed trade performance metrics.

## Features
- **Flexible Timestamp Parsing**: Handles multiple timestamp formats (e.g., `M/D/Y` or `D/M/Y`) for robust compatibility with historical data.
- **Trade Simulation**: Simulates both buy and sell trades with configurable pip-based TP, SL, and trigger levels (X1, X2).
- **Dynamic Trade Management**: Adjusts take-profit levels based on price movements triggering X1 and X2 levels.
- **Maximum Holding Period**: Closes trades after a specified period (default: 5 days) to simulate expiration.
- **Error Handling**: Robust handling of timestamp mismatches and data errors, with informative logging.
- **Output**: Generates a results CSV file with trade outcomes and closing times for both buy and sell trades.

## Requirements
- Python 3.8+
- Required Python packages:
  - `pandas`
  - `pytz`

Install the dependencies using pip:
```bash
pip install pandas pytz
```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/johnbdfilio000/Forex-Trading-Strategy-Backtester.git
   cd forex-backtester
   ```
2. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```
3. Ensure your input files (`history.csv` and `EURUSD_1min.csv`) are in the project directory or update the file paths in the script.

## Usage
1. **Prepare Input Files**:
   - **history.csv**: Contains trade entry timestamps in the format `Time & Date` (e.g., `1/3/2024 0:03`). Example structure:
     ```csv
     Time & Date
     1/3/2024 0:03
     1/3/2024 0:04
     ```
   - **EURUSD_1min.csv**: OHLCV data with a `timestamp` column (in UTC, e.g., `2024-01-03 00:03:00+00:00`) and `open`, `high`, `low`, `close`, `volume` columns. Example structure:
     ```csv
     timestamp,open,high,low,close,volume
     2024-01-03 00:03:00+00:00,1.0945,1.0947,1.0943,1.0946,100
     2024-01-03 00:04:00+00:00,1.0946,1.0948,1.0944,1.0947,120
     ```

2. **Run the Backtest**:
   Execute the script with default settings:
   ```bash
   python backtest.py
   ```
   The script will process `history.csv` and `EURUSD_1min.csv`, producing `history_results.csv` with the following additional columns:
   - `Buy result`: Outcome of the buy trade (`TP`, `X1`, `X2`, `SL`, `EXP`, or `None`).
   - `Buy closed time`: Timestamp when the buy trade was closed.
   - `Sell result`: Outcome of the sell trade.
   - `Sell closed time`: Timestamp when the sell trade was closed.

3. **Configuration**:
   Modify the configuration variables in the script to adjust the strategy parameters:
   ```python
   PIP_SIZE = 0.0001  # Pip size for EUR/USD
   MAIN_TP_PIPS = 10  # Main take-profit in pips
   X1_TRIGGER_PIPS = 10  # X1 trigger level in pips
   X2_TRIGGER_PIPS = 25  # X2 trigger level in pips
   SL_PIPS = 35  # Stop-loss in pips
   MAX_HOLDING_PERIOD = timedelta(days=5)  # Maximum trade duration
   ```

4. **Output**:
   The script generates `history_results.csv` with the processed trade results. Example output:
   ```csv
   Time & Date,Buy result,Buy closed time,Sell result,Sell closed time
   2024/1/3 0:03,TP,2024/1/3 0:05,SL,2024/1/3 0:04
   2024/1/3 0:04,X1,2024/1/3 0:07,EXP,2024/1/8 0:04
   ```

## Strategy Details
The backtesting strategy simulates trades as follows:
- **Entry**: Trades are initiated at timestamps specified in `history.csv`.
- **Buy/Sell Trades**: Both buy and sell trades are simulated for each entry timestamp.
- **Price Levels**:
  - **Take-Profit (TP)**: Set at ±10 pips from the entry price.
  - **X1 Trigger**: If the price moves 10 pips against the position, a new position is simulated, and TP is reset to the entry price.
  - **X2 Trigger**: If the price moves an additional 15 pips against the position (25 pips total), another position is simulated, and TP is set to the X1 trigger price.
  - **Stop-Loss (SL)**: Set at ±35 pips from the entry price.
  - **Expiration (EXP)**: Trades are closed if they remain open for more than 5 days.
- **Trade Closure**: A trade closes when the open price hits the TP, SL, or the maximum holding period is reached.
- **Outcome Codes**:
  - `TP`: Direct take-profit hit.
  - `X1`: Take-profit hit after X1 trigger.
  - `X2`: Take-profit hit after X2 trigger.
  - `SL`: Stop-loss hit.
  - `EXP`: Trade expired after maximum holding period.
  - `None`: No valid trade (e.g., timestamp not found).

## Notes
- The script assumes OHLCV data is in 1-minute intervals. Adjust the timestamp matching logic (`timedelta(minutes=1)`) for different granularities.
- Timestamps in `history.csv` are parsed flexibly to handle various date formats (`M/D/Y` or `D/M/Y`).
- The script uses open prices for trade execution to simplify simulation.
- Ensure `EURUSD_1min.csv` timestamps are in UTC and properly formatted.
- For Windows, the timestamp format in the output CSV uses `%Y/%#m/%#d %#H:%M`. For Linux/macOS, uncomment the alternative format (`%Y/%-m/%-d %-H:%M`) in the script.

## Limitations
- The backtest uses only open prices for simplicity, which may not fully reflect real-world trading conditions.
- No transaction costs or slippage are modeled.
- The strategy assumes perfect trade execution at the specified levels.
- Limited to EUR/USD with a fixed pip size of 0.0001.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please include tests and documentation for any new features or changes.