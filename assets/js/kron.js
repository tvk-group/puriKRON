/**
 * puriKRON — shared site interactions
 */
(function () {
  'use strict';

  const SITE = {
    url: 'https://www.purikron.com',
    name: 'puriKRON',
    twitter: '@purikron'
  };

  const DATA = window.KRON_DATA;
  const SYMBOL = DATA && DATA.token ? DATA.token.symbol : 'PKRON';
  const PENDING = DATA && DATA.contract && DATA.contract.pending;
  const WALLETS_PUBLISHED = DATA && DATA.contract && DATA.contract.walletsPublished;

  function t(key, fallback) {
    if (window.KRON_I18N && window.KRON_I18N.t) {
      return window.KRON_I18N.t(key, fallback);
    }
    return fallback !== undefined ? fallback : key;
  }

  function esc(s) {
    const d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function shortAddr(addr) {
    if (!addr) return t('registry.tba', 'TBA');
    return addr.slice(0, 6) + '…' + addr.slice(-4);
  }

  function addrActions(addr, basescan) {
    if (!addr || !basescan) {
      return (
        '<div class="addr-actions">' +
        '<span class="addr-pending">' + esc(t('registry.tba', 'TBA — pending deployment')) + '</span>' +
        '</div>'
      );
    }
    return (
      '<div class="addr-actions">' +
      '<button type="button" class="addr-btn" data-copy="' + esc(addr) + '" data-i18n-copy="common.copy">' + esc(t('common.copy', 'Copy')) + '</button>' +
      '<a class="addr-btn primary" href="' + esc(basescan) + '" target="_blank" rel="noopener">' + esc(t('common.basescan', 'BaseScan ↗')) + '</a>' +
      '</div>'
    );
  }

  function renderTrustStrip() {
    document.querySelectorAll('[data-trust-strip]').forEach((el) => {
      if (PENDING) {
        el.innerHTML =
          '<div class="trust-strip">' +
          '<span class="trust-item gated"><span class="trust-dot"></span> ' + esc(t('trust.demandGated')) + '</span>' +
          '<span class="trust-item">' + esc(t('trust.network')) + '</span>' +
          '<span class="trust-item">' + esc(t('trust.fairLaunch')) + '</span>' +
          '<span class="trust-item">' + esc(t('trust.supply')) + '</span>' +
          '<span class="trust-item">' + esc(t('trust.noPresale')) + '</span>' +
          '</div>';
        return;
      }
      el.innerHTML =
        '<div class="trust-strip">' +
        '<span class="trust-item verified"><span class="trust-dot"></span> ' + esc(t('trust.verified')) + '</span>' +
        '<span class="trust-item">' + esc(t('trust.network')) + '</span>' +
        '<span class="trust-item">' + esc(t('trust.fairLaunch')) + '</span>' +
        '<span class="trust-item">' + esc(t('trust.supply')) + '</span>' +
        '<span class="trust-item">' + esc(t('trust.noMint')) + '</span>' +
        '</div>';
    });
  }

  function renderRegistry() {
    if (!DATA) return;

    document.querySelectorAll('[data-address-registry]').forEach((el) => {
      const contract = DATA.contract;
      const genesis = DATA.genesis;
      const ops = DATA.ops;

      function walletCard(wallet) {
        if (!wallet) return '';
        return (
          '<div class="registry-contract-card">' +
          '<div class="label">' + esc(t(wallet.labelKey)) + '</div>' +
          '<div class="addr">' + (wallet.address ? esc(wallet.address) : '<em class="addr-pending">' + esc(t('registry.tba', 'TBA')) + '</em>') + '</div>' +
          addrActions(wallet.address, wallet.basescan) +
          '</div>'
        );
      }

      const rows = DATA.allocations.map((a) =>
        '<tr>' +
        '<td class="role-cell"><strong>' + esc(t(a.roleKey)) + '</strong><span>' + esc(t(a.lockKey)) + '</span></td>' +
        '<td><span class="pct-pill">' + esc(a.pct) + '</span><br><span style="font-size:.78rem;color:var(--muted)">' + esc(a.amount) + ' ' + esc(SYMBOL) + '</span></td>' +
        '<td class="addr-cell">' + (a.address ? esc(a.address) : '<em class="addr-pending">' + esc(t('registry.tba', 'TBA')) + '</em>') + addrActions(a.address, a.basescan) + '</td>' +
        '</tr>'
      ).join('');

      const contractCard = PENDING
        ? '<div class="registry-contract-card official pending">' +
          '<div class="label">' + esc(t(contract.labelKey)) + '</div>' +
          '<div class="addr pending-status">' + esc(t('registry.pendingStatus', 'Demand-gated — Phase III')) + '</div>' +
          '<p class="registry-pending-note">' + esc(t('registry.pendingNote')) + '</p>' +
          '</div>'
        : '<div class="registry-contract-card official">' +
          '<div class="label">' + esc(t(contract.labelKey)) + '</div>' +
          '<div class="addr">' + esc(contract.address) + '</div>' +
          addrActions(contract.address, contract.basescan) +
          '</div>';

      const genesisCard = walletCard(genesis);
      const opsCard = walletCard(ops);

      const badge = PENDING
        ? esc(t(WALLETS_PUBLISHED ? 'registry.badgeWalletsPublished' : 'registry.badgePending', WALLETS_PUBLISHED ? 'Phase III · Wallets Published' : 'Phase III · Pending'))
        : esc(t('registry.badge', '✓ Verified'));

      el.innerHTML =
        '<div class="registry-panel">' +
        '<div class="registry-head">' +
        '<div><h3>' + esc(t('registry.title')) + '</h3>' +
        '<p>' + esc(t('registry.desc')) + '</p></div>' +
        '<span class="registry-badge' + (PENDING ? ' pending' : '') + '">' + badge + '</span>' +
        '</div>' +
        '<div class="registry-contract">' +
        contractCard +
        genesisCard +
        opsCard +
        '</div>' +
        '<div class="registry-table-wrap">' +
        '<table class="registry" aria-label="' + esc(t('registry.title')) + '">' +
        '<thead><tr><th>' + esc(t('registry.role')) + '</th><th>' + esc(t('registry.allocation')) + '</th><th>' + esc(t('registry.address')) + '</th></tr></thead>' +
        '<tbody>' + rows + '</tbody>' +
        '</table></div>' +
        (PENDING
          ? '<div style="padding:14px 24px;font-size:.82rem;color:var(--muted);border-top:1px solid var(--line)">' +
            esc(t('registry.gatewayNote')) +
            ' <a href="https://www.ekron.network/verify/" target="_blank" rel="noopener">www.ekron.network/verify</a>' +
            '</div>'
          : '') +
        '</div>';
    });
  }

  function injectBreadcrumbSchema() {
    if (document.querySelector('script[data-kron-breadcrumb]')) return;
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    const base = SITE.url;
    const crumbs = [{ name: 'Home', item: base + '/' }];
    const map = {
      '/verify': 'Verify',
      '/family': 'Family',
      '/standard': 'Standard',
      '/program': 'Program',
      '/legal/privacy': 'Privacy',
      '/legal/cookies.html': 'Cookies',
      '/legal/terms': 'Terms',
      '/legal/risk': 'Risk Disclosure'
    };
    if (path !== '/' && map[path]) {
      crumbs.push({ name: map[path], item: base + path });
    }
    if (crumbs.length < 2) return;
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.setAttribute('data-kron-breadcrumb', '1');
    el.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.item
      }))
    });
    document.head.appendChild(el);
  }

  function renderOfficialChannels() {
    if (!DATA || !DATA.officialChannels) return;

    document.querySelectorAll('[data-official-channels]').forEach((el) => {
      const mode = el.getAttribute('data-official-channels') || 'list';
      const channels = DATA.officialChannels;

      if (mode === 'grid') {
        el.innerHTML = channels.map((c) => {
          const ext = c.external ? ' target="_blank" rel="noopener noreferrer"' : '';
          return (
            '<div class="link-card">' +
            '<span>' + esc(t(c.labelKey)) + '</span>' +
            '<a href="' + esc(c.url) + '"' + ext + '>' + esc(c.host) + '</a>' +
            '<p class="link-desc">' + esc(t(c.descKey)) + '</p>' +
            '</div>'
          );
        }).join('');
        return;
      }

      el.innerHTML =
        '<div class="channels-grid">' +
        channels.map((c) => {
          const ext = c.external ? ' target="_blank" rel="noopener noreferrer"' : '';
          return (
            '<div class="channel-row">' +
            '<a href="' + esc(c.url) + '"' + ext + '>' + esc(c.host) + '</a>' +
            '<span>' + esc(t(c.descKey)) + '</span>' +
            '</div>'
          );
        }).join('') +
        '</div>';
    });
  }

  function initUI() {
    renderTrustStrip();
    renderRegistry();
    renderOfficialChannels();
    injectBreadcrumbSchema();
  }

  const mobileToggle = document.querySelector('[data-mobile-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = document.body.classList.toggle('menu-open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        document.body.classList.remove('menu-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('nav.main-nav a[href^="#"]');

  if (sections.length && navLinks.length) {
    const highlightNav = () => {
      let current = '';
      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) current = section.getAttribute('id');
      });
      navLinks.forEach((link) => {
        const href = link.getAttribute('href').slice(1);
        link.style.color = href === current ? '#fff' : '';
      });
    };
    window.addEventListener('scroll', highlightNav, { passive: true });
    highlightNav();
  }

  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-copy]');
    if (!btn) return;
    const text = btn.getAttribute('data-copy');
    if (!text || text.includes('PASTE_')) return;
    try {
      await navigator.clipboard.writeText(text);
      const orig = btn.textContent;
      btn.textContent = t('common.copied', 'Copied!');
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = orig;
        btn.classList.remove('copied');
      }, 2000);
    } catch (_) { /* clipboard unavailable */ }
  });

  function boot() {
    initUI();
    window.KRON = { site: SITE, data: DATA, shortAddr, t };
  }

  if (window.KRON_I18N && window.KRON_I18N.ready) {
    boot();
  } else {
    window.addEventListener('kron:i18n-ready', boot, { once: true });
  }

  window.addEventListener('kron:langchange', initUI);
})();
