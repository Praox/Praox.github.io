const dialog = document.querySelector('#lightbox');
let trigger;
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    trigger = button;
    dialog.querySelector('img').src = button.dataset.image;
    dialog.querySelector('img').alt = button.dataset.caption;
    dialog.querySelector('p').textContent = button.dataset.caption;
    document.body.classList.add('modal-open');
    dialog.showModal();
  });
});
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  trigger?.focus();
});
