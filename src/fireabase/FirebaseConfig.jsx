// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqWiV6aFwTqjLrKdH1-BYvEfchcmxCeHo",
  authDomain: "fusion-saka015.firebaseapp.com",
  projectId: "fusion-saka015",
  storageBucket: "fusion-saka015.appspot.com",
  messagingSenderId: "209630683503",
  appId: "1:209630683503:web:17dc2210b35ba4a493089a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
