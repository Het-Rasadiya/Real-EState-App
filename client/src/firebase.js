// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-a7ed5.firebaseapp.com",
  projectId: "real-estate-a7ed5",
  storageBucket: "real-estate-a7ed5.appspot.com",
  messagingSenderId: "1029801200886",
  appId: "1:1029801200886:web:5ffa74ea96adf1dbfcf0d7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);