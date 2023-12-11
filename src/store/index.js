import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../login/accountReducer";

const store = configureStore({
  reducer: {
    accountReducer,
  },
});

export default store;
