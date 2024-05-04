
// footer
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = `© ${currentYear}`;

const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;

// page title
const pageName = getPageName(); 
const pageTitle = document.getElementById('pageTitle');

if (pageName === 'home' || pageName === 'old' || pageName === 'new') {
    pageTitle.innerHTML = '<h2>' + pageTitle.innerHTML + '</h2>';
}

// hamburger menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

