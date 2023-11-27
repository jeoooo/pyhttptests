import requests
import json

url = "http://127.0.0.1:8090/api/collections/website_status/records?skipTotal=false"
payload = {}
headers = {}

response = requests.get(url, headers=headers, data=payload)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the JSON response
    data = response.json()

    # Extract information from the response
    page = data.get("page")
    per_page = data.get("perPage")
    total_items = data.get("totalItems")
    total_pages = data.get("totalPages")

    # Extract information from the items list
    items = data.get("items", [])

    for item in items:
        collection_id = item.get("collectionId")
        collection_name = item.get("collectionName")
        created = item.get("created")
        description = item.get("description")
        record_id = item.get("id")
        status_code = item.get("status_code")
        timestamp = item.get("timestamp")
        updated = item.get("updated")
        website_url = item.get("website_url")

        # Print or use the extracted information as needed
        print(f"Collection ID: {collection_id}")
        print(f"Collection Name: {collection_name}")
        print(f"Created: {created}")
        print(f"Description: {description}")
        print(f"Record ID: {record_id}")
        print(f"Status Code: {status_code}")
        print(f"Timestamp: {timestamp}")
        print(f"Updated: {updated}")
        print(f"Website URL: {website_url}")
        print("\n")

else:
    print(f"Error: {response.status_code}")
    print(response.text)
