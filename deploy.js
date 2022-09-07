const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'dilemma obvious stumble action barrel wedding circle rookie renew manage abandon glide',
    'https://goerli.infura.io/v3/f6e2ff0a69e24617b1a9e716ddc19403'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Test Contract!'] })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to: ', result.options.address);

    provider.engine.stop();
};

deploy();