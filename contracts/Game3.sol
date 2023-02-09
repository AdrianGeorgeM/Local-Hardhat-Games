//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract AdrianGame3 {
    uint8 y = 210;

    event Game3Winner(address winner);

    function win(uint8 x) public {
        unchecked {
            uint8 sum = x + y;
            require(sum == 255, "Incorrect argument passed in!");
        }
        emit Game3Winner(msg.sender);
    }
}
