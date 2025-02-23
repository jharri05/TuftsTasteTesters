from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker, declarative_base

# Choose SQLite or PostgreSQL
DATABASE_URL = "sqlite:///tufts_menu.db"  # For SQLite
# DATABASE_URL = "postgresql://username:password@localhost:5432/tufts_menu"  # For PostgreSQL

# Create a database engine
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False} if "sqlite" in DATABASE_URL else {})

# Create a session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Define Base for ORM models
Base = declarative_base()

# Define a FoodItem model (represents a table in the database)
class FoodItem(Base):
    __tablename__ = "food_items"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    meal = Column(String, index=True)  # Breakfast, Lunch, or Dinner

# Create database tables
Base.metadata.create_all(bind=engine)
