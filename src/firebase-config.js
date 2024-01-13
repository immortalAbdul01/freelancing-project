// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import dotenv from 'dotenv'
// import getFireStore from 'firebase/firestore'

// dotenv.config()
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdv6IGLrZnjiDqCPYakwf8zEmOsoElyWk",
  authDomain: "dentist-91d63.firebaseapp.com",
  projectId: "dentist-91d63",
  storageBucket: "dentist-91d63.appspot.com",
  messagingSenderId: "70361973851",
  appId: "1:70361973851:web:bd508fb743dcba877eab7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app)
