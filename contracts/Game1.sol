//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract AdrianGame1 {
    event GameWinner(address winner);

    function win() public {
        emit GameWinner(msg.sender);
    }
}
