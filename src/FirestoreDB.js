// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   // Your Firebase configuration here
// };

// // Initialize Firebase Firestore
// const app = initializeApp(firebaseConfig);
// const firestoreDB = getFirestore(app);

// export default firestoreDB;


import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyARrkGy-HnVl92QTkeqeSgSMvQAbB437TQ",
  authDomain: "registerform-b7534.firebaseapp.com",
  projectId: "registerform-b7534",
  storageBucket: "registerform-b7534.appspot.com",
  messagingSenderId: "144354460326",
  appId: "1:144354460326:web:0918939b92eefad912aa67"
};

// Initialize Firebase Firestore
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB; // Make sure firestoreDB is exported as the default export







