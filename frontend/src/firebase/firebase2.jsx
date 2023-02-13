import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAHHIJyrjoqc59-uMQ01L3hA8l_LvspVIQ",
    authDomain: "bearbnb-95b93.firebaseapp.com",
    projectId: "bearbnb-95b93",
    storageBucket: "bearbnb-95b93.appspot.com",
    messagingSenderId: "419273231081",
    appId: "1:419273231081:web:4ede1d45f830a1044dbe78",
    measurementId: "G-54VBLR8NCJ"
};

firebase.initializeApp(firebaseConfig);

var auth_obj = firebase.auth();
var storage_obj = firebase.storage();

export default firebase;
export const auth = auth_obj;
export const storage = storage_obj;