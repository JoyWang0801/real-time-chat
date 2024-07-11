// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"",
  authDomain: "real-time-chat-42d93.firebaseapp.com",
  projectId: "real-time-chat-42d93",
  storageBucket: "real-time-chat-42d93.appspot.com",
  messagingSenderId: "930559720578",
  appId: "1:930559720578:web:5d029779b77edb187b489b",
  measurementId: "G-SGS2M8YEKC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
