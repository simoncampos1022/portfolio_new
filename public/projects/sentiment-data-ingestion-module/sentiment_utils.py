from transformers import pipeline

def finbert_sentiment(text):
    """Financial sentiment analysis using FinBERT"""
    if not text.strip():
        return {"label": "neutral", "score": 0.0}
    
    if not hasattr(finbert_sentiment, "model"):
        finbert_sentiment.model = pipeline(
            "text-classification",
            model="ProsusAI/finbert",
            top_k=1  # This causes nested list output
        )
    
    try:
        # Pipeline returns [[{...}]] when top_k=1
        result = finbert_sentiment.model(text[:512])
        
        # Extract the first dictionary from the nested lists
        if isinstance(result, list) and len(result) > 0:
            if isinstance(result[0], list) and len(result[0]) > 0:
                sentiment_data = result[0][0]
            else:
                sentiment_data = result[0]
                
            return {
                "label": sentiment_data['label'].lower(),
                "score": sentiment_data['score']
            }
            
        return {"label": "neutral", "score": 0.0}
        
    except Exception as e:
        print(f"Unexpected error in finbert_sentiment: {e}")
        return {"label": "neutral", "score": 0.0}