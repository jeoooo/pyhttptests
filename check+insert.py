import requests
import certifi
from urllib3.exceptions import InsecureRequestWarning
import warnings
import time
import os
# from dotenv import load_dotenv

# Load environment variables from the .env file
# load_dotenv()

# Suppress only the InsecureRequestWarning caused by unverified HTTPS requests
warnings.filterwarnings("ignore", category=InsecureRequestWarning)

def check_website_uptime(url):
    try:
        # Check if the URL contains specific domains where you want to use verify=False
        # if "student.umindanao.edu.ph" in url or "hcdc.edu.ph" in url:
            response = requests.get(url, verify=False)
        # else:
        #     # Use the certifi CA certificates bundle for SSL verification
        #     response = requests.get(url, verify=certifi.where())

        # Check if the response status code is in the 2xx range, indicating success
            return response.status_code
    except requests.ConnectionError as e:
        error_msg = str(e)
        return f"Failed to connect to the website {url}. Exception: {error_msg}"

def insert_website_status(school_id, website_id, status_code, description, api_key):
    url = "http://127.0.0.1:8090/api/collections/website_status/records"
    timestamp = int(time.time())  # Current Unix timestamp

    payload = {
        'school_id': school_id,
        'website_id': website_id,
        'status_code': status_code,
        'description': description,
        'timestamp': timestamp,
        'api_key': api_key,  # Include your API key here
    }
    headers = {'Content-Type': 'application/json'}

    response = requests.post(url, json=payload, headers=headers)

    print(response.text)

# Your API key loaded from the .env file
# CREATE_API_KEY
# api_key = os.getenv("CREATE_API_KEY")

api_url = "http://127.0.0.1:8090/api/collections/websites/records?skipTotal=false&fields=school_id,website_id,url"

response = requests.get(api_url, verify=certifi.where())

if response.status_code == 200:
    data = response.json()

    items = data.get("items", [])

    for item in items:
        school_id = item.get("school_id")
        website_id = item.get("website_id")
        original_url = item.get("url")

        uptime_status_code = check_website_uptime(original_url)

        # Convert the status code to an integer if it's a string
        try:
            uptime_status_code = int(uptime_status_code)
        except ValueError:
            print(f"Invalid status code for {original_url}: {uptime_status_code}")
            continue  # Skip to the next iteration if the status code is not a valid integer

        if 200 <= uptime_status_code < 300:
            description = "OK"
        elif 400 <= uptime_status_code < 500:
            description = "Client Error"
        elif 500 <= uptime_status_code < 600:
            description = "Server Error"
        else:
            description = f"{uptime_status_code}"

        insert_website_status(school_id, website_id, uptime_status_code, description, '24d72bf989181d279133af7fe89875fe')

        print(f"School ID: {school_id}")
        print(f"Website ID: {website_id}")
        print(f"URL: {original_url}")
        print(f"{description}")
        print(f"Timestamp: {time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}\n")

else:
    print(f"Error: {response.status_code}")
    print(response.text)
