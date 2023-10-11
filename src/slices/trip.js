//create slice for trip

import { db, auth } from '../firebase';
import { getDocs, query, collection, where } from "firebase/firestore";
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

export const tripApi = createApi({
    reducerPath: 'tripApi',
    baseQuery: fakeBaseQuery(),
    tags: ['trips'],
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
                        console.error(err);
                    }
            },
         }, {}),
    }),
})

export const { useGetTripsQuery } = tripApi;