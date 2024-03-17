const btn = document.querySelector('.click-btn');
const modal = document.querySelector('.modal');

btn.addEventListener('click', () => {
  // e.stopPropagation();
  modal.classList.add('show-modal');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (modal.classList.contains('show-modal')) {
      modal.classList.remove('show-modal');
    }
  }
});
