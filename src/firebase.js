// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC6xm6G_HmlQaLLYuJMUsjUVvJ8dWo8yp4",
    authDomain: "alloraservicehub.firebaseapp.com",
    projectId: "alloraservicehub",
    storageBucket: "alloraservicehub.firebasestorage.app",
    messagingSenderId: "441991405079",
    appId: "1:441991405079:web:06c26866fabaffea880652"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
