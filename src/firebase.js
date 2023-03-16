// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxqpcM959CCi1PvWqRojEFfozs5koueAM",
  authDomain: "internext-e2445.firebaseapp.com",
  projectId: "internext-e2445",
  storageBucket: "internext-e2445.appspot.com",
  messagingSenderId: "851186208529",
  appId: "1:851186208529:web:f500097aa3807913eb46b0",
  measurementId: "G-5GZEHE9T8K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);