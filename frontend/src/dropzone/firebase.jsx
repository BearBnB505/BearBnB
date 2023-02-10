// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHHIJyrjoqc59-uMQ01L3hA8l_LvspVIQ",
    authDomain: "bearbnb-95b93.firebaseapp.com",
    projectId: "bearbnb-95b93",
    storageBucket: "bearbnb-95b93.appspot.com",
    messagingSenderId: "419273231081",
    appId: "1:419273231081:web:4ede1d45f830a1044dbe78",
    measurementId: "G-54VBLR8NCJ"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export {app,db,storage};
