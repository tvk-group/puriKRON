// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.2/contracts/token/ERC20/ERC20.sol";

/**
 * @title KronToken — puriKRON (PKRON)
 * @notice 10 billion fixed supply. Deploy only via KronFairLaunch.launch().
 */
contract KronToken is ERC20 {
    uint256 public constant TOTAL_SUPPLY = 10_000_000_000 * 10 ** 18;

    constructor(
        string memory name_,
        string memory symbol_,
        address initialHolder
    ) ERC20(name_, symbol_) {
        require(initialHolder != address(0), "KronToken: zero holder");
        _mint(initialHolder, TOTAL_SUPPLY);
    }
}
