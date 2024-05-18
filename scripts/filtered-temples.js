// Footer
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = `© ${currentYear}`;

const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModifiedDate}`;

// Hamburger menu
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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Sapporo Japan",
        location: "Sapporo, Japan",
        dedicated: "2016, August, 21",
        area: 48480,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-exterior-day-1744806.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/5-Rome-Temple-2160345.jpg"
    },
    {
        templeName: "Buenos Aires Argentina",
        location: "Buenos Aires, Argentina",
        dedicated: "1986, January, 17",
        area: 30659,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-airies-argentina-temple-1009069-wallpaper.jpg"
    }
];

const renderTemples = (filteredTemples) => {
    const templesContainer = document.querySelector('.imagegrid');
    templesContainer.innerHTML = '';
    filteredTemples.forEach(temple => {
        const card = document.createElement('section');
        const name = document.createElement('h3');
        const location = document.createElement('p');
        const dedication = document.createElement('p');
        const area = document.createElement('p');
        const img = document.createElement('img');

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', `${temple.templeName} Temple`);
        img.setAttribute('loading', 'lazy');

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        templesContainer.appendChild(card);
    });
};

const oldlink = document.querySelector('#old');
const newlink = document.querySelector('#new');
const largelink = document.querySelector('#large');
const smalllink = document.querySelector('#small');
const homeLink = document.querySelector('#home');

oldlink.addEventListener('click', () => {
    const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    renderTemples(oldTemples);
});

newlink.addEventListener('click', () => {
    const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    renderTemples(newTemples);
});

largelink.addEventListener('click', () => {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    renderTemples(largeTemples);
});

smalllink.addEventListener('click', () => {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    renderTemples(smallTemples);
});

homeLink.addEventListener('click', () => {
    renderTemples(temples);
});

// Initial render
renderTemples(temples);
