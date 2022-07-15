// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_8E2EoAHlWHN4qZXcVJ_CNY_oT_wmg1M",
  authDomain: "bank-application-b5363.firebaseapp.com",
  projectId: "bank-application-b5363",
  storageBucket: "bank-application-b5363.appspot.com",
  messagingSenderId: "929915460599",
  appId: "1:929915460599:web:d3242310a54049c179acf2",
  measurementId: "G-S2V47NWSFC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {auth};