// notification box script
const button = document.getElementById('click');
button.addEventListener('click', () => {
  const notification = document.getElementById('notification');
  notification.classList.remove('hidden');
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
    notification.classList.add('hidden');
  }, 4000); // disappears after 4 seconds
});