# 🧠 AI Trip Planner

An intelligent trip planning web app that generates personalized travel itineraries based on your destination, trip duration, and budget — powered by the Gemini AI API & Unspalash API.

---

## 🌍 Features

This app helps users plan their trip effortlessly using AI. Key features include:

- Input any global destination
- Select the number of days for your trip
- Enter your estimated budget
- Get AI-generated itineraries including:
  - Historical places
  - Museums
  - Pubs and nightlife
  - Famous attractions
- Gemini API used to fetch real-time place data and generate descriptive content
- Unsplash API used to for image generation of the places
- Images of the places are shown dynamically in the interface

---

## 🔧 Tech Stack

This project uses the following technologies:

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python (Flask)
- **AI Integration:** Gemini API (Google AI), Unspalash API
- **Environment Management:** Python venv
- **Optional Hosting:** Render / Heroku / Local Flask Server

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-trip-planner.git
cd ai-trip-planner
```

### 2. Set Up a Virtual Environment

```bash
python -m venv venv
```

Activate the virtual environment:

- For macOS/Linux:

```bash
source venv/bin/activate
```

- For Windows:

```bash
venv\Scripts\activate
```

### 3. Install Required Dependencies

```bash
pip install -r requirements.txt
```

### 4. Add Your Gemini API Key

Create a `.env` file in the root directory and paste your API key like this:

```env
GEMINI_API_KEY=your_actual_gemini_api_key_here
UNSPALASH_API_KEY=your_actual_unsplash_api_key_here
```

### 5. Run the Flask App

```bash
python app.py
```

Open your browser and navigate to:  
`http://localhost:5000`

---

## 📁 Project Structure

Here’s a breakdown of the folder structure:

```plaintext
ai-trip-planner/
│
├── static/
│   └── style.css             # Stylesheet for the frontend
│
├── templates/
│   └── index.html            # HTML template rendered by Flask
│
├── app.py                    # Main Python backend file
├── .env                      # Environment file storing Gemini API key
├── requirements.txt          # Python dependencies
└── README.md                 # Project documentation
```

---

## ✨ Future Features (Roadmap)

Planned enhancements for upcoming versions:

- 🌦️ Integrate weather forecasts based on travel dates
- 🗺️ Add map view with markers for places in the itinerary
- 🔐 Implement user authentication and saved itineraries
- ✈️ Offer hotel and flight recommendations via external APIs
- 📱 Make the app mobile responsive

---

## 🤝 Contributing

We welcome contributions from the community!  
To contribute:

1. Fork this repository
2. Create a new feature branch  
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes  
   ```bash
   git commit -m "Add: Description of feature"
   ```
4. Push to your branch  
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request

Please make sure your code follows the existing style and passes any relevant tests.

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for more details.

---

## 👤 Author

Made with ❤️ by [Kiran Patige](https://github.com/kiranpatige)  
Connect with me on [LinkedIn](https://www.linkedin.com/in/kiranpatige)
