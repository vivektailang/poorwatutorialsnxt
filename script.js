// Function to initialize mobile menu (call after header is loaded)
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });

        // Close menu when clicking a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
            });
        });
    }
}

// Load header and footer, then initialize menu
document.addEventListener('DOMContentLoaded', () => {
    fetch('header.html')
        .then(response => {
            if (!response.ok) throw new Error('Header not found');
            return response.text();
        })
        .then(data => {
            document.getElementById('common-header').innerHTML = data;
            initMobileMenu();  // Initialize after header is inserted
        })
        .catch(err => console.error(err));

    fetch('footer.html')
        .then(response => {
            if (!response.ok) throw new Error('Footer not found');
            return response.text();
        })
        .then(data => {
            document.getElementById('common-footer').innerHTML = data;
        })
        .catch(err => console.error(err));
});