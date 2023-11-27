import requests
from datetime import datetime
from urllib.parse import quote

# Function to check uptime using corsproxy.io
def check_uptime(website_url):
    # corsproxy_url = f"https://corsproxy.io/?{quote(website_url)}"
    # response = requests.get(corsproxy_url)
    response = requests.get(website_url)
    return response.status_code, response.text

# API endpoint for posting status records
api_url = "http://127.0.0.1:8090/api/collections/status/records"

# Website URL to check uptime
website_url = "http://studentportal.hcdc.edu.ph/login"  # Replace with the actual website URL

try:
    # Check uptime using corsproxy.io
    status_code, response_text = check_uptime(website_url)

    # Determine the description based on the status code
    description = "OK" if status_code == 200 else "ERROR"

    # Prepare payload for the API request
    payload = {
        'website_url': website_url,
        'status_code': status_code,
        'description': description,
        'timestamp': datetime.now().isoformat()
    }

    headers = {'Content-Type': 'application/json'}

    # Make the POST request to the API
    response = requests.post(api_url, headers=headers, json=payload)

    # Print the response
    print(response.text)

    # Check if the request was successful (status code 2xx)
    response.raise_for_status()

except requests.exceptions.RequestException as e:
    # Handle any exceptions that might occur during the request
    print(f"Error: {e}")
