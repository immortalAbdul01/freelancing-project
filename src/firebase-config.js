// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import dotenv from 'dotenv'
// import dotenv from 'dotenv'
// import getFireStore from 'firebase/firestore'

// dotenv.config()
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHD,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_SB,
  messagingSenderId:process.env.REACT_APP_MSI,
  appId: process.env.REACT_APP_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app)
