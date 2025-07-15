import os
from flask import Flask, render_template, request
import google.generativeai as genai
from dotenv import load_dotenv
import re
import requests
import json
import random
import logging
from datetime import datetime, timedelta

# Configure logging
logging.basicConfig(level=logging.INFO)

# Load environment variables
load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
UNSPLASH_ACCESS_KEY = os.getenv("UNSPLASH_ACCESS_KEY")
OPENWEATHER_API_KEY = os.getenv("OPENWEATHER_API_KEY")

# Debug environment variables
if not GEMINI_API_KEY:
    logging.warning("GEMINI_API_KEY not found in environment variables")
    # Fallback for testing only (remove in production)
    GEMINI_API_KEY = "AIzaSyDRMcfydCo0u_piEoCWC5nxXJkDG_Jk-bM"

if not UNSPLASH_ACCESS_KEY:
    logging.warning("UNSPLASH_ACCESS_KEY not found in environment variables")
    # Fallback for testing only (remove in production)
    UNSPLASH_ACCESS_KEY = "SyTkzsHhAKe0JyZTjrYMmcVXaVfeRvT8f7fjCZFv7dc"

if not OPENWEATHER_API_KEY:
    logging.warning("OPENWEATHER_API_KEY not found in environment variables")
    # Fallback for testing only (remove in production)
    OPENWEATHER_API_KEY = "your_openweathermap_api_key_here"

# Configure Gemini API
genai.configure(api_key=GEMINI_API_KEY)

app = Flask(__name__)

# Route: Home Page
@app.route('/')
def index():
    return render_template('index.html')

# Route: Handle Form Submission
@app.route('/plan', methods=['POST'])
def plan():
    place = request.form['place']
    days = request.form['days']
    budget = request.form['budget']
    
    logging.info(f"Planning trip to {place} for {days} days with budget ${budget}")
    
    # Generate itinerary using Gemini
    itinerary_text = generate_itinerary(place, days, budget)
    
    # Parse itinerary into structured day plans
    day_plans = parse_itinerary(itinerary_text)
    
    # Generate destination image
    destination_image = generate_destination_image(place)
    logging.info(f"Destination image URL: {destination_image}")
    
    # Get weather forecast
    weather_data = get_weather_forecast(place, days)
    logging.info(f"Weather data: {weather_data}")
    
    # If weather data is available, add it to day plans
    if weather_data:
        for i, weather in enumerate(weather_data):
            if i < len(day_plans):
                day_plans[i]["weather"] = weather
    
    # Generate images for each day
    for day in day_plans:
        image_url = generate_day_image(day["raw_text"], place)
        day["image_url"] = image_url
        logging.info(f"Day {day['number']} image URL: {image_url}")
    
    return render_template('result.html', 
                          place=place, 
                          budget=budget, 
                          days=days,
                          itinerary=itinerary_text,
                          day_plans=day_plans,
                          destination_image=destination_image,
                          has_weather=weather_data is not None)

# AI Itinerary Generator Function
def generate_itinerary(place, days, budget):
    prompt = (
        f"Plan a {days}-day trip to {place} within a ${budget} budget. "
        f"Include famous attractions, historical places, pubs, museums, and fun things to do. "
        f"Format the output in a nice day-wise plan. For each day, start with 'Day X: [Title]' "
        f"followed by morning, afternoon and evening activities. Include restaurants for meals."
    )

    try:
        model = genai.GenerativeModel(model_name="models/gemini-1.5-flash")
        chat = model.start_chat(history=[])
        response = chat.send_message(prompt)
        return response.text
    except Exception as e:
        logging.error(f"Error generating itinerary: {str(e)}")
        return f"Error generating itinerary: {str(e)}"

