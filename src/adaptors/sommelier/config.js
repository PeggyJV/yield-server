const chain = 'ethereum';
const project = 'sommelier';

// Addresses
const defiStars = '0x03df2a53cbed19b824347d6a45d09016c2d1676a';
const realYieldUsd = '0x97e6e0a40a3d02f12d1cec30ebfbae04e37c119e';
const realYieldEth = '0xb5b29320d2dde5ba5bafa1ebcd270052070483ec';
const realYieldLINK = '0x4068bdd217a45f8f668ef19f1e3a1f043e4c4934';
const realYield1INCH = '0xc7b69e15d86c5c1581dacce3cacaf5b68cd6596f';
const realYieldUNI = '0x6a6af5393dc23d7e3db28d28ef422db7c40932b6';
const realYieldSNX = '0xcbf2250f33c4161e18d4a2fa47464520af5216b5';
const realYieldENS = '0x18ea937aba6053bc232d9ae2c42abe7a8a2be440';
const fraximal = '0xdbe19d1c3f21b1bb250ca7bdae0687a97b5f77e6';

// Rewards are paid out in EVM SOMM
const rewardTokens = ['0xa670d7237398238de01267472c6f13e5b8010fd1'];

// Map of Cellars -> Staking Pool
const stakingPools = {
  '0x7bad5df5e11151dc5ee1a648800057c5c934c0d5':
    '0x24691a00779d375A5447727E1610d327D04B3C5F',
  '0x3f07a84ecdf494310d397d24c1c78b041d2fa622':
    '0xae0e6024972b70601bc35405479af5cd372cc956',
  '0x4986fd36b6b16f49b43282ee2e24c5cf90ed166d':
    '0xd1d02c16874e0714fd825213e0c13eab6dd9c25f',
  '0x6b7f87279982d919bbf85182ddeab179b366d8f2':
    '0x9eeabfff5d15e8cedfd2f6c914c8826ba0a5fbbd',
  '0x6e2dac3b9e9adc0cbbae2d0b9fd81952a8d33872':
    '0x6ce314c39f30488b4a86b8892c81a5b7af83e337',
  '0x6f069f711281618467dae7873541ecc082761b33':
    '0x74a9a6fab61e128246a6a5242a3e96e56198cbdd',
  '0x05641a27c82799aaf22b436f20a3110410f29652':
    '0x7da7e27e4bcc6ec8bc06349e1cef6634f6df7c5c',
  [realYieldUsd]: '0x8510f22bd1932afb4753b6b3edf5db00c7e7a748',
  [realYieldEth]: '0x955a31153e6764fe892757ace79123ae996b0afb',
  [defiStars]: '0x0349b3c56adb9e39b5d75fc1df52eee313dd80d1',
  [fraximal]: '0x290a42e913083edf5aefb241f8a12b306c19f8f9',
};

// List of v0815 Cellars
const v0815Pools = [
  {
    pool: '0x7bad5df5e11151dc5ee1a648800057c5c934c0d5-ethereum',
    chain,
    project,
    symbol: 'USDC',
    poolMeta: 'aave2-CLR-S',
    tvlUsd: 0,
    apyBase: 0,
    apyReward: 0,
    rewardTokens,
    underlyingTokens: [],
    url: 'https://app.sommelier.finance/strategies/AAVE/manage',
  },
];

// List of v0816 Cellars
const v0816Pools = [
  {
    pool: '0x6b7f87279982d919bbf85182ddeab179b366d8f2-ethereum',
    chain,
    project,
    symbol: 'ETH-BTC',
    poolMeta: 'ETHBTCTrend',
    tvlUsd: 0,
    apyBase: 0,
    apyReward: 0,
    rewardTokens,
    underlyingTokens: [],
    url: 'https://app.sommelier.finance/strategies/ETH-BTC-Trend',
  },
  {
    pool: '0x6e2dac3b9e9adc0cbbae2d0b9fd81952a8d33872-ethereum',
    chain,
    project,
    symbol: 'ETH-BTC',
    poolMeta: 'ETHBTCMom',
    tvlUsd: 0,
    apyBase: 0,
    apyReward: 0,
    rewardTokens,
    underlyingTokens: [],
    url: 'https://app.sommelier.finance/strategies/ETH-BTC-Momentum',
  },
  {
    pool: '0x3f07a84ecdf494310d397d24c1c78b041d2fa622-ethereum',
    chain,
    project,
    symbol: 'ETH',
    poolMeta: 'SteadyETH',
    tvlUsd: 0,
    apyBase: 0,
    apyReward: 0,
    rewardTokens,
    underlyingTokens: [],
    url: 'https://app.sommelier.finance/strategies/Steady-ETH',
  },
  {
    pool: '0x4986fd36b6b16f49b43282ee2e24c5cf90ed166d-ethereum',
    chain,
    project,
    symbol: 'BTC',
    poolMeta: 'SteadyBTC',
    tvlUsd: 0,
    apyBase: 0,
    apyReward: 0,
    rewardTokens,
    underlyingTokens: [],
    url: 'https://app.sommelier.finance/strategies/Steady-BTC',
  },
  {
    pool: '0x6f069f711281618467dae7873541ecc082761b33-ethereum',
    chain,
    project,
    symbol: 'UNI',
    poolMeta: 'SteadyUNI',
    tvlUsd: 0,
    apyBase: 0,
    apyReward: 0,
    rewardTokens,
    underlyingTokens: [],
    url: 'https://app.sommelier.finance/strategies/Steady-UNI',
  },
  {
    pool: '0x05641a27c82799aaf22b436f20a3110410f29652-ethereum',
    chain,
    project,
    symbol: 'MATIC',
    poolMeta: 'SteadyMATIC',
    tvlUsd: 0,
    apyBase: 0,
    apyReward: 0,
    rewardTokens,
    underlyingTokens: [],
    url: 'https://app.sommelier.finance/strategies/Steady-MATIC',
  },
];

