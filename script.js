// Show the button after scrolling down 100px
window.onscroll = function () {
    let topButton = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const messages = document.querySelectorAll("#announcement-carousel span");
    let current = 0;

    // Countdown target
    const eventDate = new Date("May 17, 2025 14:30:00").getTime();
    const countdownSpan = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }

    function rotateMessages() {
        messages.forEach((msg, index) => {
            msg.classList.remove("active");
        });

        messages[current].classList.add("active");
        current = (current + 1) % messages.length;
    }

    // Initial show
    rotateMessages();
    updateCountdown();

    // Rotate every 5 seconds
    setInterval(rotateMessages, 5000);

    // Update countdown every second
    setInterval(updateCountdown, 1000);
});