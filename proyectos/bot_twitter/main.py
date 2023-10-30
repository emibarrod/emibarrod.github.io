"""main module"""

from tweet_generation import generate_tweet
from tweet_sending import send_tweet

def job(event, context):
    "Tweet generation job"
    tweet_text = generate_tweet()
    send_tweet(tweet_text)
    print(tweet_text)
