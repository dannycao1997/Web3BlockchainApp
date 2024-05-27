require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/6FXkw34tLYMMt34SWeJHOGjQHBFe91fM',
      accounts: ['868bc50c6c584b267774df382fb84d4154a23a126d2c9e5ff7f6b542d3b76566'],
    },
  },
};