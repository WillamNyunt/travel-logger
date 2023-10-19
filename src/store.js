import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/theme';
import modalReducer from './slices/modal';
import tripModalReducer from './slices/tripModal';
import loginReducer from './slices/login';
import userReducer from './slices/user';
import { tripApi } from './slices/trip';
import tripReducer from './slices/trip';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        modal: modalReducer,
        tripModal: tripModalReducer,
        login: loginReducer,
        user: userReducer,
        [tripApi.reducerPath] : tripApi.reducer,
        trip: tripReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(tripApi.middleware),
});



export default store;