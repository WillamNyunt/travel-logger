import { createSlice } from "@reduxjs/toolkit";

const initialState = {errorMessage : ""};

const loginSlice = createSlice ({
    name: "login",
    initialState,
    reducers: {
        setLoginMessage(state, action) {
            state.errorMessage = action.payload
        }
    }
})

export const { setLoginMessage } = loginSlice.actions;

export default loginSlice.reducer;