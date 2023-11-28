base_url = "http://127.0.0.1:8090/api/collections/current_status/records?filter=school_acronym~'{{school}}'"

# Assuming you have a school variable
school = "your_school_acronym"

# Replace '{{school}}' in the base_url with the actual school variable
complete_url = base_url.replace("{{school}}", school)

print(complete_url)
