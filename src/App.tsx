import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { joseon } from "./wagmi/joseon";

import PageLayout from "./features/common/layout/PageLayout/PageLayout";
import Home from "./pages/Home/Home";
import BlockDetails from "./pages/BlockDetails/BlockDetails";
import Blocks from "./pages/Blocks/Blocks";
import Transactions from "./pages/Transactions/Transactions";
import AddressDetails from "./pages/AddressDetails/AddressDetails";
import TransactionDetails from "./pages/TransactionDetails/TransactionDetails";
import PendingTransactions from "./pages/PendingTransactions/PendingTransactions";
import DAO from "./pages/DAO/DAO";
import DAOProject from "./pages/DAOProject/DAOProject";
import DAO4 from "./pages/DAO4/DAO4";
import DAO3 from "./pages/DAO3/DAO3";

const { publicClient, webSocketPublicClient } = configureChains(
  [joseon],
  [publicProvider()],
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

function App() {
  return (
    <WagmiConfig config={config}>
      <Router>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="/block-details" element={<BlockDetails />} />
            <Route path="/blocks" element={<Blocks />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/address-details" element={<AddressDetails />} />
            <Route
              path="/transaction-details"
              element={<TransactionDetails />}
            />
            <Route
              path="/pending-transactions"
              element={<PendingTransactions />}
            />
            <Route path="/dao" element={<DAO />} />
            <Route path="/dao3" element={<DAO3 />} />
            <Route path="/Create-new-proposal" element={<DAO4 />} />
            <Route path="/dao-project" element={<DAOProject />} />
          </Route>
        </Routes>
      </Router>
    </WagmiConfig>
  );
}

export default App;
