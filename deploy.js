const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
  'seed',
  'https://rinkeby.infura.io/iMNns7UcKJg4o7FcCUWC'
);

const web3 = new Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hi there!']})
    .send({gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to', result.options.address);


};
deploy();
//0x44861726eC583dC6036f8Eb99E048c89d908Ee33 deployed contract address
