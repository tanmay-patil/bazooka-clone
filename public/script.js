/*
  Modern JavaScript for the Bazonka website.
  
  This script handles functionality that exists outside of React components:
  - Waitlist form in static HTML
  - Global utilities and fallbacks
*/

// Modern confetti function for global use
const launchConfetti = () => {
  if (typeof confetti === 'undefined') return;

  const count = 200;
  const defaults = { origin: { y: 0.7 } };

  const fire = (particleRatio, opts) => {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  };

  // Launch multiple confetti bursts
  [
    { ratio: 0.25, opts: { spread: 26, startVelocity: 55 } },
    { ratio: 0.2, opts: { spread: 60 } },
    { ratio: 0.35, opts: { spread: 100, decay: 0.91, scalar: 0.8 } },
    { ratio: 0.1, opts: { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 } },
    { ratio: 0.1, opts: { spread: 120, startVelocity: 45 } }
  ].forEach(({ ratio, opts }) => fire(ratio, opts));
};

// Initialize waitlist form - this exists in static HTML outside React
const initializeWaitlistForm = () => {
  const waitlistForm = document.querySelector('#hero form');
  if (!waitlistForm) return;

  const successToastEl = document.getElementById('waitlistToast');
  const errorToastEl = document.getElementById('waitlistErrorToast');
  const successToast = successToastEl ? new bootstrap.Toast(successToastEl) : null;
  const errorToast = errorToastEl ? new bootstrap.Toast(errorToastEl) : null;

  waitlistForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = waitlistForm.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    if (email && emailInput.checkValidity()) {
      launchConfetti();
      successToast?.show();
      emailInput.value = '';
    } else {
      errorToast?.show();
    }
  });
};

// Initialize only non-React functionality
document.addEventListener('DOMContentLoaded', () => {
  initializeWaitlistForm();

  // Make confetti available globally for React components too
  window.globalLaunchConfetti = launchConfetti;
});