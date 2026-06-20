// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.2/contracts/token/ERC20/IERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.2/contracts/token/ERC20/utils/SafeERC20.sol";

/**
 * @title KronTimelock — puriKRON allocation locks
 */
contract KronTimelock {
    using SafeERC20 for IERC20;

    IERC20 public immutable token;
    address public immutable beneficiary;
    uint256 public immutable releaseTime;

    event Released(address indexed beneficiary, uint256 amount);

    constructor(IERC20 token_, address beneficiary_, uint256 releaseTime_) {
        require(beneficiary_ != address(0), "KronTimelock: zero beneficiary");
        require(releaseTime_ > block.timestamp, "KronTimelock: past release");
        token = token_;
        beneficiary = beneficiary_;
        releaseTime = releaseTime_;
    }

    function release() external {
        require(block.timestamp >= releaseTime, "KronTimelock: not released");
        uint256 amount = token.balanceOf(address(this));
        require(amount > 0, "KronTimelock: nothing to release");
        token.safeTransfer(beneficiary, amount);
        emit Released(beneficiary, amount);
    }
}
