$(document).ready(function () {
  // Scroll down sticky navbar script start
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    // Scroll down sticky navbar script end

    // Scroll up Button script start
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
    // Scroll up Button script end

    // Fade In & Fade Out Elements on Scroll script start
    $(".fadein").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).addClass("showme");
      }
      if (bottom_of_window < bottom_of_element) {
        $(this).removeClass("showme");
      }
    });
    // Fade In & Fade Out Elements on Scroll script end
  });

  // Scroll up Button script start
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  // Scroll up Button script end

  // animation Script for display
  const animationScript = ["DevSecOps Engineer", "Site Reliability Engineer", "Cloud Engineer"];

  // Typing animation script start
  new Typed(".typing", {
    strings: animationScript,
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  new Typed(".typing2", {
    strings: animationScript,
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  // Typing animation script End

  // toggle menu/navbar script start
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  // toggle menu/navbar script end

  // owl carousel script start
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  // owl carousel script end
});

// Get the current year
const currentYear = new Date().getFullYear();
// Set the current year in the span with id "year"
document.getElementById('year').textContent = currentYear;


// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Verify EmailJS is loaded
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS not loaded');
        return;
    }

    const contactForm = document.getElementById('contact-form');
    if (!contactForm) {
        console.error('Contact form not found');
        return;
    }

    contactForm.addEventListener('submit', async function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Get form elements
        const button = this.querySelector('button');
        const successMessage = document.getElementById('success-message');
        const errorMessage = document.getElementById('error-message');
        const originalButtonText = button.innerHTML;

        try {
            // Disable the button and show loading state
            button.disabled = true;
            button.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
            
            // Hide any existing messages
            successMessage.style.display = 'none';
            errorMessage.style.display = 'none';

            // Get form data
            const templateParams = {
                from_name: document.getElementById('from_name').value.trim(),
                from_email: document.getElementById('from_email').value.trim(),
                subject: document.getElementById('subject').value.trim(),
                message: document.getElementById('message').value.trim(),
                to_name: 'Ahmed U'
            };

            // Log the attempt
            console.log('Attempting to send email with params:', templateParams);

            // Send the email
            const response = await emailjs.send(
                'service_d5y4wc6',
                'template_b0mr4bd',
                templateParams
            );

            // Log success
            console.log('SUCCESS!', response);
            
            // Show success message
            successMessage.style.display = 'block';
            button.innerHTML = 'Sent Successfully! <i class="fas fa-check"></i>';
            
            // Reset the form
            contactForm.reset();

        } catch (error) {
            // Log error
            console.error('FAILED...', error);
            
            // Show error message
            errorMessage.style.display = 'block';
            errorMessage.textContent = `Failed to send message: ${error.text || error.message || 'Unknown error'}`;
            button.innerHTML = 'Failed to send! <i class="fas fa-times"></i>';
        } finally {
            // Reset button state after 3 seconds
            setTimeout(() => {
                button.innerHTML = originalButtonText;
                button.disabled = false;
            }, 3000);
        }
    });
});
