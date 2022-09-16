# Blockchain eXperience
The Blockchain eXperience is a workshop designed by Avalia Systems to provide a hands-on introduction to decentralized technologies and applications. During the workshop, participants are invited to interact with 

## Gnosis Chain

There are different blockchains, running on top of different protocols. The Bitcoin network and the Ethereum mainnet are two well-known examples, but there are others. To build a distributed application (DApp), one needs to select a target blockchain. The way to write the smart contracts that are part of the DApp depend on this choice.

For this workshop, we use the Gnosis Chain, which is based on the Ethereum specifications. It is EVM compabible, which means that the smart contracts that run on the Gnosis Chain also work on the Ethereum testnets and mainnet. Compared to Ethereum, the Gnosis Chain has very nice attributes for prototyping:

* it is fast: transactions are confirmed within seconds, not within minutes
* it is cheap: transactions cost fractions of cents, not tens of dollars
* it uses a "stable" native currency: 1 xDAI is always worth 1 USD, whereas the price of 1 Ether fluctuates a lot

### References

https://www.gnosischain.com/

https://docs.gnosischain.com/

https://twitter.com/gnosischain

https://github.com/gnosischain



## MetaMask

In order to exchange crypto tokens and to interact with our Distributed Application (DApp), participants need to install the MetaMask digital wallet. It is installed as a Chrome extension. 

https://metamask.io/

MetaMask can be used to interact with several blockchains, also known as "networks". In other words, if I can use the same wallet to manage assets (tokens) and submit transactions on the Ethererum mainnet, on ethereum testnets, on the Gnosis chain, on a local etherum network, etc.

### Configure MetaMask 

For the workshop, we need to configure MetaMask and add the parameters of the Gnosis Chain. See explanations here: 

https://docs.gnosischain.com/tools/wallets/metamask/

**NOTE**: we have had problems with the official Gnosis RPC endpoint, resulting in errors on the frontend. If the official endpoint is not stable and if you don't want to run your own node, then you can try another endpoint provided by the community (e.g. Ankr, Pokt, Blast). See https://docs.gnosischain.com/tools/rpc.



## Development environment

There are different ways to setup a development environment to write, compile, test and deploy smart contracts. Truffle, Hardhat and Foundry are three examples. The Remix IDE is an online alternative. To build our demo DApp, we have used HardHat and this is what we will use during the workshop.

### References

https://hardhat.org/

https://trufflesuite.com/

https://getfoundry.sh/

https://remix-project.org/

## Libraries

A DApp consists of several components:

* a frontend, written with standard HTML and JS technologies
* a collection of smart contracts (we will use the Solidity programming language) deployed on a blockchain
* possibly a backend, written with any web stack (node, Java, etc.)

The frontend and the backend interact with the smart contract using a special JS library. web3.js and ethers.js are two examples, and it seems that the latter is gaining traction. In our demo application, we have used ethers.js. On the frontend, it is also possible to interact with Metamask with a library. This is used to change the network, registering tokens, etc.

### References

https://docs.ethers.io/v5/

https://web3js.readthedocs.io/en/v1.8.0/

https://docs.metamask.io/guide/getting-started.html

