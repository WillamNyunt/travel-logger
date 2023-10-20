import { createSlice}  from "@reduxjs/toolkit";

const initialState = {theme : 'dark-theme'}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload
        }
    }
})

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;

