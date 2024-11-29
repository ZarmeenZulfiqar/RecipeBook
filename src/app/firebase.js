// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaCWEprIifTrHFujBFw3Pp-wQDDQd-_DE",
    authDomain: "recipebook-bcf69.firebaseapp.com",
    projectId: "recipebook-bcf69",
    storageBucket: "recipebook-bcf69.firebasestorage.app",
    messagingSenderId: "468380245293",
    appId: "1:468380245293:web:25f5c9dea3b7fff05287a4",
    measurementId: "G-DJBG27B09W"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);