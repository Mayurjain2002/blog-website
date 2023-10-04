// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmU_cdSYfZ6GiQgzXD0CSzSDabFprGUbY",
  authDomain: "blog-app-49815.firebaseapp.com",
  projectId: "blog-app-49815",
  storageBucket: "blog-app-49815.appspot.com",
  messagingSenderId: "470923712901",
  appId: "1:470923712901:web:6137fc5664ff9cb1144cec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();