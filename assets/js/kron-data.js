/**
 * puriKRON — official on-chain registry (single source of truth)
 * Live on Base mainnet — fair launch 2026-06-20
 */
window.KRON_DATA = {
  token: {
    name: 'puriKRON',
    symbol: 'PKRON',
    network: 'Base',
    chainId: 8453,
    decimals: 18,
    totalSupply: '10,000,000,000',
    deployed: '2026-06-20',
    verified: false,
    status: 'live',
    phase: 'III'
  },
  contract: {
    pending: false,
    labelKey: 'registry.contractOfficial',
    address: '0x679F06AC817a0EEC1fB86629168E40eb10b4A181',
    basescan: 'https://basescan.org/token/0x679F06AC817a0EEC1fB86629168E40eb10b4A181',
    blockscout: 'https://base.blockscout.com/token/0x679F06AC817a0EEC1fB86629168E40eb10b4A181',
    launchTx: 'https://basescan.org/tx/0x8e659e929dd9525a65179e1c94c93110e5d78d33b438745c973b5d7f12428458',
    blockscoutTx: 'https://base.blockscout.com/tx/0x8e659e929dd9525a65179e1c94c93110e5d78d33b438745c973b5d7f12428458',
    factory: '0x2CA2F6E849F4994de74d1Af7944249B334117556'
  },
  genesis: {
    labelKey: 'registry.genesis',
    address: '0xc282390c7eee86628Bd73c472f0ebf453CaB740b',
    basescan: 'https://basescan.org/address/0xc282390c7eee86628Bd73c472f0ebf453CaB740b'
  },
  ops: {
    labelKey: 'registry.ops',
    address: '0xb45c8268ACf64D1146395Eba74B4cA12A24350FA',
    basescan: 'https://basescan.org/address/0xb45c8268ACf64D1146395Eba74B4cA12A24350FA'
  },
  allocations: [
    {
      roleKey: 'registry.roleLp',
      lockKey: 'registry.roleLpLock',
      pct: '80%',
      amount: '8,000,000,000',
      address: '0xa5eD5A8B85c9AB7F808B3bD78ee436DEc25ecdD6',
      basescan: 'https://basescan.org/address/0xa5eD5A8B85c9AB7F808B3bD78ee436DEc25ecdD6'
    },
    {
      roleKey: 'registry.roleEco',
      lockKey: 'registry.roleEcoLock',
      pct: '10%',
      amount: '1,000,000,000',
      address: '0x682e28c704dcda59d04632826b3a311b296b5a15',
      basescan: 'https://basescan.org/address/0x682e28c704dcda59d04632826b3a311b296b5a15'
    },
    {
      roleKey: 'registry.roleFounder6',
      lockKey: 'registry.roleFounder6Lock',
      pct: '5%',
      amount: '500,000,000',
      address: '0xae7841a59232b932b804364ab396bed3fa544e85',
      basescan: 'https://basescan.org/address/0xae7841a59232b932b804364ab396bed3fa544e85'
    },
    {
      roleKey: 'registry.roleFounder12',
      lockKey: 'registry.roleFounder12Lock',
      pct: '5%',
      amount: '500,000,000',
      address: '0xac7ebeadaa4fc53c81d2f70b31f23d7d72b440b3',
      basescan: 'https://basescan.org/address/0xac7ebeadaa4fc53c81d2f70b31f23d7d72b440b3'
    }
  ],
  familyTokens: [
    { name: 'eKRON', symbol: 'EKRON', url: 'https://www.ekron.network/', phase: 'I', status: 'live', gateway: true },
    { name: 'soviKRON', symbol: 'SOVIKRON', url: 'https://www.sovikron.com/', phase: 'II', status: 'queued' },
    { name: 'mineKRON', symbol: 'MINEKRON', url: 'https://www.minekron.com/', phase: 'II', status: 'queued' },
    { name: 'alviKRON', symbol: 'ALVIKRON', url: 'https://www.alvikron.com/', phase: 'II', status: 'queued' },
    { name: 'puriKRON', symbol: 'PKRON', url: 'https://www.purikron.com/', phase: 'III', status: 'live' },
    { name: 'puppyKRON', symbol: 'PUPPYKRON', url: 'https://www.puppykron.com/', phase: 'III', status: 'gated' },
    { name: 'warpKRON', symbol: 'WARPKRON', url: 'https://www.warpkron.com/', phase: 'III', status: 'gated' }
  ],
  officialChannels: [
    {
      labelKey: 'channels.app',
      host: 'app.purikron.com',
      url: 'https://www.purikron.com/app/',
      descKey: 'channels.appDesc'
    },
    {
      labelKey: 'channels.purikron',
      host: 'www.purikron.com',
      url: 'https://www.purikron.com/',
      descKey: 'channels.purikronDesc'
    },
    {
      labelKey: 'channels.verify',
      host: 'www.purikron.com/verify',
      url: 'https://www.purikron.com/verify/',
      descKey: 'channels.verifyDesc'
    },
    {
      labelKey: 'channels.standard',
      host: 'www.purikron.com/standard',
      url: 'https://www.purikron.com/standard/',
      descKey: 'channels.standardDesc'
    },
    {
      labelKey: 'channels.family',
      host: 'www.purikron.com/family',
      url: 'https://www.purikron.com/family/',
      descKey: 'channels.familyDesc'
    },
    {
      labelKey: 'channels.program',
      host: 'www.purikron.com/program',
      url: 'https://www.purikron.com/program/',
      descKey: 'channels.programDesc'
    },
    {
      labelKey: 'channels.ekron',
      host: 'www.ekron.network',
      url: 'https://www.ekron.network/',
      descKey: 'channels.ekronDesc',
      external: true
    },
    {
      labelKey: 'channels.tvkGroup',
      host: 'www.tvk.group',
      url: 'https://www.tvk.group/',
      descKey: 'channels.tvkGroupDesc',
      external: true
    },
    {
      labelKey: 'channels.tvkCorp',
      host: 'www.t-v-k.com',
      url: 'https://www.t-v-k.com/',
      descKey: 'channels.tvkCorpDesc',
      external: true
    },
    {
      labelKey: 'channels.tvkLabs',
      host: 'www.tvklabs.com',
      url: 'https://www.tvklabs.com/',
      descKey: 'channels.tvkLabsDesc',
      external: true
    },
    {
      labelKey: 'channels.entelekronOrg',
      host: 'www.entelekron.org',
      url: 'https://www.entelekron.org/',
      descKey: 'channels.entelekronOrgDesc',
      external: true
    },
    {
      labelKey: 'channels.entelekronIo',
      host: 'www.entelekron.io',
      url: 'https://www.entelekron.io/',
      descKey: 'channels.entelekronIoDesc',
      external: true
    },
    {
      labelKey: 'channels.sovraNetwork',
      host: 'www.sovra.network',
      url: 'https://www.sovra.network/',
      descKey: 'channels.sovraNetworkDesc',
      external: true
    },
    {
      labelKey: 'channels.sovraProtocol',
      host: 'www.sovraprotocol.com',
      url: 'https://www.sovraprotocol.com/',
      descKey: 'channels.sovraProtocolDesc',
      external: true
    }
  ]
};
