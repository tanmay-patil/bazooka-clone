/*
  Custom JavaScript for the Bazonga website.

  This script initialises the particle background on the home page,
  triggers reveal animations with ScrollReveal.js and adds a simple
  handler for the waitlist form so users receive feedback when
  submitting their email address. The code is wrapped in a DOMContentLoaded
  listener to ensure the DOM is ready before execution.
*/

document.addEventListener('DOMContentLoaded', function () {
  // Initialise particles.js only if the element exists on the page
  const particleContainer = document.getElementById('particles-js');
  if (particleContainer && typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 60,
          density: { enable: true, value_area: 800 }
        },
        color: { value: '#ffffff' },
        shape: {
          type: 'circle',
          stroke: { width: 0, color: '#000000' },
          polygon: { nb_sides: 5 }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: { enable: false }
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          attract: { enable: false }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          repulse: { distance: 80, duration: 0.4 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }

  // Initialise ScrollReveal on elements with the .reveal class
  if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal().reveal('.reveal', {
      distance: '40px',
      duration: 800,
      easing: 'ease-out',
      origin: 'bottom',
      interval: 100,
      viewFactor: 0.2
    });
  }

  // Waitlist form handler – simple alert to provide feedback
  const waitlistForm = document.querySelector('#hero form');
  if (waitlistForm) {
    waitlistForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const emailInput = waitlistForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      if (email) {
        // Provide feedback to the user
        alert('Thank you! You have been added to the waitlist.');
        emailInput.value = '';
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }
});