import { Chain } from "wagmi";

export const joseon = {
  id: 42_1337,
  name: "Joseon",
  network: "joseon",
  nativeCurrency: {
    decimals: 18,
    name: "Joseon Mun",
    symbol: "JSM",
  },
  rpcUrls: {
    public: { http: ["https://rpc.modchain.net/blockchain.joseon.com/rpc"] },
    default: { http: ["https://rpc.modchain.net/blockchain.joseon.com/rpc"] },
  },
  blockExplorers: {
    default: { name: "BlockExplorer", url: "https://blockexplorer.com" },
  },
  contracts: {},
} as const satisfies Chain;
