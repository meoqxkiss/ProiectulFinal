import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";import { collection, getDocs } from "firebase/firestore";const firebaseConfig = {
  apiKey: "AIzaSyDS0uXKTx_ksQNJDYNDtQxMMM-RKAdhPPI",
  authDomain: "ggit2-d66eb.firebaseapp.com",
  projectId: "ggit2-d66eb",
  storageBucket: "ggit2-d66eb.appspot.com",
  messagingSenderId: "778010878139",
  appId: "1:778010878139:web:84dfd0e990fc4b991e099e",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db