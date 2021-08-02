// Auto-update Year in Footer
const year = document.querySelector('.year');
year.innerHTML = new Date().getFullYear();

// Client Feedback Slider
let feedbacks = document.querySelectorAll('.client');

let counter = 0;

function autoCarousel() {
    counter++;

    if (counter < 0) {
        counter = feedbacks.length - 1;
    } else if (counter > feedbacks.length - 1) {
        counter = 0;
    };

    feedbacks.forEach(function(feedback) {
        feedback.style.transform = `translateX(-${counter * 100}%)`;
    });
}

// Set Interval For Feedback Slider
function feedbacksInterval() {
    setInterval(autoCarousel, 5500);
}

// Run Feedback Slider
window.addEventListener('load',function() {
    feedbacksInterval();
});