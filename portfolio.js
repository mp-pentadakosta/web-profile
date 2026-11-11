(() => {
  const filters = document.querySelectorAll('.filter');
  const shots = document.querySelectorAll('.shot');
  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(b => { b.classList.toggle('is-active', b === btn); b.setAttribute('aria-pressed', b === btn); });
    shots.forEach(s => { s.hidden = btn.dataset.filter !== 'all' && s.dataset.kind !== btn.dataset.filter; });
  }));
  const box = document.getElementById('lightbox');
  const img = box.querySelector('img');
  document.querySelectorAll('.shot-btn').forEach(b => b.addEventListener('click', () => {
    img.src = b.dataset.src;
    img.alt = b.querySelector('img').alt;
    box.showModal();
  }));
  box.addEventListener('click', e => { if (e.target === box) box.close(); });
})();
