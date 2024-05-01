import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isWalletConnected: false,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    connectWallet: (state) => {
      state.isWalletConnected = true;
    },
    disconnectWallet: (state) => {
      state.isWalletConnected = false;
    },
  },
});

export const { connectWallet, disconnectWallet } = walletSlice.actions;

export default walletSlice.reducer;
