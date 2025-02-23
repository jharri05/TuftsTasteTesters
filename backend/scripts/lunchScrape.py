from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
import time

# Modify/duplicate script to run on Lunch, Breakfast, and Dinner.
# iterate thru page and open all possible LINK_TEXT elements?

driver = webdriver.Chrome()

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
button = driver.find_element(By.LINK_TEXT, "Main Line")
button.click()
button = driver.find_element(By.LINK_TEXT, "Flex Line")
button.click()
button = driver.find_element(By.LINK_TEXT, "All 9 Free")
button.click()
button = driver.find_element(By.LINK_TEXT, "Grill")
button.click()
button = driver.find_element(By.LINK_TEXT, "Pasta")
button.click()
button = driver.find_element(By.LINK_TEXT, "Pizza")
button.click()
button = driver.find_element(By.LINK_TEXT, "Beans, Greens And Grains")
button.click()
button = driver.find_element(By.LINK_TEXT, "Specialty Salads")
button.click()
button = driver.find_element(By.LINK_TEXT, "Daily Sandwich")
button.click()
button = driver.find_element(By.LINK_TEXT, "Soup")
button.click()
button = driver.find_element(By.LINK_TEXT, "Desserts")
button.click()
time.sleep(4)

# Parse the dynamically updated page source
soup = BeautifulSoup(driver.page_source, "html.parser")

food_items = soup.find_all("span", class_="food-name")
cleaned_data = [item.text.strip() for item in food_items]

for items in cleaned_data:
    print(items)

# Close WebDriver
driver.quit()