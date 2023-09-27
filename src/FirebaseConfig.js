import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyARrkGy-HnVl92QTkeqeSgSMvQAbB437TQ",
    authDomain: "registerform-b7534.firebaseapp.com",
    projectId: "registerform-b7534",
    storageBucket: "registerform-b7534.appspot.com",
    messagingSenderId: "144354460326",
    appId: "1:144354460326:web:0918939b92eefad912aa67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestoreDB = getFirestore(app);

// Initialize ((Realtime)) means firebase Database
const firebaseDB = getDatabase(app);

export { app, firestoreDB, firebaseDB };