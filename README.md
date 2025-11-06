# Starfall Catastrophe — Website (staging)

This is the static site ready for cPanel Git deployment.

## Structure
- `index.html` — homepage
- `play/` — play placeholder (under construction)
- `js/play-app.js` — detects API availability
- `css/main.css` — small helpers (Tailwind via CDN in HTML)
- `.htaccess` — HTTPS force + caching headers

## Config
`/play/index.html` reads `window.STARFALL_CONFIG`:
```html
<script>
  window.STARFALL_CONFIG = {
    MODE: "UNDER_CONSTRUCTION",
    API_BASE: "https://api.play.starfallcatastrophe.com",
    WS_BASE:  "wss://api.play.starfallcatastrophe.com/ws"
  };
</script>
```
Flip `MODE` to `LIVE` when backend is ready.

## Deploy (cPanel Git)
1) cPanel → Git Version Control → Create Repo
   - Deployment path: `/home/USER/staging`
   - Branch: `staging`
2) Push this repo to your remote; in cPanel, click Deploy HEAD commit.
3) Verify at `https://staging.starfallcatastrophe.com`. 

