require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/rGMq55yJqcW2ty0WfiqeIuJndP_i_kt5",
      accounts: [
        "5a6a1dd812245ab8eeedeed30dbe12aa393af55671756bc971cbd7fa15996e67",
      ],
    },
  },
};
