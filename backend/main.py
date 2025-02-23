from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from scripts.test import process_menu

app = FastAPI()

# Allow CORS (Cross-Origin Resource Sharing) for the React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React frontend URL
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to FastAPI Backend!"}

@app.get("/api/dewick")
def get_dewick_menu():
    menu = process_menu()  # Call the function from script
    return {"name": "Dewick Dining Hall", "menu": menu}