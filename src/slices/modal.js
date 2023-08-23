import { createSlice } from "@reduxjs/toolkit";

const initialState = {modal : true}


const modalSlice = createSlice( {
    name: "modal",
    initialState,
    reducer: {
        setModal(state, action) {
            state.modal = action.payload
        }
    }
})

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;