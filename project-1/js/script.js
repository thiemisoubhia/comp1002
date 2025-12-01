document.addEventListener('DOMContentLoaded', () => {

    /*get the html elements*/
    const stars = document.querySelectorAll('#rating-stars span');
    const ratingInput = document.getElementById('product-rating');
    const form = document.getElementById('customer-feedback-form');
    const message = document.getElementById('feedback-message');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = parseInt(star.getAttribute('data-value'));
            ratingInput.value = value;
            highlightStars(value);
            console.log("You have clicked  on star: " + value);
        });

        //hover effect
        star.addEventListener('mouseover', () => {
            const value = parseInt(star.getAttribute('data-value'));
            highlightStars(value, true);
        });

        star.addEventListener('mouseout', () => {
            //revert to the selected rating on mouse out
            highlightStars(parseInt(ratingInput.value));
        });
    });

    //visually fill the stars
    function highlightStars(count, isHover = false) {
        stars.forEach((star, index) => {
            if (index < count) {
                star.classList.add('star-filled');
            } else {
                star.classList.remove('star-filled');
            }
            //ensure the cursor returns to pointer if hovering over a star that's already filled
            if (isHover && index < count) {
                star.style.cursor = 'pointer';
            }
        });
    }

    //simulate form submission success
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        message.style.display = 'block';
        /*show message*/
        message.textContent = "Thank you for your valuable feedback!";

    });
});

// video reference: https://www.youtube.com/watch?v=ErtiCYfoVhA