// Select the menu button and the navigation menu
const menuButton = document.querySelector('.menu-button');
const navbar = document.querySelector('.navbar');

// Function to toggle the mobile menu
function toggleMenu() {
    navbar.classList.toggle('active');
}

// Event listener for the menu button
menuButton.addEventListener('click', toggleMenu);

// Adjust layout on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbar.classList.remove('active'); // Remove active class on larger screens
    }
});