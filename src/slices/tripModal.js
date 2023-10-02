import { createSlice } from "@reduxjs/toolkit";

const initialState = {open : false}


const tripModalSlice = createSlice( {
    name: "tripModal",
    initialState,
    reducers: {
        setTripModal(state, action) {
            state.open = action.payload
        }
    }
})

export const { setTripModal } = tripModalSlice.actions;

export default tripModalSlice.reducer;