from fastapi import FastAPI, HTTPException, Query
import httpx

app = FastAPI()




@app.get("status/school")
async def get_status_for_school(school: str = Query(..., title="School Acronym")):
    url = f"{base_url}?filter=school_acronym~'{school}'"
    
    print(f"Requesting URL: {url}")  # Print the requested URL
    
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(url)
            
            if response.status_code == 200:
                return response.json()
            else:
                raise HTTPException(status_code=response.status_code, detail="External API error")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")


@app.get("status")
async def get_all_status():
    base_url = "http://127.0.0.1:8090/api/collections/current_status/records?filter=school_acronym~'{{school}}'"

    # Assuming you have a school variable
    school = "your_school_acronym"

    # Replace '{{school}}' in the base_url with the actual school variable
    complete_url = base_url.replace("{{school}}", school)
    
    try:
        async with httpx.AsyncClient() as client:
            response = await client.get(complete_url)

            if response.status_code == 200:
                return response.json()
            else:
                raise HTTPException(status_code=response.status_code, detail="External API error")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")
