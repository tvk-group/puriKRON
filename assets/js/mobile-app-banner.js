/**
 * Homepage mobile prompt — directs users to /app/ for PWA install
 */
(function () {
  'use strict';

  if (window.matchMedia('(display-mode: standalone)').matches) return;
  if (location.pathname.startsWith('/app')) return;

  function isMobile() {
    return window.matchMedia('(max-width: 768px)').matches
      || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  if (!isMobile()) return;

  try {
    if (localStorage.getItem('purikron-mobile-app-bar-dismissed')) return;
  } catch (_) {}

  const bar = document.createElement('div');
  bar.className = 'mobile-app-bar show';
  bar.innerHTML =
    '<p><strong>puriKRON App</strong><br><span style="font-weight:500;color:var(--muted)">Wallet · Verify · Install</span></p>' +
    '<a class="app-btn primary" href="/app/">Open App</a>' +
    '<button type="button" class="close-bar" aria-label="Dismiss">×</button>';

  const style = document.createElement('style');
  style.textContent =
    '.mobile-app-bar{position:fixed;left:12px;right:12px;bottom:calc(12px + env(safe-area-inset-bottom));z-index:250;display:flex;align-items:center;gap:10px;padding:12px 14px;border-radius:18px;border:1px solid rgba(251,191,36,.35);background:rgba(7,17,31,.96);box-shadow:0 16px 40px rgba(0,0,0,.45)}' +
    '.mobile-app-bar p{margin:0;font-size:.82rem;line-height:1.35;color:#f9fafb}' +
    '.mobile-app-bar .app-btn{min-height:40px;padding:8px 14px;border-radius:16px;border:0;background:linear-gradient(135deg,#fbbf24,#fff7c2);color:#111827;font-weight:800;text-decoration:none;white-space:nowrap}' +
    '.mobile-app-bar .close-bar{border:0;background:transparent;color:#9ca3af;font-size:1.2rem;cursor:pointer;padding:4px 8px}';
  document.head.appendChild(style);
  document.body.appendChild(bar);

  bar.querySelector('.close-bar')?.addEventListener('click', () => {
    bar.remove();
    try { localStorage.setItem('purikron-mobile-app-bar-dismissed', '1'); } catch (_) {}
  });
})();
