import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./scss/Dashboard.scss";
import { auth, db } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './slices/user';
import Map from './components/Map';

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      dispatch(setUser(data))
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  
  const theme = useSelector(state => state.theme.theme)
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <div className={`app ${theme}`}>
         {/* <div>{userData.name}</div>
         <div>{userData.email}</div> */}
       <Map />
     </div>
  );
}
export default Dashboard;