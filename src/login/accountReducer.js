import { createSlice } from "@reduxjs/toolkit";
import * as client from "./client";
import { Roles } from './roles';

const fetchAccount = async () => {
    return await client.account();
};

const initialState = {
    account: await client.account() || { username: "Anonymous", role: Roles.ANONYMOUS },
};

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setAccount: (state, action) => {
            if (action.payload) {
                state.account = action.payload;
            } else {
                state.account = { username: "Anonymous", role: Roles.ANONYMOUS };
            }
        },
    },
});

export const { setAccount } = accountSlice.actions;
export default accountSlice.reducer;
