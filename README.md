# Weather App

This is a simple weather application built with React.js. It fetches weather data from the OpenWeather API and displays the current weather conditions for a specified location. The app supports both light and dark modes and includes various weather details along with relevant emojis and background images.

# Features

- Fetches and displays weather information for any city or zip code.
- Supports light and dark mode toggling.
- Displays temperature, humidity, wind speed, and weather description with emojis.
- Background image changes according to the weather description.

# Technologies Used

- React.js: A JavaScript library for building user interfaces.
- Axios: A promise-based HTTP client for making API requests.
- OpenWeather API: A service to get weather data.
- CSS: Styling the application.

# Instructions to Run the Application Locally

Prerequisites

Node.js
npm or yarn

Steps

Clone the repository:

git clone https://github.com/shadyTyagi/WeatherApp.git
cd weather-app
Install dependencies:

Using npm:

npm install
Or using yarn:

yarn install
Add your OpenWeather API key:

Open App.js and replace YOUR_API_KEY with your actual OpenWeather API key.

Start the development server:

Using npm:

npm start
Or using yarn:

yarn start
Open the application in your browser:

The application should automatically open in your default web browser. If not, navigate to http://localhost:3000.

# Approach and Explanation

- State Management:React's useState hook is used to manage the state of the location input, weather data, error messages, and the dark mode toggle.
- API Integration: Axios is used to fetch weather data from the OpenWeather API. The API response is processed and displayed in a user-friendly format.
- Conditional Rendering: Based on the weather description, we display corresponding emojis and background images to enhance the user experience.
- Dark Mode: A simple toggle function is implemented to switch between light and dark modes.
  Known Issues or Limitations
- API Rate Limits: The OpenWeather API has rate limits that might affect the app's performance if too many requests are made in a short period.
- Error Handling: While basic error handling is in place, the app could be improved to handle more specific cases and provide detailed feedback to the user.
- Mobile Responsiveness: The application is responsive, but further testing and adjustments may be needed for a wide range of devices and screen sizes.
- Background Images: Background images are applied based on a hardcoded mapping of weather descriptions. More dynamic handling and additional images could be added to enhance visual appeal.
