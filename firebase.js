// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBadfHflRwtaiHKo4LjYJKEj8ZMltL-Wyc",
  authDomain: "pixeldungeon-70788.firebaseapp.com",
  projectId: "pixeldungeon-70788",
  storageBucket: "pixeldungeon-70788.appspot.com",
  messagingSenderId: "487523979576",
  appId: "1:487523979576:web:64cf94c496f6a8f6b931cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);