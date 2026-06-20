// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./KronToken.sol";
import "./KronTimelock.sol";

/**
 * @title KronFairLaunch — deploy puriKRON (PKRON) in one launch() call
 * @notice 80% LP · 10% ecosystem (12M) · 5% founder (6M) · 5% founder (12M)
 */
contract KronFairLaunch {
  uint256 public constant BPS = 10_000;
  uint256 public constant LP_BPS = 8_000;
  uint256 public constant ECOSYSTEM_BPS = 1_000;
  uint256 public constant FOUNDER_SHORT_BPS = 500;
  uint256 public constant FOUNDER_LONG_BPS = 500;

  uint256 public constant SIX_MONTHS = 180 days;
  uint256 public constant TWELVE_MONTHS = 365 days;

  struct LaunchResult {
    KronToken token;
    KronTimelock ecosystemLock;
    KronTimelock founderShortLock;
    KronTimelock founderLongLock;
    uint256 lpAmount;
    uint256 ecosystemAmount;
    uint256 founderShortAmount;
    uint256 founderLongAmount;
  }

  event FairLaunchDeployed(
    address indexed token,
    address indexed lpWallet,
    address indexed ecosystemLock,
    address founderShortLock,
    address founderLongLock,
    uint256 lpAmount,
    uint256 ecosystemAmount,
    uint256 founderShortAmount,
    uint256 founderLongAmount
  );

  function launch(
    string calldata name_,
    string calldata symbol_,
    address lpWallet,
    address ecosystemBeneficiary,
    address founderBeneficiary
  ) external returns (LaunchResult memory result) {
    require(lpWallet != address(0), "KronFairLaunch: zero lp");
    require(ecosystemBeneficiary != address(0), "KronFairLaunch: zero eco");
    require(founderBeneficiary != address(0), "KronFairLaunch: zero founder");

    result.token = new KronToken(name_, symbol_, address(this));
    uint256 total = result.token.totalSupply();

    result.lpAmount = (total * LP_BPS) / BPS;
    result.ecosystemAmount = (total * ECOSYSTEM_BPS) / BPS;
    result.founderShortAmount = (total * FOUNDER_SHORT_BPS) / BPS;
    result.founderLongAmount = (total * FOUNDER_LONG_BPS) / BPS;

    uint256 distributed = result.lpAmount + result.ecosystemAmount
      + result.founderShortAmount + result.founderLongAmount;
    require(distributed == total, "KronFairLaunch: distribution mismatch");

    result.token.transfer(lpWallet, result.lpAmount);

    result.ecosystemLock = new KronTimelock(
      result.token,
      ecosystemBeneficiary,
      block.timestamp + TWELVE_MONTHS
    );
    result.token.transfer(address(result.ecosystemLock), result.ecosystemAmount);

    result.founderShortLock = new KronTimelock(
      result.token,
      founderBeneficiary,
      block.timestamp + SIX_MONTHS
    );
    result.token.transfer(address(result.founderShortLock), result.founderShortAmount);

    result.founderLongLock = new KronTimelock(
      result.token,
      founderBeneficiary,
      block.timestamp + TWELVE_MONTHS
    );
    result.token.transfer(address(result.founderLongLock), result.founderLongAmount);

    emit FairLaunchDeployed(
      address(result.token),
      lpWallet,
      address(result.ecosystemLock),
      address(result.founderShortLock),
      address(result.founderLongLock),
      result.lpAmount,
      result.ecosystemAmount,
      result.founderShortAmount,
      result.founderLongAmount
    );
  }
}
