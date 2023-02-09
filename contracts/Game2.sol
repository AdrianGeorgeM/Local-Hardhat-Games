//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract AdrianGame2 {
    uint public x;
    uint public y;

    function setX(uint _x) external {
        x = _x;
    }

    function setY(uint _y) external {
        y = _y;
    }

    event Game2Winner(address winner);

    function win() public {
        require(x > 0 && y > 0);
        require(x + y == 50);
        emit Game2Winner(msg.sender);
    }
}
