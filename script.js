// ==============================
// JBLC Homepage – script.js
// ==============================

// Animate on scroll
const observerOptions = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.classList.add('animate');
      observer.unobserve(el);
    }
  });
}, observerOptions);

const animatedElements = document.querySelectorAll('[data-animate]');
animatedElements.forEach(el => {
  observer.observe(el);
  el.style.transitionDelay = `${[...animatedElements].indexOf(el) * 100}ms`;
});

// Parallax scroll effect (optional)
window.addEventListener('scroll', () => {
  const parallaxImgs = document.querySelectorAll('[data-parallax]');
  parallaxImgs.forEach(img => {
    const speed = parseFloat(img.getAttribute('data-parallax')) || 0.7;
    img.style.transform = `translateY(${window.scrollY * speed}px)`;
  });
});

// Optional Dark Mode Toggle (You can link this to a button later)
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-theme');
};