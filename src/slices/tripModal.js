import { createSlice } from "@reduxjs/toolkit";

const initialState = {open : false}


const modalSlice = createSlice( {
    name: "tripModal",
    initialState,
    reducers: {
        setModal(state, action) {
            state.open = action.payload
        }
    }
})

export const { setTripModal } = modalSlice.actions;

export default modalSlice.reducer;