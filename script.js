// Responsive Navigation Menu
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
      });
    }
  });
  
  // Smooth Scroll for Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
  
  // Dynamic Content Loader for News Cards (Optional Example)
  const newsCards = document.querySelectorAll('.news-card');
  newsCards.forEach(card => {
    card.addEventListener('click', () => {
      alert(You clicked on ${card.querySelector('.news-title').textContent});
    });
  });