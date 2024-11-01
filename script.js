async function fetchWeather() {
    const city = document.getElementById("city").value;
    const apiKey = 'YOUR_NEW_API_KEY'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        
        // Check if the response status is not OK (200)
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        
        // Parse the JSON response
        const data = await response.json();

        // Update HTML content with fetched weather data
        document.getElementById("location").textContent = `Location: ${data.name}, ${data.sys.country}`;
        document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById("description").textContent = `Weather: ${data.weather[0].description}`;
    } catch (error) {
        // Log detailed error information
        console.error("Error fetching data:", error);

        // Display an alert for the user
        alert("Failed to fetch weather data. Please check your API key and city name.");
    }
}
