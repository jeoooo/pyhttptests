import requests

url = "http://localhost:8090/api/collections/note/records"

payload = {'note': 'test'}
files=[]
headers = {}

response = requests.request("POST", url, headers=headers, json=payload, files=files)

print(response.text)