const v2Pools = [
  {
    pool: `${defiStars}-ethereum`,
    chain,
    project,
    symbol: 'USDC-CRV-AAVE-COMP-MKR-LDO',
    poolMeta: 'DeFiStars',
    tvlUsd: 0,
    apyBase: 0,
    apyReward: 0,
    rewardTokens,
    underlyingTokens: [],
    url: 'https://app.sommelier.finance/strategies/DeFi-Stars',
  },
  {
    pool: `${realYieldUsd}-ethereum`,
    chain,
    project,
    symbol: 'USDC-USDT-DAI',
    poolMeta: 'RealYieldUSD',
    tvlUsd: 0,
    apyBase: 0,
    apyReward: 0,
    rewardTokens,
    underlyingTokens: [],
    url: 'https://app.sommelier.finance/strategies/Real-Yield-USD',
  },
  {
    pool: `${realYieldEth}-ethereum`,
    chain,
    project,
    symbol: 'WETH-stETH-cbETH-rETH',
    poolMeta: 'RealYieldETH',
    tvlUsd: 0,
    apyBase: 0,
    apyReward: 0,
    rewardTokens,
    underlyingTokens: [],
    url: 'https://app.sommelier.finance/strategies/Real-Yield-ETH',
  },
  {
    pool: `${realYieldLINK}-ethereum`,
    chain,
    project,
    symbol: 'LINK-WETH-YieldETH',
    poolMeta: 'RealYieldLINK',
    tvlUsd: 0,
    apyBase: 0,
    underlyingTokens: [],
    url: 'https://app.sommelier.finance/strategies/Real-Yield-LINK',
  },
  {
    pool: `${realYield1INCH}-ethereum`,
    chain,
    project,
    symbol: '1INCH-WETH-YieldETH',
    poolMeta: 'RealYield1INCH',
    tvlUsd: 0,
    apyBase: 0,
    underlyingTokens: [],
    url: 'https://app.sommelier.finance/strategies/Real-Yield-1Inch',
  },
  {
    pool: `${realYieldUNI}-ethereum`,
    chain,
    project,
    symbol: 'UNI-WETH-YieldETH',
    poolMeta: 'RealYield1UNI',
    tvlUsd: 0,
    apyBase: 0,
    underlyingTokens: [],
    url: 'https://app.sommelier.finance/strategies/Real-Yield-UNI',
  },
  {
    pool: `${realYieldSNX}-ethereum`,
    chain,
    project,
    symbol: 'SNX-WETH-YieldETH',
    poolMeta: 'RealYieldSNX',
    tvlUsd: 0,
    apyBase: 0,
    underlyingTokens: [],
    url: 'https://app.sommelier.finance/strategies/Real-Yield-SNX',
  },
  {
    pool: `${realYieldENS}-ethereum`,
    chain,
    project,
    symbol: 'ENS-WETH-YieldETH',
    poolMeta: 'RealYieldENS',
    tvlUsd: 0,
    apyBase: 0,
    underlyingTokens: [],
    url: 'https://app.sommelier.finance/strategies/Real-Yield-ENS',
  },
  {
    pool: `${fraximal}-ethereum`,
    chain,
    project,
    symbol: 'FRAX',
    poolMeta: 'Fraximal',
    tvlUsd: 0,
    apyBase: 0,
    underlyingTokens: [],
    url: 'https://app.sommelier.finance/strategies/Fraximal',
  },
];

module.exports = {
  chain,
  project,
  rewardTokens,
  stakingPools,
  v0815Pools,
  v0816Pools,
  v2Pools,
};
