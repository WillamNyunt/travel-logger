import { db } from './firebase';
import { getDocs, query, collection, where } from "firebase/firestore";


const fetchTrips = async (uid) => {
    try {
        const q = query(collection(db, "trips"), where("uid", "==", uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        console.log(data)
     } catch (err) {
    console.error(err);
    alert("An error occured while fetching user data");
  }
}


export default fetchTrips;
    