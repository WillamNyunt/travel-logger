//create slice for trip

import { db, auth } from '../firebase';
import { getDocs, query, collection, where, addDoc, GeoPoint } from "firebase/firestore";
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

export const tripApi = createApi({
    reducerPath: 'tripApi',
    baseQuery: fakeBaseQuery(),
    tagTypes: ['Trips'],
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
         }, {}),
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
            async onQueryStarted(arg, { dispatch, queryFulfilled, updateCachedData }) {
                try {
                    const result = await dispatch(queryFulfilled(arg));
                    return { result, error: null };
                } catch (error) {
                    return { result: null, error };
                }
            },
            
        })            
    }),
})

export const { useGetTripsQuery, useAddTripMutation } = tripApi;