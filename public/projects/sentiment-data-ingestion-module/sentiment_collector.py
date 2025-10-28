import os
import asyncio
import aiohttp
import json
import logging
import time
import pandas as pd
from datetime import datetime, timezone, timedelta
from dotenv import load_dotenv
import re
from typing import List, Dict, Optional
import tweepy
import sys
import platform

# Shared volume configuration
DATA_DIR = "/data"
SENTIMENT_FILE = os.path.join(DATA_DIR, "sentiment_data.json")

# Initialize logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# Load environment variables
load_dotenv()

# Import sentiment utilities
from sentiment_utils import finbert_sentiment

class SentimentSource:
    def __init__(self, name):
        self.name = name
        self.data_dir = os.path.join(DATA_DIR, f"sentiment/{name}")
        os.makedirs(self.data_dir, exist_ok=True)
        
    async def fetch(self, session) -> List[Dict]:
        """Fetch data from the source"""
        return []
    
    def process(self, data) -> List[Dict]:
        """Process raw data into standardized format"""
        return []
    
    def save_to_parquet(self, df: pd.DataFrame):
        """Save processed data to parquet file"""
        if df.empty:
            return
            
        filename = f"{self.name}_{datetime.now().strftime('%Y%m%d_%H%M')}.parquet"
        filepath = os.path.join(self.data_dir, filename)
        df.to_parquet(filepath, compression='zstd')
        logger.info(f"Saved {len(df)} {self.name} records to {filename}")
class CryptoPanicSource(SentimentSource):
    def __init__(self):
        super().__init__("cryptopanic")
        self.api_key = os.getenv('CRYPTOPANIC_API_KEY')
        self.base_url = "https://cryptopanic.com/api/v1/posts/"
        self.tracked_currencies = [
            'BTC', 'ETH', 'BNB', 'XRP', 'ADA', 'SOL', 'DOT', 'DOGE',
            'UNI', 'AAVE', 'LINK', 'MATIC', 'ARB', 'OP', 'LRC',
            'USDT', 'USDC', 'DAI', 'BUSD', 'SHIB', 'PEPE', 'FLOKI'
        ]
    
    async def fetch(self, session) -> List[Dict]:
        if not self.api_key:
            logger.error("CryptoPanic API key not found")
            return []
            
        params = {
            'auth_token': self.api_key,
            'public': 'true',
            'kind': 'news',
            'filter': 'hot',
            'currencies': ','.join(self.tracked_currencies),
            'regions': 'en',
            'limit': 50
        }
        
        try:
            async with session.get(self.base_url, params=params, timeout=30) as response:
                if response.status != 200:
                    logger.error(f"CryptoPanic API error: {response.status}")
                    return []
                return await response.json()
        except Exception as e:
            logger.error(f"CryptoPanic fetch error: {str(e)}")
            return []
    
    def process(self, data) -> List[Dict]:
        if not data or not data.get('results'):
            return []
            
        processed = []
        for item in data['results']:
            text = f"{item['title']} {item.get('description', '')}"
            sentiment = finbert_sentiment(text)
            # Extract metadata
            metadata = item.get('metadata', {})
            votes = metadata.get('votes', {})
            total_votes = sum(votes.values())
            
            processed.append({
                "source": "cryptopanic",
                "id": item["id"],
                "title": item["title"],
                "content": item.get("description", ""),
                "published_at": item["published_at"],
                "collected_at": datetime.now(timezone.utc).isoformat(),
                "sentiment_score": sentiment["score"],
                "sentiment_label": sentiment["label"],
                "url": item.get("url", ""),
                "currencies": [c['code'] for c in item.get('currencies', [])],
                "categories": [cat['title'] for cat in item.get('categories', [])],
                "votes": {
                    "positive": votes.get('positive', 0),
                    "negative": votes.get('negative', 0),
                    "important": votes.get('important', 0),
                    "total": total_votes
                }
            })
        return processed
