const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

// Load saved mode on page load
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Save preference
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  }
});
