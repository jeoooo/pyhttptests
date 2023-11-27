from http.server import HTTPServer, BaseHTTPRequestHandler
from threading import Thread
import requests

# Define a custom HTTP request handler that always returns a specific status code
class CustomRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        # Always return a 503 Service Unavailable status code
        self.send_response(503)
        self.end_headers()
        self.wfile.write(b"Site is down for testing purposes")

# Start a simple HTTP server on a separate thread
def start_http_server():
    server_address = ('localhost', 8080)
    httpd = HTTPServer(server_address, CustomRequestHandler)
    print('Starting HTTP server on http://localhost:8080...')
    httpd.serve_forever()

# Function to check website uptime using the local HTTP server
def check_website_uptime(url):
    try:
        # Use a different port to avoid conflicts with the local server
        response = requests.get(url.replace('http://', 'http://localhost:8080/'))
        # Check if the response status code is in the 2xx range, indicating success
        if response.status_code // 100 == 2:
            return True, f"The website {url} is up. Response code: {response.status_code}"
        else:
            return False, f"The website {url} is down. Response code: {response.status_code}"
    except requests.ConnectionError:
        return False, f"Failed to connect to the website {url}"

# Start the HTTP server on a separate thread
http_server_thread = Thread(target=start_http_server)
http_server_thread.start()

# Example usage to check the website uptime
website_url = "http://localhost:8080"  # Use the local server for testing
is_up, message = check_website_uptime(website_url)

# Print the result
print(message)

# Stop the HTTP server thread when done testing
http_server_thread.join()
