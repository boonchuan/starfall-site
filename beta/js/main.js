// Fade-in effect and mobile helpers
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.querySelector('.overlay');
  if (overlay) {
    overlay.style.opacity = 0;
    setTimeout(() => {
      overlay.style.transition = 'opacity 1.2s ease';
      overlay.style.opacity = 1;
    }, 200);
  }

  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  // Group CTA buttons if they exist
  const tryMakeCtaRow = () => {
    const buttons = document.querySelectorAll('.btn');
    if (buttons.length >= 2 && !document.querySelector('.cta-row')) {
      const row = document.createElement('div');
      row.className = 'cta-row';
      const parent = buttons[0].parentElement;
      parent.insertBefore(row, buttons[0]);
      buttons.forEach(btn => row.appendChild(btn));
    }
  };
  tryMakeCtaRow();

  // Video fallback on mobile
  if (isMobile) {
    const vid = document.getElementById('hero-video');
    if (vid) {
      const fallback = () => { vid.remove(); };
      vid.addEventListener('error', fallback, { once: true });
      setTimeout(() => { if (vid.readyState < 1) fallback(); }, 2000);
    }
  }
});
