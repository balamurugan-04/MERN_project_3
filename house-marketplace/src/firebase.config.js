// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC78zxbLwfB0VKGqlZCkX0-IEMGOTLtRmk",
  authDomain: "house-marketplace-app-77e92.firebaseapp.com",
  projectId: "house-marketplace-app-77e92",
  storageBucket: "house-marketplace-app-77e92.appspot.com",
  messagingSenderId: "1007503717560",
  appId: "1:1007503717560:web:db6e4045663442487c704d",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
