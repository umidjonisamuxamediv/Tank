// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {

    apiKey: "AIzaSyDRwAPEfSbob70_8YOilJVIJyRFpf2qlMY",
  
    authDomain: "components-135f9.firebaseapp.com",
  
    projectId: "components-135f9",
  
    storageBucket: "components-135f9.appspot.com",
  
    messagingSenderId: "17633583417",
  
    appId: "1:17633583417:web:69d2cde0a7b3cc08f808e8",
  
    measurementId: "G-9W8ERR0LSJ"
  
  };
  
  
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)
export const auth =getAuth(app)