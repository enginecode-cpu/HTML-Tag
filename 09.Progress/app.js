const progress = document.querySelector('progress');

progress.setAttribute('value', '0')
progress.setAttribute('max', '100');

const interval = setInterval(() => {
  progress.value += 10;
  if (progress.value === 100) {
    clearInterval(interval);
  }
}, 500);