import db from "../services/firebase";
import { addDoc, getDocs, collection, query, where } from "firebase/firestore";

export const getFriends = async (filter) => {
  const q = query(
    collection(db, "friends"),
    where("solved", "==", filter?.solved || false)
  );
  const friends = await getDocs(q);
  return friends;
};

export const addFriend = async (friend) => {
  await addDoc(collection(db, "friends"), friend);
};
