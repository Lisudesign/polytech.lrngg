// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTv1q8pbmBO1gwAfdtmciCD_kjH1psu6M",
  authDomain: "mychatproject-f53fb.firebaseapp.com",
  databaseURL: "https://mychatproject-f53fb-default-rtdb.firebaseio.com",
  projectId: "mychatproject-f53fb",
  storageBucket: "mychatproject-f53fb.appspot.com",
  messagingSenderId: "310430746224",
  appId: "1:310430746224:web:7557583514fbe883ecd6b5",
  measurementId: "G-81Q6DKERQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

let user;

// Authenticate anonymously
signInAnonymously(auth).catch(error => {
    console.error("Sign in error: ", error);
});

onAuthStateChanged(auth, currentUser => {
    if (currentUser) {
        user = currentUser;
        console.log("User signed in: ", user.uid);
    } else {
        console.log("User signed out");
    }
});

const chat
