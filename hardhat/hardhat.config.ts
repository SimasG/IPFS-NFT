import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const ALCHEMY_MUMBAI_HTTP_URL = process.env.ALCHEMY_MUMBAI_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: ALCHEMY_MUMBAI_HTTP_URL,
      accounts: [PRIVATE_KEY!],
    },
  },
};

export default config;
