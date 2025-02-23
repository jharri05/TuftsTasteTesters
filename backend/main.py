from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session
from database import SessionLocal, FoodItem  # Import database models and session
from scripts.mealScrape import process_menu  # Import scraper

app = FastAPI()

# Allow CORS (Cross-Origin Resource Sharing) for the React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React frontend URL
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],
)

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def read_root():
    return {"message": "Welcome to FastAPI Backend!"}

@app.get("/api/dewick")
def get_dewick_menu(db: Session = Depends(get_db)):
    """Fetch the menu from the database instead of scraping in real-time"""
    
    # Query the database for all food items in Dewick Dining Hall
    menu_items = db.query(FoodItem).all()
    
    # If no data is found, scrape new data and store it
    if not menu_items:
        scraped_menu = process_menu()  # Run the scraper
        menu_items = db.query(FoodItem).all()  # Fetch again after inserting
    
    return {"name": "Dewick Dining Hall", "menu": [item.name for item in menu_items]}
