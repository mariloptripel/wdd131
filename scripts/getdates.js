const currentYear = new Date().getFullYear();
const currentYearParagraph = document.querySelector('footer p:first-of-type');
currentYearParagraph.textContent = `© ${currentYear}`;

const lastModifiedDate = document.lastModified;
const lastModifiedParagraph = document.querySelector('footer #lastModified');
lastModifiedParagraph.textContent = `Last modified: ${lastModifiedDate}`;