def get_weather_forecast(place, days):
    """
    Get weather forecast for a destination using OpenWeatherMap API.
    """
    try:
        # Get API key from environment variables - already handled in the imports section
        
        # First, get coordinates for the location
        geocoding_url = f"http://api.openweathermap.org/geo/1.0/direct"
        params = {
            "q": place,
            "limit": 1,
            "appid": OPENWEATHER_API_KEY
        }
        
        logging.info(f"Getting coordinates for {place}")
        geo_response = requests.get(geocoding_url, params=params)
        
        if geo_response.status_code != 200 or not geo_response.json():
            logging.error(f"Error getting coordinates: {geo_response.text}")
            return None
            
        location_data = geo_response.json()[0]
        lat = location_data["lat"]
        lon = location_data["lon"]
        
        # Now get the 5-day weather forecast
        forecast_url = "https://api.openweathermap.org/data/2.5/forecast"
        params = {
            "lat": lat,
            "lon": lon,
            "units": "metric",  # Use metric units (Celsius)
            "appid": OPENWEATHER_API_KEY
        }
        
        logging.info(f"Getting weather forecast for coordinates: {lat}, {lon}")
        forecast_response = requests.get(forecast_url, params=params)
        
        if forecast_response.status_code != 200:
            logging.error(f"Error getting forecast: {forecast_response.text}")
            return None
            
        forecast_data = forecast_response.json()
        
        # Process the forecast data by day
        day_forecasts = []
        today = datetime.now().date()
        
        # Limit to the requested number of days or 5 days (whichever is smaller)
        days_to_forecast = min(int(days), 5)
        
        for day_number in range(1, days_to_forecast + 1):
            target_date = today + timedelta(days=day_number)
            target_date_str = target_date.strftime("%Y-%m-%d")
            
            # Filter forecast data for this day
            day_data = [item for item in forecast_data["list"] 
                        if item["dt_txt"].startswith(target_date_str)]
            
            if not day_data:
                continue
                
            # Extract temperatures and weather conditions
            temps = [item["main"]["temp"] for item in day_data]
            min_temp = round(min(temps))
            max_temp = round(max(temps))
            
            # Get the most common weather condition for the day
            conditions = [item["weather"][0]["main"] for item in day_data]
            descriptions = [item["weather"][0]["description"] for item in day_data]
            icons = [item["weather"][0]["icon"] for item in day_data]
            
            # Get the most common condition (mid-day if possible)
            mid_day_index = len(day_data) // 2 if len(day_data) > 1 else 0
            condition = conditions[mid_day_index]
            description = descriptions[mid_day_index]
            icon = icons[mid_day_index]
            
            # Get humidity
            humidity = day_data[mid_day_index]["main"]["humidity"]
            
            # Generate an AQI value (simulated) based on conditions
            # This is just for UI demonstration since OpenWeatherMap doesn't provide AQI in the free tier
            # In production, you would use actual AQI data from an appropriate API
            aqi_values = {
                "Clear": {"value": 35, "class": "aqi-good"},
                "Clouds": {"value": 55, "class": "aqi-moderate"},
                "Rain": {"value": 65, "class": "aqi-moderate"},
                "Snow": {"value": 70, "class": "aqi-moderate"},
                "Drizzle": {"value": 60, "class": "aqi-moderate"},
                "Thunderstorm": {"value": 85, "class": "aqi-poor"},
                "Mist": {"value": 75, "class": "aqi-moderate"},
                "Smoke": {"value": 95, "class": "aqi-poor"},
                "Haze": {"value": 80, "class": "aqi-poor"},
                "Dust": {"value": 90, "class": "aqi-poor"},
                "Fog": {"value": 70, "class": "aqi-moderate"}
            }
            
            # Default AQI if condition not in our mapping
            aqi = aqi_values.get(condition, {"value": 50, "class": "aqi-moderate"})
            
            day_forecast = {
                "day_number": day_number,
                "date": target_date.strftime("%b %d"),
                "min_temp": min_temp,
                "max_temp": max_temp,
                "condition": condition,
                "description": description.capitalize(),
                "icon": icon,
                "humidity": humidity,
                "aqi_value": aqi["value"],
                "aqi_class": aqi["class"]
            }
            
            day_forecasts.append(day_forecast)
        
        return day_forecasts
        
    except Exception as e:
        logging.error(f"Error fetching weather data: {str(e)}")
        return None

def generate_destination_image(place):
    """
    Generate a destination image using the Unsplash API.
    """
    try:
        # Make API request to Unsplash
        search_query = f"{place} travel landmark destination"
        url = f"https://api.unsplash.com/search/photos"
        params = {
            "query": search_query,
            "per_page": 10,
            "client_id": UNSPLASH_ACCESS_KEY,
            "orientation": "landscape"
        }
        
        logging.info(f"Requesting Unsplash image for query: {search_query}")
        response = requests.get(url, params=params)
        logging.info(f"Unsplash API response status: {response.status_code}")
        
        if response.status_code != 200:
            logging.error(f"Unsplash API error: {response.text}")
            return f"https://source.unsplash.com/1200x800/?{place},travel,landmark"
            
        data = response.json()
        
        # Pick a random image from the results if available
        if data and "results" in data and len(data["results"]) > 0:
            results = data["results"]
            random_image = random.choice(results)
            image_url = random_image["urls"]["regular"]
            logging.info(f"Selected image URL: {image_url}")
            return image_url
        else:
            logging.warning("No results found from Unsplash API")
            # Fallback to placeholder
            return f"https://source.unsplash.com/1200x800/?{place},travel,landmark"
            
    except Exception as e:
        logging.error(f"Error fetching destination image: {str(e)}")
        # Fallback to placeholder
        return f"https://source.unsplash.com/1200x800/?{place},travel,landmark"

