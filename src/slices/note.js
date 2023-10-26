import { db, auth } from '../firebase';
import { doc, getDocs, deleteDoc, query, collection, where, addDoc, GeoPoint, updateDoc } from "firebase/firestore";
import { baseApi } from './baseApi';
import { createSlice}  from "@reduxjs/toolkit";

export const noteApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getNotesByTripId: builder.query({
            async queryFn(tripId) {
                try {
                    const ref = collection(db, `trips/${tripId}/notes`);
                    const q = query(ref);
                    const querySnapshot = await getDocs(ref);
                    const notes = querySnapshot.docs;
                    const notesArr = notes.map(note => {
                        return {
                            id: note.id,
                            title: note.data().Title,
                            position: {lat: note.data().Location._lat.toString(), lng: note.data().Location._long.toString()},
                        }
                    })
                    return {data : notesArr};
                } catch (err) {
                    console.error(err);
                }
            }
        }),
        addNoteByTripId: builder.mutation({
            async queryFn({tripId, data}) {
                try {
                    console.log(data)
                    const tripData = {
                        Title: data.title,
                        Comment: data.comment,
                        Date: data.date,
                        Location: new GeoPoint(data.location.lat, data.location.lng) ? new GeoPoint(Number(data.location.lat), Number(data.location.lng)) : Number(0),
                        Color: data.color,
                    }
                    const ref = collection(db, `trips/${tripId}/notes`);
                    const docRef = await addDoc(ref, tripData);
                    return {data: docRef};
                } catch (err) {
                    console.error(err);
                }
            },
            invalidateTags: ['Notes']
        })
    
    })
})

export const { useGetNotesByTripIdQuery, useAddNoteByTripIdMutation } = noteApi;