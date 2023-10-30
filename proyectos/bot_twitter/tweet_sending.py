"Module to publish tweets"

import os
import tweepy

CONSUMER_KEY = os.environ['CONSUMER_KEY']
CONSUMER_SECRET = os.environ['CONSUMER_SECRET']
ACCESS_TOKEN = os.environ['ACCESS_TOKEN']
ACCESS_TOKEN_SECRET = os.environ['ACCESS_TOKEN_SECRET']

# Twitter execution

def send_tweet(generated_text_clean,
               consumer_key=CONSUMER_KEY,
               consumer_secret=CONSUMER_SECRET,
               access_token=ACCESS_TOKEN,
               access_token_secret=ACCESS_TOKEN_SECRET
               ):
    "Sends tweet"
    client = tweepy.Client(
        consumer_key=consumer_key, consumer_secret=consumer_secret,
        access_token=access_token, access_token_secret=access_token_secret
    )


    try:
        client.create_tweet(text=generated_text_clean)
    except Exception as e:
        print("Error al mandar el tweet:")
        print(e)
