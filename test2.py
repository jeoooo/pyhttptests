import requests

url = "http://127.0.0.1:8090/api/collections/status/records"

payload = {'site_id': '',
'school_id': '',
'status_code': '',
'description': '',
'timestamp': ''}
files=[

]
headers = {}

response = requests.request("POST", url, headers=headers, json=payload, files=files)

print(response.text)
