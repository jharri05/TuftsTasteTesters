from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import time

def process_menu():
    # Set up Chrome options for headless mode
    chrome_options = Options()
    chrome_options.add_argument("--headless")  # Run in headless mode (no GUI)
    chrome_options.add_argument("--disable-gpu")  # Recommended for headless mode
    chrome_options.add_argument("--window-size=1920x1080")  # Define window size
    chrome_options.add_argument("--no-sandbox")  # Bypass OS security model (Linux)
    chrome_options.add_argument("--disable-dev-shm-usage")  # Prevent memory issues

    # Set up WebDriver with options
    driver = webdriver.Chrome(options=chrome_options)

    # Open the webpage
    URL = "https://tufts.nutrislice.com/menu/dewick-dining"  # Replace with the real URL
    driver.get(URL)

    print(driver.title, "Lunch:")

    # Wait for JavaScript content to load
    time.sleep(1) 

    button = driver.find_element(By.CLASS_NAME, "primary")
    button.click()
    time.sleep(1)
    button = driver.find_element(By.CLASS_NAME, "name")
    button.click()
    time.sleep(1)
    button = driver.find_element(By.LINK_TEXT, "Lunch")
    button.click()
    time.sleep(1)

    try:
        button = driver.find_element(By.LINK_TEXT, "Main Line")
        button.click()
    except:
        print("No Main Line Options")
    try:
        button = driver.find_element(By.LINK_TEXT, "Flex Line")
        button.click()
    except:
        print("No Flex Line Options")
    try:
        button = driver.find_element(By.LINK_TEXT, "All 9 Free")
        button.click()
    except:
        print("No All 9 Free Options")
    try:
        button = driver.find_element(By.LINK_TEXT, "Grill")
        button.click()  
    except:
        print("No Grill Options")
    try:
        button = driver.find_element(By.LINK_TEXT, "Pasta")
        button.click()
    except:
        print("No Pasta Options")
    try:
        button = driver.find_element(By.LINK_TEXT, "Pizza")
        button.click()
    except:
        print("No Pizza Options")
    try:
        button = driver.find_element(By.LINK_TEXT, "Beans, Greens And Grains")
        button.click()
    except:
        print("No Beans, Greens, and Grains Options.")
    try:
        button = driver.find_element(By.LINK_TEXT, "Specialty Salads")
        button.click()
    except:
        print("No Salad Options")
    try:
        button = driver.find_element(By.LINK_TEXT, "Daily Sandwich")
        button.click()
    except:
        print("No Sandwich Options")
    try:
        button = driver.find_element(By.LINK_TEXT, "Soup")
        button.click()
    except:
        print("No Soup Options")
    try:
        button = driver.find_element(By.LINK_TEXT, "Desserts")
        button.click()
    except:
        print("No Dessert Options")
    try:
        button = driver.find_element(By.LINK_TEXT, "Breakfast Pastry")
        button.click()
    except:
        print("No Breakfast Pastry Options")

    # Parse the dynamically updated page source
    soup = BeautifulSoup(driver.page_source, "html.parser")

    food_items = soup.find_all("span", class_="food-name")
    cleaned_data = [item.text.strip() for item in food_items]

    for items in cleaned_data:
        print(items)

    # Close WebDriver
    driver.quit()
    return cleaned_data