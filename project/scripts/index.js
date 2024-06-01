
// menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
});

function toggleActive(element) {
    const currentActive = document.querySelector('.navigation .active');
    if (currentActive) {
        currentActive.classList.remove('active');
    }
    element.classList.add('active');
    // Optionally close the hamburger menu
    mainnav.classList.remove('show');
}


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

document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
});

