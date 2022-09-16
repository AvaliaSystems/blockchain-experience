# Getting started with smart contracts

The goal of this procedure is to go through the process of developing, testing and deploying smart contracts on the Gnosis chain. We will follow the Hardhat tutorial and use the sample project as a starting point for the exercise.

## Install the development environment

We will use Hardhat. 

We need a node.js environment (at least 16.0).

https://hardhat.org/tutorial/setting-up-the-environment



## Create the project structure

https://hardhat.org/tutorial/creating-a-new-hardhat-project

Have a look at the following directories:

* **contracts**: contains a sample smart contract (depends on the version of Hardhat)
* **scripts**: Javascript code that you run to deploy your smart contracts
* **test**: BDD tests to check the behavior of your contracts, written in Javascript
* **artifacts**: will contain the compiled contracts and metadata (useful for verifying, writing clients, etc.)

In addition, the hardhat.config.js file is where you can setup your networks, plugins, etc. By default, it is empty and you will want to update it to:

```
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
```

* **chiado** the testnet for the Gnosis Chain
* the **gas price** is now higher than 1000000000, so keeping the default value will cause errors when deploying contracts. Removing the parameter gives it the value "auto", where hardhat estimates the appropriate value.
* notice the `process.env.PRIVATE_KEY` value. If we deploy on a live network, we need to [export our private key from Metamask](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key) and `export PRIVATE_KEY=xxxxxxx` on our terminal.



## Understand the different networks

When testing smart contracts with Hardhat, we can work with 3 types of networks:

* If we don't specify anything, Hardhat executes the smart contracts in-memory. In this case, there is no blockchain to connect to.
* Hardhat comes with a "local" network. Using the `npx hardhat node`, you can smart a local Ethereum blockchain on your machine. You can configure MetaMask to connect to this network.
* To deploy on a live network (Gnosis, Chiado, Ethererum mainnet, etc), you will need an account and some native tokens (xDAI, Ether). On some networks, it is possible to get small amounts of tokens from "**faucets**" (see https://docs.gnosischain.com/tools/faucets/). 
* Here is a faucet for Gnosis and Chiado: https://gnosisfaucet.com/.



## Create our own token: the BeeCoin

* Understand that ERC-20 is a standard specification for "tokens" running on top of an ethereum blockchain
* Understand that [OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20) provides an [open source implementation](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20) of this spec.

To write your own coin, you can extend the OpenZeppelin implementation:

```
npm add @openzeppelin/contracts
```

```
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BeeCoin is ERC20 {
  uint constant _initial_supply = 100 * (10**18);
  constructor() ERC20("Bzzz", "BZ") {
    _mint(msg.sender, _initial_supply);
  }
}
```



You will then also need to write a deployment script:

```
const hre = require("hardhat");

async function main() {
  const BeeCoin = await hre.ethers.getContractFactory("BeeCoin");
  const beeCoin = await BeeCoin.deploy();

  await beeCoin.deployed();

  console.log(
    `BeeCoin contract deployed to ${beeCoin.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

