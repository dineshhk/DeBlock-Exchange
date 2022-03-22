require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    ganache: {
      url: "HTTP://127.0.0.1:7545",
      accounts: [
        "33dfa8b56190e3df3812e99775fc989881229582f12424781aafada4e3b34ffc",
      ],
    },

    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/5AagTXlQeFT-NPUKlXC4li_ttbl5-In6",
      accounts: [
        "856288a77ee30ffb970c2b7e40383a15cd518fb378cbebfc794f03e63ff0b467",
      ],
    },
  },
};
