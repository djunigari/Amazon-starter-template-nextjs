// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtebnVN89QPAItKwlykzP1y8UCfAu9UEs",
    authDomain: "amzn-2-yt-b3538.firebaseapp.com",
    projectId: "amzn-2-yt-b3538",
    storageBucket: "amzn-2-yt-b3538.appspot.com",
    messagingSenderId: "377669643654",
    appId: "1:377669643654:web:7714596f47f03c36185007"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export { app, db } 