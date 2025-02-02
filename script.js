// Toggle the menu for responsive navigation
function toggleMenu() {
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    // Form validation on submit
    form.addEventListener('submit', (event) => {
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const phone = document.querySelector('#phone').value.trim();
        const requirement = document.querySelector('#requirement').value.trim();

        if (!name || !email || !phone || !requirement) {
            event.preventDefault();
            alert('Please fill in all fields.');
            return;
        }

        // Email validation regex
        if (!/^[\w-.]+@[\w-]+\.+[\w-]{2,4}$/.test(email)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
            return;
        }

        alert('Thank you for your submission!');
        form.reset();
    });

    // Additional validation for name field
    form.addEventListener('submit', function(event) {
        const name = document.querySelector('#name').value.trim();
        if (name === "") {
            event.preventDefault();
            alert("Name is required.");
        }
    });
});

// Scroll Event Listener for Header to hide on scroll down and show on scroll up
let lastScrollTop = 0; // Track last scroll position

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // If scrolling down, hide header
    if (currentScroll > lastScrollTop) {
        header.classList.add('hidden');
        header.classList.remove('hidden-show');
    } 
    // If scrolling up, show header
    else {
        header.classList.remove('hidden');
        header.classList.add('hidden-show');
    }
    
    // Update the last scroll position to current scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll value
});
