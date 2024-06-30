// This script assumes that the weather data is static or simulated for Pune.

document.addEventListener('DOMContentLoaded', function() {
    const weatherInfo = document.querySelector('.weather-info');
    
    weatherInfo.addEventListener('click', function() {
        weatherInfo.classList.toggle('show-details');
    });
});
