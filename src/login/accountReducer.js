import { createSlice } from "@reduxjs/toolkit";
import * as client from "./client";
import { Roles } from "./roles";

const fetchAccount = async () => {
  return await client.account();
};

const initialState = {
  account: fetchAccount() || { username: "Guest", role: Roles.GUEST },
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state, action) => {
      if (action.payload) {
        state.account = action.payload;
      } else {
        state.account = { username: "Guest", role: Roles.GUEST };
      }
    },
  },
});

export const { setAccount } = accountSlice.actions;
export default accountSlice.reducer;
