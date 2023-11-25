require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const privateKeys = process.env.PRIVATE_KEYS || "711ac0b93491b200f324cef1b5d00dffc8a64a238deef89eccaffe6bc30735a7";
const goerliRpcUrl = process.env.GOERLI_RPC_URL;
const mumbaiRpcUrl = process.env.MUMBAI_RPC_URL;

module.exports = {
  solidity: "0.8.18",
  networks: {
    localhost: {},
    goerli: {
      url: goerliRpcUrl,
      accounts: privateKeys.split(","),
    },
    mumbai: {
      url: mumbaiRpcUrl,
      accounts: privateKeys.split(","),
    },
  },
};
