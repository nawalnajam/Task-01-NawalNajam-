// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const expanded = navLinks.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', expanded);
  });
}

// Optional: Close menu when clicking a link (for better UX)
const navLinkItems = document.querySelectorAll('.nav-links a');
navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Simple console greeting
console.log("DecodeLabs – Project 1: Multi-page responsive site ready!");