# backend/main.py

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import fetch_social_media_data

app = FastAPI()

# Allow CORS for frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/social-media-data")
async def get_social_media_data():
    data = fetch_social_media_data()
    return {"data": data}
