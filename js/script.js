document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const offcanvas = document.getElementById('offcanvas');
  const closeBtn = document.getElementById('offcanvasClose');
  const backdrop = document.getElementById('backdrop');

  if (!burger || !offcanvas || !closeBtn || !backdrop) {
    console.warn('Offcanvas-Elemente nicht gefunden.');
    return;
  }

  function openMenu() {
    offcanvas.classList.add('open');
    backdrop.hidden = false;
    backdrop.getBoundingClientRect();           // reflow, damit Transition greift
    backdrop.classList.add('show');
    burger.setAttribute('aria-expanded', 'true');
    offcanvas.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  }

  function closeMenu() {
    offcanvas.classList.remove('open');
    backdrop.classList.remove('show');
    burger.setAttribute('aria-expanded', 'false');
    offcanvas.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    setTimeout(() => { backdrop.hidden = true; }, 300);
  }

  burger.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && offcanvas.classList.contains('open')) closeMenu();
  });
});