// footer
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = `© ${currentYear}`;

const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;

// Products
const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor",
        avgRating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power Laces",
        avgRating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time Circuits",
        avgRating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low Voltage Reactor",
        avgRating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp Equalizer",
        avgRating: 5.0
    }
];

// Product Name Function
function populateProductOptions() {
    const productNameSelect = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.textContent = product.name; // Display product name
        productNameSelect.appendChild(option);
    });
}
// Overall Rating Function
function populateOverallRating() {
    const overallRatingDiv = document.getElementById('overallRating');
    const ratings = ['1', '2', '3', '4', '5'];

    ratings.forEach(level => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'overallRating';
        input.value = level;
        input.required = true;

        const starSymbol = '\u2605'; 
        const label = document.createElement('label');
        label.textContent = starSymbol.repeat(parseInt(level)); 

        // Append radio button and label to overallRatingDiv
        overallRatingDiv.appendChild(input);
        overallRatingDiv.appendChild(label);
    });
}

// Features Function
function populateUsefulFeatures() {
    const featuresDiv = document.getElementById('features');
    const features = ['Design', 'Durability', 'Ease of Use', 'Performance'];

    features.forEach(feature => {
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'usefulFeatures';
        input.value = feature;

        const label = document.createElement('label');
        label.textContent = feature;

        // Append checkbox and label to featuresDiv
        featuresDiv.appendChild(input);
        featuresDiv.appendChild(label);
        featuresDiv.appendChild(document.createElement('br')); 
    });
}

// Review counter Function
function updateReviewCounter() {
    let reviewCounter = localStorage.getItem('reviewCounter') || 0;
    reviewCounter++;
    localStorage.setItem('reviewCounter', reviewCounter);
    
    // Redirect to the review page??
    window.location.href = 'review.html'; 
}

// Event listener 
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    updateReviewCounter();
});


populateProductOptions();
populateOverallRating();
populateUsefulFeatures();

