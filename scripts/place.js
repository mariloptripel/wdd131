document.addEventListener("DOMContentLoaded", function() {
    // current year
    var currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;

    // last modified 
    var lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;


    var temperature = 5.56; // in Celsius
    var windSpeed = 25.75; // in km/h

    //  wind chill 
    if (isViableWindChill(temperature, windSpeed)) {
        var windChill = calculateWindChill(temperature, windSpeed);
        document.getElementById("windChill").textContent = windChill.toFixed(2) + "°C";
    } else {
        document.getElementById("windChill").textContent = "N/A";
    }
});

function isViableWindChill(temperature, windSpeed) {
    // Check if conditions are met
    return (temperature <= 10 && windSpeed > 4.8);
}

function calculateWindChill(temperature, windSpeed) {
    // Formula for calculating wind chill factor in Celsius
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}