class CMCSource(SentimentSource):
    def __init__(self):
        super().__init__("cmc")
        self.api_key = os.getenv('CMC_API_KEY')
        self.base_url = "https://pro-api.coinmarketcap.com/v1"
        self.tracked_currencies = [
            'BTC', 'ETH', 'BNB', 'XRP', 'ADA', 'SOL', 'DOT', 'DOGE',
            'UNI', 'AAVE', 'LINK', 'MATIC', 'ARB', 'OP', 'LRC',
            'USDT', 'USDC', 'DAI', 'BUSD', 'SHIB', 'PEPE', 'FLOKI'
        ]

    async def fetch(self, session) -> List[Dict]:
        if not self.api_key:
            logger.error("CMC API key not found")
            return {}
            
        headers = {'X-CMC_PRO_API_KEY': self.api_key}
        
        try:
            # Fetch CMC news
            params = {
                'limit': 100, 
                'symbol': ','.join(self.tracked_currencies),
                'language': 'en',
                'news_type' : 'all',
                'content_type' : 'news'
            }
            async with session.get(f"{self.base_url}/content/latest", 
                                 headers=headers, params=params, timeout=30) as response:
                if response.status != 200:
                    logger.error(f"CMC news error: {response.status}")
                    news = []
                else:
                    news = await response.json()
            return {
                'news': news
            }
        except Exception as e:
            logger.error(f"CMC fetch error: {str(e)}")
            return {}
    
    def process(self, data) -> List[Dict]:
        if not data:
            return []
            
        processed = []
        news_items = data.get('news', {}).get('data', [])
        
        for item in news_items:
            text = f"{item['title']} {item.get('description', '')}"
            sentiment = finbert_sentiment(text)
            
            print(f"sentiment label:{sentiment["label"]}")
            print(f"sentiment score:{sentiment["score"]}")

            processed.append({
                "source": "cmc",
                "id": str(item["id"]),
                "title": item["title"],
                "content": item.get("description", ""),
                "published_at": item["published_at"],
                "collected_at": datetime.now(timezone.utc).isoformat(),
                "sentiment_score": sentiment["score"],
                "sentiment_label": sentiment["label"],
                "url": item["url"],
                "source_name": item["source"],
                "categories": [cat['title'] for cat in item.get('categories', [])],
                "currencies": [curr['symbol'] for curr in item.get('currencies', [])]
            })
            
        return processed
