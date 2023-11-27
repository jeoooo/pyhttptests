import requests

def check_website_uptime(url):
    try:
        response = requests.get(url, verify=False)
        # Check if the response status code is in the 2xx range, indicating success
        if response.status_code // 100 == 2:
            return True, f"The website {url} is up. Response code: {response.status_code}\n"
        else:
            return False, f"The website {url} is down. Response code: {response.status_code}\n"
    except requests.ConnectionError as e:
        error_msg = str(e)
        return False, f"Failed to connect to the website {url}. Exception: {error_msg}"

# Example usage
website_url = "https://www.hcdc.edu.ph/"
is_up, message = check_website_uptime(website_url)

print(message)
