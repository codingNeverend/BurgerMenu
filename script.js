const icon = document.querySelector('.navbar-mobile i');
const modal = document.querySelector('.modal');

icon.addEventListener('click', () => {
  modal.classList.toggle('change-modal');
  icon.classList.toggle('fa-times');
});
