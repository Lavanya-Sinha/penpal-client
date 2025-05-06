// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  // Add this line

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFv-iL5oU3P_s7hwKAYDKAFOjWBRhauxM",
  authDomain: "interactions-8eefa.firebaseapp.com",
  projectId: "interactions-8eefa",
  storageBucket: "interactions-8eefa.firebasestorage.app",
  messagingSenderId: "353644815260",
  appId: "1:353644815260:web:ba0d8e6ee4ebe0cc845e59",
  measurementId: "G-1T5MCB2K1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);  // Export auth so you can import it elsewhere
