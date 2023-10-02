import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/theme';
import modalReducer from './slices/modal';
import tripModalReducer from './slices/tripModal';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        modal: modalReducer,
        tripModal: tripModalReducer,
    },
});

export default store;