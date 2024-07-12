document.addEventListener('DOMContentLoaded', function() {
var texts = [
                "Explore the World",
                "Discover New Adventures",
                "Plan Your Dream Vacation",
                "Experience Different Cultures"
            ];
            
var index = 0;
var changingText = document.getElementById('changing-text');
            
setInterval(function() {
    changingText.textContent = texts[index];
    index = (index + 1) % texts.length; // Loop through texts array
    }, 3000); // Change text every 3 seconds (3000 milliseconds)
    });
