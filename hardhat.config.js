require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.0",
  },
  paths: {
    artifacts: './client/src/artifacts'
  }, 
  networks: {
    hardhat: {},
    buildbear: {
      url: 'https://backend.buildbear.io/node/romantic-ramanujan-ee0420',
      accounts: ['59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d']
    }
  }
};
