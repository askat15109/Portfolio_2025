// Dark mode toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  // Optional: Save preference to localStorage
  if(document.documentElement.classList.contains('dark')){
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// On page load, apply saved theme
if(localStorage.getItem('theme') === 'dark'){
  document.documentElement.classList.add('dark');
}

// Contact form submission simulation
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMessage.textContent = 'Sending...';
  setTimeout(() => {
    formMessage.textContent = 'Thanks for reaching out! I will get back to you soon.';
    form.reset();
  }, 1500);
});

// Project modal logic
const projectModal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

window.openProjectModal = (title, description) => {
  modalTitle.textContent = title;
  modalDescription.textContent = description;
  projectModal.classList.remove('hidden');
};

window.closeProjectModal = () => {
  projectModal.classList.add('hidden');
};