class RedditSource(SentimentSource):
    def __init__(self):
        super().__init__("reddit")
        self.client_id = os.getenv('REDDIT3_CLIENT_ID')
        self.client_secret = os.getenv('REDDIT3_CLIENT_SECRET')
        self.user_agent = os.getenv('REDDIT3_USER_AGENT', 'CryptoQuantBot/1.0')
        self.access_token = None
        self.token_expiry = None
        self.tracked_subreddits = [
            'CryptoCurrency', 'CryptoMarkets', 'Bitcoin', 'ethereum',
            'Cardano', 'Polkadot', 'Solana', 'CosmosNetwork',
            'Chainlink', 'Uniswap', 'Aave', 'CurveFinance', "trade war", "war"
        ]
        
    async def get_access_token(self, session):
        if self.access_token and self.token_expiry and datetime.now(timezone.utc) < self.token_expiry:
            return self.access_token
            
        auth = aiohttp.BasicAuth(self.client_id, self.client_secret)
        data = {'grant_type': 'client_credentials'}
        
        try:
            async with session.post(
                'https://www.reddit.com/api/v1/access_token',
                auth=auth,
                data=data,
                headers={'User-Agent': self.user_agent},
                timeout=30
            ) as response:
                if response.status != 200:
                    logger.error(f"Reddit token error: {response.status}")
                    return None
                    
                token_data = await response.json()
                self.access_token = token_data['access_token']
                self.token_expiry = datetime.now(timezone.utc) + timedelta(seconds=token_data['expires_in'] - 300)
                return self.access_token
        except Exception as e:
            logger.error(f"Reddit token error: {str(e)}")
            return None
    
    async def fetch(self, session) -> List[Dict]:
        if not await self.get_access_token(session):
            return []
            
        headers = {
            'Authorization': f'Bearer {self.access_token}',
            'User-Agent': self.user_agent
        }
        
        all_posts = []
        
        for subreddit in self.tracked_subreddits:
            try:
                async with session.get(
                    f'https://oauth.reddit.com/r/{subreddit}/hot',
                    headers=headers,
                    params={'limit': 50},
                    timeout=30
                ) as response:
                    if response.status != 200:
                        logger.error(f"Reddit error for r/{subreddit}: {response.status}")
                        continue
                        
                    data = await response.json()
                    posts = data.get('data', {}).get('children', [])
                    for post in posts:
                        post_data = post['data']
                        all_posts.append({
                            'id': post_data['id'],
                            'title': post_data['title'],
                            'text': post_data.get('selftext', ''),
                            'created_utc': post_data['created_utc'],
                            'subreddit': subreddit,
                            'author': post_data['author'],
                            'score': post_data['score'],
                            'num_comments': post_data['num_comments'],
                            'url': post_data['url']
                        })
            except Exception as e:
                logger.error(f"Reddit fetch error for r/{subreddit}: {str(e)}")
                
        return all_posts
    
    def process(self, data) -> List[Dict]:
        processed = []
        
        for post in data:
            text = f"{post['title']} {post['text']}"
            sentiment = finbert_sentiment(text)

            processed.append({
                "source": "reddit",
                "id": post["id"],
                "title": post["title"],
                "content": post.get("text", ""),
                "published_at": datetime.fromtimestamp(post['created_utc'], timezone.utc).isoformat(),
                "collected_at": datetime.now(timezone.utc).isoformat(),
                "sentiment_score": sentiment["score"],
                "sentiment_label": sentiment["label"],
                "subreddit": post["subreddit"],
                "author": post["author"],
                "score": post["score"],
                "num_comments": post["num_comments"],
                "url": post["url"]
            })
            
        return processed
