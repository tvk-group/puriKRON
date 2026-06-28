/**
 * puriKRON — official mobile app (PWA)
 * Wallet connect, balance, verify, add token — Base mainnet
 */
(function () {
  'use strict';

  const DATA = window.KRON_DATA;
  const TOKEN = DATA.token;
  const CONTRACT = DATA.contract.address;
  const CHAIN_ID = '0x' + TOKEN.chainId.toString(16);
  const BASE_RPC = 'https://mainnet.base.org';
  const BALANCE_OF = '0x70a08231';

  const $ = (sel) => document.querySelector(sel);
  const toast = $('#app-toast');

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 2400);
  }

  function shortAddr(a) {
    return a ? a.slice(0, 6) + '…' + a.slice(-4) : '—';
  }

  function formatBalance(raw) {
    if (!raw || raw === '0x') return '0';
    const n = BigInt(raw);
    const whole = n / 10n ** 18n;
    const frac = n % 10n ** 18n;
    const fracStr = frac.toString().padStart(18, '0').slice(0, 4).replace(/0+$/, '');
    return fracStr ? whole.toLocaleString() + '.' + fracStr : whole.toLocaleString();
  }

  async function rpc(method, params) {
    const res = await fetch(BASE_RPC, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params })
    });
    const json = await res.json();
    if (json.error) throw new Error(json.error.message || 'RPC error');
    return json.result;
  }

  async function fetchBalance(address) {
    const data = BALANCE_OF + address.slice(2).padStart(64, '0');
    return rpc('eth_call', [{ to: CONTRACT, data }, 'latest']);
  }

  function getProvider() {
    return window.ethereum || (window.ethereum?.providers?.find((p) => p.isMetaMask));
  }

  async function ensureBase() {
    const provider = getProvider();
    if (!provider) throw new Error('No wallet');
    const chain = await provider.request({ method: 'eth_chainId' });
    if (chain === CHAIN_ID) return;
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: CHAIN_ID }]
      });
    } catch (e) {
      if (e.code === 4902) {
        await provider.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: CHAIN_ID,
            chainName: 'Base',
            nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
            rpcUrls: [BASE_RPC],
            blockExplorerUrls: ['https://basescan.org']
          }]
        });
      } else {
        throw e;
      }
    }
  }

  async function connectWallet() {
    const provider = getProvider();
    if (!provider) {
      showToast('Install MetaMask or a Base-compatible wallet');
      return null;
    }
    await ensureBase();
    const accounts = await provider.request({ method: 'eth_requestAccounts' });
    return accounts[0] || null;
  }

  async function refreshBalance(address) {
    const el = $('#balance-value');
    const walletEl = $('#balance-wallet');
    if (!address) {
      if (el) el.textContent = '—';
      if (walletEl) walletEl.textContent = 'Connect wallet to view balance';
      return;
    }
    if (walletEl) walletEl.textContent = address;
    if (el) el.textContent = '…';
    try {
      const raw = await fetchBalance(address);
      if (el) el.textContent = formatBalance(raw) + ' PKRON';
    } catch {
      if (el) el.textContent = 'Error';
      showToast('Could not load balance');
    }
  }

  async function addTokenToWallet() {
    const provider = getProvider();
    if (!provider) {
      showToast('Wallet required');
      return;
    }
    try {
      await ensureBase();
      const added = await provider.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: CONTRACT,
            symbol: TOKEN.symbol,
            decimals: TOKEN.decimals,
            image: window.location.origin + '/assets/logo/icon-32.png'
          }
        }
      });
      showToast(added ? 'PKRON added to wallet' : 'Add cancelled');
    } catch {
      showToast('Could not add token');
    }
  }

  function copyText(text) {
    navigator.clipboard.writeText(text).then(
      () => showToast('Copied'),
      () => showToast('Copy failed')
    );
  }

  function renderRegistry() {
    const el = $('#registry-list');
    if (!el || !DATA) return;
    const rows = [
      { label: 'PKRON Token', value: CONTRACT, copy: true },
      { label: 'LP Wallet', value: DATA.allocations[0].address, copy: true },
      { label: 'Ecosystem Lock', value: DATA.allocations[1].address, copy: true },
      { label: 'Founder 6M', value: DATA.allocations[2].address, copy: true },
      { label: 'Founder 12M', value: DATA.allocations[3].address, copy: true }
    ];
    el.innerHTML = rows.map((r) =>
      '<div class="app-row app-link-row">' +
      '<span class="app-row-label">' + r.label + '</span>' +
      '<button type="button" class="app-row-value small app-copy" data-copy="' + r.value + '" style="background:none;border:0;color:var(--gold);cursor:pointer">' + shortAddr(r.value) + '</button>' +
      '</div>'
    ).join('');
    el.querySelectorAll('.app-copy').forEach((btn) => {
      btn.addEventListener('click', () => copyText(btn.dataset.copy));
    });
  }

  function switchPanel(id) {
    document.querySelectorAll('.app-panel').forEach((p) => p.classList.remove('active'));
    document.querySelectorAll('.app-nav [data-panel]').forEach((n) => n.classList.remove('active'));
    const panel = document.getElementById('panel-' + id);
    const nav = document.querySelector('.app-nav [data-panel="' + id + '"]');
    if (panel) panel.classList.add('active');
    if (nav) nav.classList.add('active');
  }

  function detectPlatform() {
    const ua = navigator.userAgent || '';
    if (/iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
      return 'ios';
    }
    if (/Android/i.test(ua)) return 'android';
    return 'desktop';
  }

  function setupInstall() {
    const box = $('#install-box');
    const banner = $('#install-banner');
    const btn = $('#install-btn');
    const ios = $('#install-ios');
    const android = $('#install-android');
    const desktop = $('#install-desktop');
    const platform = detectPlatform();
    let deferredPrompt = null;
    const standalone = window.matchMedia('(display-mode: standalone)').matches
      || window.navigator.standalone === true;

    if (standalone && box) box.hidden = true;
    if (standalone && banner) banner.hidden = true;

    if (ios) ios.hidden = platform !== 'ios';
    if (android) android.hidden = platform !== 'android';
    if (desktop) desktop.hidden = platform !== 'desktop';

    if (btn) {
      if (platform === 'ios') {
        btn.textContent = 'Show Install Steps Above';
        btn.addEventListener('click', () => {
          box?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          showToast('Safari → Share → Add to Home Screen');
        });
      } else {
        btn.textContent = 'Install App';
      }
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      if (btn) btn.textContent = 'Install App Now';
      if (banner) banner.hidden = true;
    });

    if (btn && platform !== 'ios') {
      btn.addEventListener('click', async () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          await deferredPrompt.userChoice;
          deferredPrompt = null;
          if (box) box.hidden = true;
          return;
        }
        if (platform === 'android') {
          showToast('Chrome menu (⋮) → Install app');
        } else {
          showToast('Use install icon in address bar');
        }
        box?.scrollIntoView({ behavior: 'smooth' });
      });
    }

    if (banner && !standalone && platform !== 'desktop') {
      banner.hidden = false;
      const bannerBtn = $('#install-banner-btn');
      bannerBtn?.addEventListener('click', () => box?.scrollIntoView({ behavior: 'smooth' }));
      if (platform === 'ios' && $('#install-banner-text')) {
        $('#install-banner-text').textContent = 'Tap Share → Add to Home Screen';
      }
      banner.querySelector('[data-dismiss-banner]')?.addEventListener('click', () => {
        banner.hidden = true;
        try { sessionStorage.setItem('purikron-install-banner-dismissed', '1'); } catch (_) {}
      });
      try {
        if (sessionStorage.getItem('purikron-install-banner-dismissed')) banner.hidden = true;
      } catch (_) {}
    }
  }

  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/app/sw.js', { scope: '/app/' }).catch(() => {});
    }
  }

  async function init() {
    $('#contract-display').textContent = shortAddr(CONTRACT);
    $('#token-network').textContent = TOKEN.network + ' · ' + TOKEN.chainId;
    $('#token-supply').textContent = TOKEN.totalSupply;
    $('#token-deployed').textContent = TOKEN.deployed;

    renderRegistry();
    setupInstall();
    registerServiceWorker();

    const connectBtn = $('#connect-wallet');
    const addBtn = $('#add-token');
    const copyBtn = $('#copy-contract');
    const scanBtn = $('#open-basescan');

    let connected = null;

    connectBtn?.addEventListener('click', async () => {
      try {
        connected = await connectWallet();
        if (connected) {
          connectBtn.textContent = shortAddr(connected);
          await refreshBalance(connected);
          showToast('Connected');
        }
      } catch (e) {
        showToast(e.message || 'Connection failed');
      }
    });

    addBtn?.addEventListener('click', addTokenToWallet);
    copyBtn?.addEventListener('click', () => copyText(CONTRACT));
    scanBtn && (scanBtn.href = DATA.contract.basescan);

    document.querySelectorAll('.app-nav [data-panel]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        switchPanel(el.dataset.panel);
      });
    });

    const provider = getProvider();
    if (provider) {
      provider.on?.('accountsChanged', (accounts) => {
        connected = accounts[0] || null;
        if (connectBtn) connectBtn.textContent = connected ? shortAddr(connected) : 'Connect Wallet';
        refreshBalance(connected);
      });
      provider.on?.('chainChanged', () => refreshBalance(connected));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
