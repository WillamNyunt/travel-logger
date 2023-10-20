import { db, auth } from '../firebase';
import { doc, getDocs, deleteDoc, query, collection, where, addDoc, GeoPoint, updateDoc } from "firebase/firestore";
import { baseApi } from './baseApi';
import { createSlice}  from "@reduxjs/toolkit";

export const noteApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        getNotesByTripId: builder.query({
            async queryFn(tripId) {
                try {
                    const ref = collection(db, "notes");
                    const q = query(ref, where("tripId", "==", tripId));
                    const querySnapshot = await getDocs(q);
                    const notes = querySnapshot.docs;
                    const notesArr = notes.map(note => {
                        return {
                            id: note.id,
                            title: note.data().title,
                            content: note.data().content,
                            tripId: note.data().tripId,
                        }
                    })
                } catch (err) {
                    console.error(err);
                }
            }
        })
    })
})

export const { useGetNotesByTripIdQuery } = noteApi;