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
        option.textContent = product.name; 
        productNameSelect.appendChild(option);
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

