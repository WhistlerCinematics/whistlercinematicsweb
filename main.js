// Mobile nav toggle
const toggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
}

// Close mobile nav on link click
if (mobileNav) {
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
}
