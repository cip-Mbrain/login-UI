const btn = document.querySelector('.click-btn');
const modal = document.querySelector('.modal');

btn.addEventListener('click', (e) => {
  // e.stopPropagation();
  modal.classList.add('show-modal');
});
