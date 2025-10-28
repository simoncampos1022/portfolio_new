# Crypto Sentiment Collector ( Historical Data and Real-Time Updating ) - AI Trading Data Ingestion

A modular, asynchronous Python application to collect, analyze, and store cryptocurrency-related sentiment data from multiple sources including CryptoPanic, Reddit, CoinMarketCap (CMC), Twitter, and a Trump RSS feed. The project leverages FinBERT, a financial sentiment analysis model, to provide sentiment scoring on the collected textual data.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Supported Sources](#supported-sources)
- [Architecture](#architecture)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Data Storage](#data-storage)
- [Extending the Collector](#extending-the-collector)
- [Logging and Error Handling](#logging-and-error-handling)
- [Limitations and Considerations](#limitations-and-considerations)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Overview

The Crypto Sentiment Collector is designed to aggregate real-time sentiment data from various crypto news and social media platforms. It fetches the latest posts, tweets, and news articles, processes them through FinBERT for sentiment classification, and stores the results in both JSON and Parquet formats for easy analysis and integration.

## Features

- **Asynchronous data fetching** for efficient and concurrent API calls.
- **Multi-source support** including CryptoPanic, Reddit, CMC, Twitter, and RSS feeds.
- **Financial sentiment analysis** using the state-of-the-art FinBERT model.
- **Data persistence** with atomic JSON saving and Parquet file exports.
- **Duplicate detection** to avoid redundant data storage.
- **Configurable tracked currencies and accounts**.
- **Robust error handling and logging** for production readiness.
- **Scheduled runs every 15 minutes** aligned to quarter hours.

## Supported Sources

| Source          | Description                                  | API Type          | Notes                          |
|-----------------|----------------------------------------------|-------------------|--------------------------------|
| CryptoPanic     | Aggregated crypto news and social posts     | REST API          | Requires `CRYPTOPANIC_API_KEY` |
| Reddit          | Posts from selected crypto-related subreddits | OAuth2 API        | Requires Reddit app credentials |
| CoinMarketCap (CMC) | Crypto news and content                    | REST API          | Requires `CMC_API_KEY`          |
| Twitter         | Tweets from influential crypto accounts     | Twitter API v2    | Requires `TWITTER_BEARER_TOKEN` |
| Trump RSS Feed  | RSS feed from Donald J. Trump's official site | RSS Feed (XML)    | No API key needed               |

*Note: CMC, Twitter, and Trump RSS sources are implemented but commented out by default.*

## Architecture

- **SentimentSource (Base Class):** Defines the interface for all data sources with `fetch`, `process`, and `save_to_parquet` methods.
- **Source Implementations:** Each source inherits from `SentimentSource` and implements its own fetching and processing logic.
- **SentimentCollector:** Manages all sources, runs asynchronous fetch and process cycles, maintains a combined dataset, and handles data saving.
- **FinBERT Sentiment Analysis:** Uses Hugging Face Transformers pipeline with the `ProsusAI/finbert` model to generate sentiment labels and scores.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/crypto-sentiment-collector.git
   cd crypto-sentiment-collector
   ```

2. **Create and activate a Python virtual environment (recommended):**

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # Linux/macOS
   venv\Scripts\activate     # Windows
   ```

3. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Additional dependencies:**

   - `pyarrow` or `fastparquet` for Parquet support in pandas.
   - `transformers` and `torch` for FinBERT sentiment analysis.
   - `tweepy` for Twitter API access.
   - `python-dotenv` for environment variable management.

## Configuration

Create a `.env` file in the project root to store your API keys and credentials:

```ini
CRYPTOPANIC_API_KEY=your_cryptopanic_api_key
CMC_API_KEY=your_coinmarketcap_api_key
REDDIT3_CLIENT_ID=your_reddit_client_id
REDDIT3_CLIENT_SECRET=your_reddit_client_secret
REDDIT3_USER_AGENT=your_reddit_user_agent
TWITTER_BEARER_TOKEN=your_twitter_bearer_token
```

- **Important:** Keep your `.env` file secure and do not commit it to version control.

## Usage

Run the main script to start the sentiment collector:

```bash
python main.py
```

- The collector runs indefinitely, fetching and processing data every 15 minutes aligned to quarter-hour marks (e.g., 00:00, 00:15, 00:30, 00:45).
- Use `Ctrl+C` to stop the collector gracefully; it will save data before exiting.

## Data Storage

- **JSON File:** `data/sentiment_data.json` stores the combined collected sentiment records (up to the last 5000 entries).
- **Parquet Files:** Each source saves its processed data into timestamped Parquet files under `data/sentiment/{source_name}/`.
- **Data Fields:** Include source, unique IDs, titles, content, timestamps, sentiment scores and labels, metadata (votes, author, metrics), and URLs.

## Extending the Collector

To add a new sentiment source:

1. Create a new class inheriting from `SentimentSource`.
2. Implement `fetch` to retrieve raw data asynchronously.
3. Implement `process` to convert raw data into the standardized format and run sentiment analysis.
4. Add an instance of your new source to the `SentimentCollector.sources` list.

## Logging and Error Handling

- Logs are output to the console with timestamps, log levels, and messages.
- Errors during fetching, processing, or saving are logged with details.
- Rate limits and API errors are handled gracefully with retries or skips.
- Tweepy and aiohttp exceptions are caught to prevent crashes.

## Limitations and Considerations

- **API Rate Limits:** Be mindful of API usage limits; the app handles some rate limiting but excessive calls may cause failures.
- **Sentiment Analysis:** FinBERT is optimized for financial text but may not perfectly capture all nuances.
- **Data Volume:** The JSON file is capped at 5000 records to prevent excessive disk usage.
- **Timezones:** All timestamps are stored in UTC ISO 8601 format.
- **RSS Parsing:** The Trump RSS feed uses a simple regex parser; consider using a robust XML parser for production.

## Acknowledgements

- [ProsusAI/finbert](https://huggingface.co/ProsusAI/finbert) for the sentiment analysis model.
- [Tweepy](https://www.tweepy.org/) for Twitter API integration.
- [CoinMarketCap API](https://coinmarketcap.com/api/) for crypto news.
- [CryptoPanic](https://cryptopanic.com/developers/api/) for aggregated crypto news.
- [Reddit API](https://www.reddit.com/dev/api/) for subreddit data.

If you find this project useful or want to contribute, please open an issue or submit a pull request!

*Last updated: July 13, 2025*