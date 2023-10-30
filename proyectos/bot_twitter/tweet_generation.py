"Tweet generation using OpenAI API"

import os
import random
import openai

openai.api_key = os.environ['OPENAI_KEY']

# OpenAI execution

PROMPTS = {
    0: """Escribe un chiste.""",
    1: """Escribe una adivinanza.""",
    2: """Escribe una parte de la letra de una canción."""
}
MODEL = "gpt-3.5-turbo"
N_PROMPTS = len(PROMPTS)
PROMPT_CHOICE = random.randrange(N_PROMPTS)
MESSAGES = [{"role": "user", "content": PROMPTS[PROMPT_CHOICE]}]
MAX_TOKENS = 80
TEMPERATURE = 1

def get_openai_response(model=MODEL,
                   messages=MESSAGES,
                   max_tokens=MAX_TOKENS,
                   temperature=TEMPERATURE):
    "Returns a openai response"
    stop = False
    response = None
    while not stop:
        try:
            response = openai.ChatCompletion.create(
                model=model,
                messages=messages,
                max_tokens=max_tokens,
                temperature=temperature,
                )
            stop_reason = response["choices"][0]["finish_reason"]
            if stop_reason=="stop":
                stop = True
        except Exception as e:
            print("Fallo en la generación del mensaje:")
            print(response)
            continue
    return response

def generate_tweet():
    "Generates a tweet using OpenAI API"
    tweet_ok = False
    while not tweet_ok:
        openai_response = get_openai_response()
        generated_text = openai_response.choices[0].message.content
        generated_text_clean = generated_text.replace('"', '')
        tweet_ok = len(generated_text_clean) <= 280
    return generated_text_clean
