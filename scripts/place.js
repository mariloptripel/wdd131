document.addEventListener("DOMContentLoaded", function() {
    // Display current year in the footer
    var currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    // Display last modified date in the footer
    var lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;

    // Adjusted values for temperature and wind speed (El Calafate weather)
    var temperature = 5.56; // in Celsius
    var windSpeed = 25.75; // in km/h

    // Calculate and display wind chill factor if conditions are met
    if (isViableWindChill(temperature, windSpeed)) {
        var windChill = calculateWindChill(temperature, windSpeed);
        document.getElementById("windChill").textContent = windChill.toFixed(2) + "°C";
    } else {
        document.getElementById("windChill").textContent = "N/A";
    }
});

function isViableWindChill(temperature, windSpeed) {
    // Check if conditions for viable wind chill calculations are met
    return (temperature <= 10 && windSpeed > 4.8);
}

function calculateWindChill(temperature, windSpeed) {
    // Formula for calculating wind chill factor in Celsius
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}
