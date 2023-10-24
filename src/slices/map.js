import { createSlice}  from "@reduxjs/toolkit";


//create map slice with initial state of empty object

const initialState = {
    cursor: 'cursor-pointer',
    map: null
};

const mapSlice = createSlice ({
    name: "map",
    initialState,
    reducers: {
        setCursor(state, action) {
            state.cursor = action.payload
        },
        setMap(state, action) {
            state.cursor = action.payload
        },
    }
})


export default mapSlice.reducer;
export const { setMap, setCursor } = mapSlice.actions;