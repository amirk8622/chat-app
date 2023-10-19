
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBr2WSok0VHBHmsrdCLU3YMDMuwCvCb4HY",
  authDomain: "chat-app-23a74.firebaseapp.com",
  projectId: "chat-app-23a74",
  storageBucket: "chat-app-23a74.appspot.com",
  messagingSenderId: "186213441309",
  appId: "1:186213441309:web:0e8d2a1076bbf29ae10bf4"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()