def generate_day_image(day_activities, place):
    """
    Generate an image for a day's activities using the Unsplash API.
    """
    try:
        # Extract keywords from activities to use in image generation
        keywords = extract_keywords(day_activities)
        logging.info(f"Keywords extracted for day image: {keywords}")
        
        # Add location for context
        search_query = f"{keywords} {place} travel"
        
        # Make API request to Unsplash
        url = f"https://api.unsplash.com/search/photos"
        params = {
            "query": search_query,
            "per_page": 10,
            "client_id": UNSPLASH_ACCESS_KEY,
            "orientation": "landscape"
        }
        
        logging.info(f"Requesting Unsplash image for day query: {search_query}")
        response = requests.get(url, params=params)
        logging.info(f"Unsplash API response status: {response.status_code}")
        
        if response.status_code != 200:
            logging.error(f"Unsplash API error: {response.text}")
            return f"https://source.unsplash.com/800x600/?{keywords},{place}"
            
        data = response.json()
        
        # Pick a random image from the results if available
        if data and "results" in data and len(data["results"]) > 0:
            results = data["results"]
            random_image = random.choice(results)
            image_url = random_image["urls"]["regular"]
            return image_url
        else:
            logging.warning("No results found from Unsplash API for day image")
            # Fallback to placeholder
            return f"https://source.unsplash.com/800x600/?{keywords},{place}"
            
    except Exception as e:
        logging.error(f"Error fetching day image: {str(e)}")
        # Fallback to placeholder
        return f"https://source.unsplash.com/800x600/?{keywords},{place}"

def extract_keywords(activities_text):
    """
    Extract relevant keywords from activities text.
    """
    # Common travel-related keywords to look for
    common_activities = [
        "breakfast", "lunch", "dinner", "museum", "beach", "hiking", "sightseeing", 
        "shopping", "park", "tour", "cathedral", "temple", "mosque", "church", 
        "market", "castle", "palace", "garden", "mountain", "lake", "river",
        "historical", "ancient", "monument", "architecture", "nightlife", "café",
        "restaurant", "gallery", "theater", "cinema", "concert", "street food",
        "local cuisine", "landmark", "viewpoint", "sunset", "sunrise"
    ]
    
    # Convert to lowercase
    text_lower = activities_text.lower()
    
    # Find matches
    matches = []
    for activity in common_activities:
        if activity in text_lower:
            matches.append(activity)
    
    # Extract potential attractions (capitalized multi-word names)
    attraction_pattern = re.compile(r'((?:[A-Z][a-z]+\s)+(?:[A-Z][a-z]+))')
    attractions = attraction_pattern.findall(activities_text)
    if attractions:
        # Add up to 2 attractions
        matches.extend(attractions[:2])
    
    # Ensure we have at least something
    if not matches:
        matches = ["travel", "tourism"]
    
    # Join keywords for search query (limit to 3 for better results)
    return " ".join(matches[:3])

def parse_itinerary(itinerary_text):
    """
    Parse raw itinerary text into structured day plans.
    """
    day_plans = []
    current_day = {}
    
    # Use regex to find day patterns like "Day 1:", "Day 1 -", "Day One:", etc.
    day_pattern = re.compile(r'Day\s+(\d+|one|two|three|four|five|six|seven|eight|nine|ten)[\s:,-]+(.+?)(?=\n|\r|$)', re.IGNORECASE)
    
    # Split by day headers
    day_blocks = re.split(r'(Day\s+\d+[\s:,-]+.*?)(?=\n|\r|$)', itinerary_text, flags=re.IGNORECASE)
    
    # Process each day block
    current_block = None
    for block in day_blocks:
        if block.strip():
            day_match = day_pattern.match(block)
            if day_match:
                # This is a day header
                current_block = block
                day_num = day_match.group(1)
                day_title = day_match.group(2).strip()
                
                # Convert word numbers to digits if needed
                number_words = {'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5',
                               'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'}
                if day_num.lower() in number_words:
                    day_num = number_words[day_num.lower()]
                
                current_day = {
                    "number": day_num,
                    "title": day_title,
                    "activities": "<ul>",
                    "raw_text": block
                }
                day_plans.append(current_day)
            elif current_block and current_day:
                # This is content for the current day
                lines = block.strip().split('\n')
                for line in lines:
                    if line.strip():
                        current_day["activities"] += f"<li>{line.strip()}</li>"
                        current_day["raw_text"] += " " + line
    
    # If no day structure was found, try different parsing approach
    if not day_plans:
        lines = itinerary_text.strip().split('\n')
        current_day = None
        
        for line in lines:
            if not line.strip():
                continue
                
            day_match = re.match(r'Day\s+(\d+|one|two|three|four|five|six|seven|eight|nine|ten)[\s:,-]+(.+)', line, re.IGNORECASE)
            
            if day_match:
                if current_day:
                    current_day["activities"] += "</ul>"
                    day_plans.append(current_day)
                
                day_num = day_match.group(1)
                day_title = day_match.group(2).strip() if day_match.group(2) else ""
                
                # Convert word numbers to digits if needed
                number_words = {'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5',
                               'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10'}
                if day_num.lower() in number_words:
                    day_num = number_words[day_num.lower()]
                
                current_day = {
                    "number": day_num,
                    "title": day_title,
                    "activities": "<ul>",
                    "raw_text": line
                }
            elif current_day and line.strip():
                current_day["activities"] += f"<li>{line.strip()}</li>"
                current_day["raw_text"] += " " + line
    
    # Add closing tag to the last day's activities
    if day_plans and "activities" in day_plans[-1]:
        day_plans[-1]["activities"] += "</ul>"
    
    return day_plans

# Flask App Runner
if __name__ == '__main__':
    print("✅ Flask server is starting... visit http://127.0.0.1:5000/")
    app.run(debug=True)


    