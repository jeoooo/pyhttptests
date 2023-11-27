import requests
import certifi
from urllib3.exceptions import InsecureRequestWarning
import warnings
import time

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
        return response.status_code
    except requests.ConnectionError as e:
        error_msg = str(e)
        return f"Failed to connect to the website {url}. Exception: {error_msg}"

def insert_website_status(school_id, website_id, status_code, description):
    url = "http://127.0.0.1:8090/api/collections/website_status/records"
    timestamp = int(time.time())  # Current Unix timestamp

    payload = {
        'school_id': school_id,
        'website_id': website_id,
        'status_code': status_code,
        'description': description,
        'timestamp': timestamp,
    }
    headers = {'Content-Type': 'application/json'}

    response = requests.post(url, json=payload, headers=headers)

    print(response.text)

def run_uptime_checks(interval_seconds=30, num_checks=-1):
    iteration = 1
    while num_checks != 0:
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

                insert_website_status(school_id, website_id, uptime_status_code, description)

                print(f"School ID: {school_id}")
                print(f"Website ID: {website_id}")
                print(f"URL: {original_url}")
                print(f"{description}")
                print(f"Timestamp: {time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())}\n")

            remaining_time = interval_seconds * (num_checks - iteration + 1)
            print(f"Next check in {remaining_time} seconds.\n")

            time.sleep(interval_seconds)  # Sleep for the specified interval before the next iteration
            iteration += 1

            if num_checks > 0:
                num_checks -= 1

        else:
            print(f"Error: {response.status_code}")
            print(response.text)
            remaining_time = interval_seconds * (num_checks - iteration + 1)
            print(f"Next check in {remaining_time} seconds.\n")
            time.sleep(interval_seconds)  # Sleep for the specified interval before the next iteration

if __name__ == "__main__":
    run_uptime_checks(interval_seconds=30, num_checks=-1)
