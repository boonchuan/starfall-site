// --- Nav SFX (hover + click) using MP4 ---
(function(){
  const hoverSrc = './assets/audio/nav-hover.mp4';
  const clickSrc = './assets/audio/nav-click.mp4';

  const hover = document.createElement('video');
  hover.src = hoverSrc; hover.preload = 'auto';
  const click = document.createElement('video');
  click.src = clickSrc; click.preload = 'auto';

  try { hover.volume = 0.35; click.volume = 0.5; } catch(_){}

  let enabled = false;
  try { enabled = localStorage.getItem('nav_sfx') === '1'; } catch(_){}

  function play(v){
    if(!enabled) return;
    try { v.currentTime = 0; v.play().catch(()=>{}); } catch(_){}
  }

  const links = document.querySelectorAll('.main-nav a, .social-nav a');
  links.forEach(el=>{
    el.addEventListener('mouseenter', ()=> play(hover));
    el.addEventListener('click', ()=> play(click));
  });

  const toggle = document.querySelector('.sfx-toggle');
  if(toggle){
    const sync = ()=> toggle.setAttribute('aria-pressed', enabled ? 'true':'false');
    sync();
    toggle.addEventListener('click', ()=>{
      enabled = !enabled;
      sync();
      try { localStorage.setItem('nav_sfx', enabled ? '1':'0'); } catch(_){}
      play(click);
    });
  }
})();
