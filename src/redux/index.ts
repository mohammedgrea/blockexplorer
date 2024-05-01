import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./reducers/toggleSlice";
import walletSlice from "./reducers/walletConnectReducer";

const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    connectWallet: walletSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