class TwitterSource(SentimentSource):
    def __init__(self):
        super().__init__("twitter")
        self.bearer_token = os.getenv('TWITTER_BEARER_TOKEN')
        self.tracked_accounts = [
            'VitalikButerin', 'cz_binance', 'SatoshiLite', 'aantonop',
            'rogerkver', 'justinsuntron', 'saylor', 'brian_armstrong',
            'tyler', 'novogratz', 'CharlesHoskinson', 'gavofyork',
            'SBF_FTX', 'ErikVoorhees', 'CharlieShrem', 'WillyWoo'
        ]
        self.client = None
        if self.bearer_token:
            try:
                # Initialize tweepy Client
                self.client = tweepy.Client(
                    bearer_token=self.bearer_token,
                    wait_on_rate_limit=True  # Handle rate limits automatically
                )
            except Exception as e:
                logger.error(f"Error initializing Twitter client: {str(e)}")
        else:
            logger.error("Twitter Bearer token not found")
    
    async def fetch(self, session) -> List[Dict]:
        if not self.client:
            return []
        
        # Run synchronous tweepy calls in a thread to avoid blocking
        loop = asyncio.get_event_loop()
        return await loop.run_in_executor(None, self._fetch_tweets_sync)
    
    def _fetch_tweets_sync(self) -> List[Dict]:
        """Synchronous method to fetch tweets using tweepy"""
        all_tweets = []
        for username in self.tracked_accounts:
            try:
                # Fetch user ID
                user_response = self.client.get_user(username=username)
                if user_response.errors:
                    logger.error(f"Twitter user error for @{username}: {user_response.errors[0]['detail']}")
                    continue
                user_id = user_response.data.id
                
                # Fetch user's tweets
                tweets_response = self.client.get_users_tweets(
                    id=user_id,
                    max_results=20,
                    exclude=['retweets', 'replies'],
                    tweet_fields=['created_at', 'public_metrics', 'lang']
                )
                if tweets_response.errors:
                    logger.error(f"Twitter tweets error for @{username}: {tweets_response.errors[0]['detail']}")
                    continue
                
                # Process tweets
                tweets = tweets_response.data or []
                for tweet in tweets:
                    if tweet.lang == 'en':  # Only English tweets
                        all_tweets.append({
                            "text": tweet.text,
                            "id": str(tweet.id),
                            "created_at": tweet.created_at.strftime("%Y-%m-%dT%H:%M:%S.%fZ"),  # ISO 8601 format
                            "lang": tweet.lang,
                            "public_metrics": {
                                "retweet_count": tweet.public_metrics['retweet_count'],
                                "reply_count": tweet.public_metrics['reply_count'],
                                "like_count": tweet.public_metrics['like_count'],
                                "quote_count": tweet.public_metrics['quote_count']
                            },
                            "author_id": str(user_id)
                        })
                        
            except tweepy.TweepyException as e:
                logger.error(f"Tweepy error for @{username}: {str(e)}")
            except Exception as e:
                logger.error(f"Unexpected error for @{username}: {str(e)}")
                
        return all_tweets

    def process(self, data) -> List[Dict]:
        # Unchanged from original implementation
        processed = []
        for tweet in data:
            text = tweet['text']
            sentiment = finbert_sentiment(text)

            print(f"sentiment label:{sentiment['label']}")
            print(f"sentiment score:{sentiment['score']}")

            metrics = tweet.get('public_metrics', {})
            
            processed.append({
                "source": "twitter",
                "id": tweet["id"],
                "title": "",  # Twitter doesn't have titles
                "content": text,
                "published_at": tweet["created_at"],
                "collected_at": datetime.now(timezone.utc).isoformat(),
                "sentiment_score": sentiment["score"],
                "sentiment_label": sentiment["label"],
                "author_id": tweet.get('author_id', ''),
                "retweets": metrics.get('retweet_count', 0),
                "replies": metrics.get('reply_count', 0),
                "likes": metrics.get('like_count', 0),
                "quotes": metrics.get('quote_count', 0)
            })
        return processed
class TrumpRSSSource(SentimentSource):
    def __init__(self):
        super().__init__("trump_rss")
        # Updated RSS feed URL (official campaign news feed)
        self.rss_url = "https://www.donaldjtrump.com/desk/feed"
    
    async def fetch(self, session) -> str:
        try:
            async with session.get(self.rss_url, timeout=30) as response:
                if response.status != 200:
                    # Include URL in error for debugging
                    logger.error(f"Trump RSS error ({self.rss_url}): {response.status}")
                    return ""
                return await response.text()
        except Exception as e:
            logger.error(f"Trump RSS fetch error: {str(e)}")
            return ""
    
    def process(self, data) -> List[Dict]:
        if not data:
            return []
            
        # Simple RSS parser - in production you'd use a proper parser
        processed = []
        items = re.findall(r'<item>(.*?)</item>', data, re.DOTALL)
        
        for item in items:
            try:
                title = re.search(r'<title>(.*?)</title>', item).group(1)
                pub_date = re.search(r'<pubDate>(.*?)</pubDate>', item).group(1)
                content = re.search(r'<description>(.*?)</description>', item).group(1)
                
                # Clean HTML tags
                content = re.sub(r'<[^>]+>', '', content)
                
                sentiment = finbert_sentiment(f"{title} {content}")
                
                processed.append({
                    "source": "trump_rss",
                    "id": f"trump_{hash(title)}",
                    "title": title,
                    "content": content,
                    "published_at": pub_date,
                    "collected_at": datetime.now(timezone.utc).isoformat(),
                    "sentiment_score": sentiment["score"],
                    "sentiment_label": sentiment["label"]
                })
            except Exception as e:
                logger.error(f"Trump RSS parsing error: {str(e)}")
                continue
                
        return processed

