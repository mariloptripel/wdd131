// Footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
});

// menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

function toggleActive(element) {
    const currentActive = document.querySelector('.navigation .active');
    if (currentActive) {
        currentActive.classList.remove('active');
    }
    element.classList.add('active');
    // Optionally close the hamburger menu
    mainnav.classList.remove('show');
    hambutton.classList.remove('show');
}


// Products
const products = [
    {
        id: "beginner",
        name: "Beginner",
        avgRating: 4.5
    },
    {
        id: "complete",
        name: "Complete",
        avgRating: 4.7
    },
    {
        id: "enterprise",
        name: "Enterprise",
        avgRating: 4.0
    }
];

// Product Name Function
function populateProductOptions() {
    const productNameSelect = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.textContent = product.name; 
        option.value = product.id; 
        productNameSelect.appendChild(option);
    });
}

// Review counter Function
function updatereviewcounter() {
    let reviewCounter = localStorage.getItem('reviewCounter') || 0;
    reviewCounter++;
    localStorage.setItem('reviewCounter', reviewCounter);
    
    // Redirect to the review page
    window.location.href = 'post.html'; 
}

// Event listener 
document.getElementById('reviewform').addEventListener('submit', function(event) {
    event.preventDefault(); 
    updatereviewcounter();
});

// Populate product options
populateProductOptions();
