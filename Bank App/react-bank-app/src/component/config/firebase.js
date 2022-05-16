// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjuzlvrdo1lRGPU6IZfZW68a4FeOUSZsk",
  authDomain: "bank-app-34ca7.firebaseapp.com",
  projectId: "bank-app-34ca7",
  storageBucket: "bank-app-34ca7.appspot.com",
  messagingSenderId: "690248283648",
  appId: "1:690248283648:web:a859bcea3f860322374ae5",
  measurementId: "G-9R837RB750",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}