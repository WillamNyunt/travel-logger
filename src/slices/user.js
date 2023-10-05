import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name : "",
    email: "",
};

const userSlice = createSlice ({
    name: "user",
    initialState,
    reducers: {
        setUserName(state, action) {
            state.user = action.payload
        },
        setUserEmail(state, action) {
            state.email = action.payload
        }
    }
})

export const { setUserName, setUserEmail } = userSlice.actions;

export default userSlice.reducer;