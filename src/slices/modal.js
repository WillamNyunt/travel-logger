import { createSlice } from "@reduxjs/toolkit";

const initialState = {noteModal: false, tripModal: false}


const modalSlice = createSlice( {
    name: "modal",
    initialState,
    reducers: {
        setNoteModal(state, action) {
            state.noteModal = action.payload
        },
        setTripModal(state, action) {
            state.tripModal = action.payload
        }
    }
})

export const { setNoteModal, setTripModal } = modalSlice.actions;

export default modalSlice.reducer;