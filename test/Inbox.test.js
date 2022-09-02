const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // Web3 is a constructor of web3 library
const web3 = new Web3(ganache.provider());