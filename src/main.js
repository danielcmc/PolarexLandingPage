// Content and navigation work without JavaScript. Tally's official script owns
// form initialization, event forwarding, and responsive iframe height.
const form = document.querySelector('#partner-form');
const formStatus = document.querySelector('#form-status');

if (form && formStatus) {
  formStatus.hidden = false;
  const loadingTimeout = window.setTimeout(() => {
    formStatus.textContent = 'If the form doesn’t appear, open the application below.';
  }, 15000);

  const clearLoadingStatus = () => {
    window.clearTimeout(loadingTimeout);
    formStatus.hidden = true;
  };

  form.addEventListener('load', clearLoadingStatus, { once: true });

  // The iframe can load before this module runs. A message from the actual
  // Tally frame also clears the status, including on restored browser pages.
  window.addEventListener('message', (event) => {
    if (event.origin === 'https://tally.so' && event.source === form.contentWindow) {
      clearLoadingStatus();
    }
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
