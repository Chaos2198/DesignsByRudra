document.addEventListener('DOMContentLoaded', () => {
    emailjs.init("6W-dpuRWLajDuaMYT");  // Replace "YOUR_USER_ID" with your EmailJS user ID

    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Send form data to EmailJS
        emailjs.sendForm('service_q6vbohr', 'template_8jnbg2i', this)
            .then(function() {
                alert('Thank you for reaching out! We\'ll get back to you soon.');
                form.reset();  // Reset the form after submission
            }, function(error) {
                alert('Sorry, there was an error sending your message. Please try again later.');
                console.log('Failed to send email:', error);
            });
    });
});
