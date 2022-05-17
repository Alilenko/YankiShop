import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDD7KgOEz9igIcLWQFC-w4Xall-ZD9Du9E",
  authDomain: "yankishop-a74c3.firebaseapp.com",
  projectId: "yankishop-a74c3",
  storageBucket: "yankishop-a74c3.appspot.com",
  messagingSenderId: "175901287332",
  appId: "1:175901287332:web:0abc22f2827fcd343c9731",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const colRef = collection(db, "orders");
