import db from "../services/firebase"
import { doc, addDoc, getDocs, collection } from "firebase/firestore"; 

export const getFriends = async() => {
    const friends = await getDocs(collection(db, "friends"));
    return friends
}

export const addFriend = async(friend) => {
    await addDoc(collection(db, "friends"), friend);
}