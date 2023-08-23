import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/theme';
import modalReducer from './slices/modal';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        modal: modalReducer,
    },
});

export default store;