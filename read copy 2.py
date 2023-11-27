import requests
import certifi

# Specify the path to the CA certificates bundle
ca_bundle_path = certifi.where()

# Make an HTTPS request using requests and specify the CA certificates bundle
response = requests.get("https://example.com", verify=ca_bundle_path)

# Check the response
print(response.status_code)
