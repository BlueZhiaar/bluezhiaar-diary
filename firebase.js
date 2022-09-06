// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6Q1UpeXpWKDs3PlcKiz0qeGSQWhUQdzE",
  authDomain: "bluezhiaar-diary.firebaseapp.com",
  projectId: "bluezhiaar-diary",
  storageBucket: "bluezhiaar-diary.appspot.com",
  messagingSenderId: "1093963449209",
  appId: "1:1093963449209:web:667a1d8e9818b09b1025a8",
  measurementId: "G-Z1V483VH0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
if(typeof window !== 'undefined'){
    const analytics = getAnalytics(app);
}

export const db = getFirestore();