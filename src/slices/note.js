import { db, auth } from '../firebase';
import { doc, getDocs, deleteDoc, query, collection, where, addDoc, GeoPoint, updateDoc } from "firebase/firestore";
import { baseApi } from './baseApi';
import { createSlice}  from "@reduxjs/toolkit";