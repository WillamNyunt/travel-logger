import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/theme';
import modalReducer from './slices/modal';
import tripModalReducer from './slices/tripModal';
import loginReducer from './slices/login';
import userReducer from './slices/user';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        modal: modalReducer,
        tripModal: tripModalReducer,
        login: loginReducer,
        user: userReducer,
    },
});

export default store;