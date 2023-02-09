//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract AdrianGame5 {
    mapping(address => uint) balances;
    mapping(address => uint) allowances;

    function giveMeAllowance(uint allowance) external {
        allowances[msg.sender] += allowance;
    }

    function mint(uint amount) external {
        allowances[msg.sender] -= amount;
        balances[msg.sender] += amount;
    }

    event Adrian5Winner(address winner);

    function win() public {
        require(balances[msg.sender] >= 10000);
        emit Adrian5Winner(msg.sender);
    }
}
