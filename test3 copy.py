import requests
from datetime import datetime
from urllib.parse import quote


# Function to check uptime using check_website_uptime
def check_website_uptime(url):
    try:
        response = requests.get(url)
        # Check if the response status code is in the 2xx range, indicating success
        if response.status_code // 100 == 2:
            return True, f"OK"
        else:
            return False, f"DOWN/EXPERIENCING ISSUES"
    except requests.ConnectionError:
        return False, f"Failed to connect to the website {url}"

# API endpoint for posting status records
api_url = "http://127.0.0.1:8090/api/collections/status/records"

# Website URL to check uptime
website_url = "http://studentportal.hcdc.edu.ph/login"  # Replace with the actual website URL

try:
    # Check uptime using check_website_uptime
    is_up, response_text = check_website_uptime(website_url)

    # Determine the description based on the status
    description = "OK" if is_up else "Error"

    # Prepare payload for the API request
    payload = {
        'status_code': 200 if is_up else 503,  # Use 200 for 'OK', 503 for 'Service Unavailable'
        'description': response_text,
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
