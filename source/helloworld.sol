// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Author: Laboré ( 0xWeb3DevRel)
// username github: starlabman 

contract HelloWorld {
    string public message;

    constructor() {
        message = "Hello, World!";
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
