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

// Smooth scroll for CTA buttons

        document.querySelectorAll('.cta button').forEach(button => {
            button.addEventListener('click', function(e) {
                if (this.getAttribute('onclick').includes('#')) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('onclick').match(/#[\w-]+/)[0]);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });

        // Header shadow on scroll
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.8)';
            } else {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.6)';
            }
            
            lastScroll = currentScroll;
        });