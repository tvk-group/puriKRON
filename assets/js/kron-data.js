/**
 * puriKRON — official on-chain registry (single source of truth)
 * Token contract: demand-gated Phase III — not deployed until organic demand.
 * Allocation wallets published for verification before launch.
 */
window.KRON_DATA = {
  token: {
    name: 'puriKRON',
    symbol: 'PURIKRON',
    network: 'Base',
    chainId: 8453,
    decimals: 18,
    totalSupply: '10,000,000,000',
    deployed: null,
    verified: false,
    status: 'demand-gated',
    phase: 'III'
  },
  contract: {
    pending: true,
    walletsPublished: true,
    statusKey: 'registry.pendingStatus',
    labelKey: 'registry.contractPending',
    address: null,
    basescan: null
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
      address: '0x172e02190e65Fa5f5C5224Dc9d8664E25Cb78809',
      basescan: 'https://basescan.org/address/0x172e02190e65Fa5f5C5224Dc9d8664E25Cb78809'
    },
    {
      roleKey: 'registry.roleFounder6',
      lockKey: 'registry.roleFounder6Lock',
      pct: '5%',
      amount: '500,000,000',
      address: '0x6bB7054DB758bd197Aa15547F45773eb44bD33Ff',
      basescan: 'https://basescan.org/address/0x6bB7054DB758bd197Aa15547F45773eb44bD33Ff'
    },
    {
      roleKey: 'registry.roleFounder12',
      lockKey: 'registry.roleFounder12Lock',
      pct: '5%',
      amount: '500,000,000',
      address: '0x6bB7054DB758bd197Aa15547F45773eb44bD33Ff',
      basescan: 'https://basescan.org/address/0x6bB7054DB758bd197Aa15547F45773eb44bD33Ff'
    }
  ],
  familyTokens: [
    { name: 'eKRON', symbol: 'EKRON', url: 'https://www.ekron.network/', phase: 'I', status: 'live', gateway: true },
    { name: 'soviKRON', symbol: 'SOVIKRON', url: 'https://www.sovikron.com/', phase: 'II', status: 'queued' },
    { name: 'mineKRON', symbol: 'MINEKRON', url: 'https://www.minekron.com/', phase: 'II', status: 'queued' },
    { name: 'alviKRON', symbol: 'ALVIKRON', url: 'https://www.alvikron.com/', phase: 'II', status: 'queued' },
    { name: 'puriKRON', symbol: 'PURIKRON', url: 'https://www.purikron.com/', phase: 'III', status: 'current' },
    { name: 'puppyKRON', symbol: 'PUPPYKRON', url: 'https://www.puppykron.com/', phase: 'III', status: 'gated' },
    { name: 'warpKRON', symbol: 'WARPKRON', url: 'https://www.warpkron.com/', phase: 'III', status: 'gated' }
  ],
  officialChannels: [
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
