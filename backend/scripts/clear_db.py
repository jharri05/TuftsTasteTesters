import sys
import os

# Ensure the backend folder is in Python's import path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from database import SessionLocal, FoodItem  # Now it should work

def clear_database():
    """Delete all records from the food_items table."""
    db = SessionLocal()
    db.query(FoodItem).delete()
    db.commit()
    db.close()
    print("✅ All items have been deleted from the database.")

if __name__ == "__main__":
    clear_database()