class SentimentCollector:
    def __init__(self):
        self.running = True
        self.sources = [
            CryptoPanicSource(),
            # CMCSource(),
            RedditSource(),
            # TwitterSource(),
            # TrumpRSSSource()
        ]
        self.collected_data = []
        self.load_existing_data()
        
    def load_existing_data(self):
        """Load existing data from JSON file"""
        try:
            if os.path.exists(SENTIMENT_FILE):
                with open(SENTIMENT_FILE, 'r') as f:
                    self.collected_data = json.load(f)
                logger.info(f"Loaded {len(self.collected_data)} existing sentiment records")
        except Exception as e:
            logger.error(f"Error loading existing data: {str(e)}")
    
    def save_data(self):
        """Save data to JSON file atomically"""
        try:
            # Keep only last 5000 items
            self.collected_data = self.collected_data[-5000:]
            
            temp_file = SENTIMENT_FILE + ".tmp"
            with open(temp_file, 'w') as f:
                json.dump(self.collected_data, f)
            
            # Replace existing file atomically (cross-platform)
            if os.name == 'nt':  # Windows
                if os.path.exists(SENTIMENT_FILE):
                    os.remove(SENTIMENT_FILE)
            os.replace(temp_file, SENTIMENT_FILE)
            logger.info(f"Saved {len(self.collected_data)} sentiment records to JSON")
        except Exception as e:
            logger.error(f"Error saving data: {str(e)}")
    
    async def run_source(self, source, session):
        """Run a single source and process its data"""
        try:
            logger.info(f"Collecting from {source.name}...")
            raw_data = await source.fetch(session)
            processed = source.process(raw_data)
            
            if processed:
                # Save to individual parquet file
                df = pd.DataFrame(processed)
                source.save_to_parquet(df)
                
                # Add to combined data
                for item in processed:
                    # Create unique ID from source + item ID
                    unique_id = f"{source.name}_{item['id']}"
                    item['unique_id'] = unique_id
                    
                    # Check for duplicates
                    if not any(d['unique_id'] == unique_id for d in self.collected_data):
                        self.collected_data.append(item)
            
            logger.info(f"Collected {len(processed)} items from {source.name}")
        except Exception as e:
            logger.error(f"Error in {source.name} collection: {str(e)}")
    
    async def run(self):
        logger.info("Starting sentiment data collector")

        while self.running:
            start_time = time.time()
            try:
                async with aiohttp.ClientSession() as session:
                    tasks = [self.run_source(source, session) for source in self.sources]
                    await asyncio.gather(*tasks)
            except Exception as e:
                logger.error(f"Session error: {e}", exc_info=True)

            try:
                self.save_data()
            except Exception as e:
                logger.error(f"Save error: {e}")

            # Calculate sleep time until next 15-minute mark
            now = datetime.datetime.now()
            # Minutes and seconds now
            minute = now.minute

            # Next quarter hour: 0, 15, 30, 45
            next_quarter = (minute // 15 + 1) * 15
            if next_quarter == 60:
                # next hour
                next_quarter = 0
                next_hour = now.replace(hour=(now.hour + 1) % 24, minute=0, second=0, microsecond=0)
            else:
                next_hour = now.replace(minute=next_quarter, second=0, microsecond=0)

            # Calculate total seconds to sleep
            delta = (next_hour - now).total_seconds()
            # Safety minimum sleep time (e.g. 10 seconds)
            sleep_time = max(delta, 10)

            elapsed = time.time() - start_time
            logger.info(f"Cycle completed in {elapsed:.1f}s. Sleeping {sleep_time:.1f}s until next quarter hour")
            await asyncio.sleep(sleep_time)
                
def main():
    # Set up proper event loop for Windows
    if sys.platform == 'win32' and platform.system() == 'Windows':
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

    collector = SentimentCollector()
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    
    try:
        loop.run_until_complete(collector.run())
    except KeyboardInterrupt:
        collector.running = False
        logger.info("Stopped sentiment collector")
    finally:
        # Final save before exit
        collector.save_data()
        loop.close()

if __name__ == "__main__":
    main()