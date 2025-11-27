import json
import pandas as pd
from bs4 import BeautifulSoup
import requests

URL = "https://www.fangraphs.com/prospects/the-board/2025-in-season-prospect-list/scouting-position"
BASE_URL = "https://www.fangraphs.com"

def scrape_prospects(url = URL):
    resp = requests.get(url)
    resp.raise_for_status()

    soup = BeautifulSoup(resp.text, "html.parser")
    
    script_tag = soup.find("script", id = "__NEXT_DATA__")
    data = json.loads(script_tag.string)
    player_list = data['props']['pageProps']['dehydratedState']['queries'][0]['state']['data']
    player_urls = []

    for player_record in player_list:
        name = player_record.get('playerName', 'N/A')
        relative_url = player_record.get('UPURL', '')
        
        # Concatenate to create the full, absolute URL
        absolute_url = BASE_URL + relative_url
        print(absolute_url)
        # Store the extracted values
        player_urls.append((name, absolute_url))


if __name__ == "__main__":
    scrape_prospects()
   