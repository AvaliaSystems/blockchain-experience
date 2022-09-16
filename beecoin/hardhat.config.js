require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    chiado: {
      url: 'https://rpc-chiado.gnosistestnet.com/',
      // gasPrice: 1000000000,
      accounts: [process.env.PRIVATE_KEY],
    },
    gnosis: {
      url: 'https://rpc.gnosischain.com/',
      // gasPrice: 1000000000,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
