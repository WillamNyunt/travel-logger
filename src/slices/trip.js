//create slice for trip

import { db, auth } from '../firebase';
import { doc, getDocs, deleteDoc, query, collection, where, addDoc, GeoPoint, updateDoc } from "firebase/firestore";
import { baseApi } from './baseApi';
import { createSlice}  from "@reduxjs/toolkit";

export const tripApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getTrips: builder.query({
            async queryFn(userID) {
                try {
                    const ref = collection(db, "trips");
                    const q = query(ref, where("uid", "==", userID));
                    const querySnapshot = await getDocs(q);
                    const trips = querySnapshot.docs;
                    const tripsArr = trips.map(trip => {
                        return {
                            id: trip.id,
                            name: trip.data().name,
                            endLocation: {lat: trip.data().endLocation._lat.toString(), long: trip.data().endLocation._long.toString()},
                            startLocation: {lat: trip.data().startLocation._lat.toString(), long: trip.data().startLocation._long.toString()},
                        }
                    })
                    return {data : tripsArr};
                    } catch (err) {
                        console.log('There was an error fetching trip data.')
                        console.error(err);
                    }
            },
            providesTags: (result, error, id) => [{ type: 'Trips', id }],
         }),
        getTripByTripId: builder.query({
            async queryFn(tripID) {
                try {
                    const ref = doc(db, "trips", tripID);
                    const docSnap = await getDocs(ref);
                    const trip = docSnap.data();
                    return trip;
                } catch (err) {
                    console.log('There was an error fetching trip data.')
                    console.error(err);
                }
            },
            providesTags: (result, error, id) => [{ type: 'Trips', id }],
        }),
        addTrip: builder.mutation({
            async queryFn(tripData) {
                try {
                    const ref = collection(db, "trips");
                    const docRef = await addDoc(ref, {
                        name: tripData.name,
                        uid: auth.currentUser.uid,
                        startLocation: new GeoPoint(tripData.startLocation.lat, tripData.startLocation.lng) ? new GeoPoint(Number(tripData.startLocation.lat), Number(tripData.startLocation.lng)) : Number(0),
                        endLocation: new GeoPoint(tripData.endLocation.lat, tripData.endLocation.lng) ? new GeoPoint(Number(tripData.endLocation.lat), Number(tripData.endLocation.lng)) : Number(0),
                    });
                    return `Trip added with ID: ${docRef.id}`;
                } catch (err) {
                    console.log('There was an error adding trip data.')
                    console.error(err);
                }
            },
            invalidatesTags: ['Trips'],
        }),
        removeTrip: builder.mutation({
            async queryFn(tripID) {
                try {
                    await deleteDoc(doc(db, "trips", tripID))
                    return `Trip deleted with ID: ${tripID}`;
                } catch (err) {
                    console.log('There was an error deleting trip data.')
                    console.error(err);
                }
            },
            invalidatesTags: ['Trips'],
        }),
        editTrip: builder.mutation({
            async queryFn(tripData) {
                try {
                    const ref = doc(db, "trips", tripData.id);
                    await updateDoc(ref , {
                        name: tripData.name,
                        startLocation: (tripData.startLocation?.lat && tripData.startLocation?.lng)  ? new GeoPoint(Number(tripData.startLocation.lat), Number(tripData.startLocation.lng)) : new GeoPoint(0, 0),
                        endLocation: (tripData.endLocation?.lat && tripData.endLocation?.lng) ? new GeoPoint(Number(tripData.endLocation.lat), Number(tripData.endLocation.lng)) : new GeoPoint(0, 0),
                    });
                    return `Trip edited with ID: ${tripData.id}`;
                } catch (err) {
                    console.log('There was an error editing trip data.')
                    console.error(err);
                }
            }, 
            invalidatesTags: ['Trips'],
        }),
    }),
    overrideExisting: false,
})

const initialState = {}

const tripSlice = createSlice({
    name: "trip",
    initialState,
    reducers: {
        setTrip(state, action) {
            state.trip = action.payload
        }
    }
})

export const { setTrip } = tripSlice.actions;
export default tripSlice.reducer;
export const { useGetTripsQuery, useGetTripByTripId, useAddTripMutation, useRemoveTripMutation, useEditTripMutation } = tripApi;