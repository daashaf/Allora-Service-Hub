// firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA1gGqKyv1Lo_wH5SNsVqPB92SW1GgGPa8",
    authDomain: "allora-serice-hub.firebaseapp.com",
    projectId: "allora-serice-hub",
    storageBucket: "allora-serice-hub.appspot.com",   // ✅ FIXED
    messagingSenderId: "47437060835",
    appId: "1:47437060835:web:0c6d304f8f3953896c43d6"
};

// Prevent duplicate app error
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
