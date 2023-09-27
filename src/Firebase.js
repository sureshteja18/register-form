// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';

function firebaseDB(){
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
      return getDatabase(app);
}

export default firebaseDB;