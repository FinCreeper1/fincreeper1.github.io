const menu = document.querySelector('.site-menu');

if (menu) {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target)) menu.open = false;
  });
}

// Keep Escape dismissal in effect until the pointer or keyboard returns.
for (const entry of document.querySelectorAll('.app-entry')) {
  entry.addEventListener('pointerenter', () => entry.classList.remove('preview-dismissed'));
  entry.addEventListener('focusin', () => entry.classList.remove('preview-dismissed'));
}
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  for (const entry of document.querySelectorAll('.app-entry')) {
    entry.classList.add('preview-dismissed');
  }
});
