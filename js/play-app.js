(function(){
  const statusEl = document.getElementById('status');
  const apiEl = document.getElementById('apiBase');
  const btn = document.getElementById('btnCheck');

  const cfg = window.STARFALL_CONFIG || {};
  apiEl && (apiEl.textContent = cfg.API_BASE || 'not set');

  async function ping(){
    statusEl && (statusEl.textContent = 'Checking…');
    try{
      const url = (cfg.API_BASE || '') + '/health';
      const res = await fetch(url, { method: 'GET', mode: 'cors' });
      if(res.ok){
        statusEl.textContent = (cfg.MODE === 'LIVE') ? 'LIVE' : 'API reachable — waiting for launch';
      } else {
        statusEl.textContent = 'API reachable, but returned ' + res.status;
      }
    }catch(e){
      statusEl && (statusEl.textContent = 'API not reachable yet');
    }
  }
  btn && btn.addEventListener('click', ping);

  // Auto-check once on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ping);
  } else {
    ping();
  }
})();