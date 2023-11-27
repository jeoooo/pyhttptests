import requests
import certifi
from urllib3.exceptions import InsecureRequestWarning
import warnings

# Suppress only the InsecureRequestWarning caused by unverified HTTPS requests
warnings.filterwarnings("ignore", category=InsecureRequestWarning)

def check_website_uptime(url):
    try:
        # Check if the URL contains specific domains where you want to use verify=False
        if "student.umindanao.edu.ph" in url or "hcdc.edu.ph" in url:
            response = requests.get(url, verify=False)
        else:
            # Use the certifi CA certificates bundle for SSL verification
            response = requests.get(url, verify=certifi.where())

        # Check if the response status code is in the 2xx range, indicating success
        if response.status_code // 100 == 2:
            return response.status_code
        else:
            return response.status_code
    except requests.ConnectionError as e:
        error_msg = str(e)
        return f"Failed to connect to the website {url}. Exception: {error_msg}"

def check_url_status(url):
    try:
        # Check if the URL contains specific domains where you want to use verify=False
        if "student.umindanao.edu.ph" in url or "hcdc.edu.ph" in url:
            response = requests.get(url, verify=False)
        else:
            # Use the certifi CA certificates bundle for SSL verification
            response = requests.get(url, verify=certifi.where())

        return response.status_code == 200, response.status_code
    except requests.ConnectionError as e:
        return False, getattr(e, 'response', None)

api_url = "http://127.0.0.1:8090/api/collections/websites/records?skipTotal=false&fields=school_id,website_id,url"

response = requests.get(api_url, verify=certifi.where())

if response.status_code == 200:
    data = response.json()

    items = data.get("items", [])

    for item in items:
        school_id = item.get("school_id")
        website_id = item.get("website_id")
        original_url = item.get("url")

        uptime_message = check_website_uptime(original_url)

        print(f"School ID: {school_id}")
        print(f"Website ID: {website_id}")
        print(f"URL: {original_url}")
        print(f"Website Uptime Check: HTTP Status Code {uptime_message}\n")

else:
    print(f"Error: {response.status_code}")
    print(response.text)
