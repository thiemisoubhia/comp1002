// Get references to elements
const ratingStars = document.querySelectorAll('#rating-stars span');
const ratingInput = document.getElementById('product-rating');
const feedbackForm = document.getElementById('customer-feedback-form');
const feedbackMessage = document.getElementById('feedback-message');

// Function to set the star style
function setRatingStyle(ratingValue) {
    ratingStars.forEach(star => {
        // Toggle 'active' class based on the data-value
        if (parseInt(star.dataset.value) <= ratingValue) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// 1. Star Interaction Event Listeners
ratingStars.forEach(star => {
    // Highlight on hover
    star.addEventListener('mouseover', function() {
        setRatingStyle(this.dataset.value);
    });

    // Reset on mouseout (unless a star is already selected)
    star.addEventListener('mouseout', function() {
        setRatingStyle(ratingInput.value); 
    });

    // 2. Select the rating on click
    star.addEventListener('click', function() {
        const rating = this.dataset.value;
        ratingInput.value = rating; // Update hidden field
        setRatingStyle(rating); // Lock in the style
    });
});

// 3. Form Submission Handling
feedbackForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop the default form submission

    // Display the thank you message
    feedbackMessage.style.display = 'block';
    
    // Optional: Clear the form fields after a short delay
    setTimeout(() => {
        feedbackForm.reset();
        feedbackMessage.style.display = 'none';
        setRatingStyle(0); // Reset stars
    }, 3000);
});

// Initial style application when the page loads
setRatingStyle(ratingInput.value);