//create slice for trip

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    trips: [],
};

const tripSlice = createSlice({
    name: 'trips',
    initialState,
    reducers: {
        setTrips(state, action) {
            state.trips = action.payload;
        },
        addTrip(state, action) {
            state.trips.push(action.payload);
        },
        deleteTrip(state, action) {
            state.trips = state.trips.filter((trip) => trip.id !== action.payload);
        },
        updateTrip(state, action) {
            const index = state.trips.findIndex((trip) => trip.id === action.payload.id);
            state.trips[index] = action.payload;
        },
    },
});

export default tripSlice.reducer;

export const { setTrips, addTrip, deleteTrip, updateTrip } = tripSlice.actions;