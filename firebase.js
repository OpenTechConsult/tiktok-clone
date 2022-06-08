// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEgYMHh9SR9bs8qXduiDRAAlthDbxsuXc",
    authDomain: "tiktok-clone-c11ca.firebaseapp.com",
    projectId: "tiktok-clone-c11ca",
    storageBucket: "tiktok-clone-c11ca.appspot.com",
    messagingSenderId: "944736944965",
    appId: "1:944736944965:web:800bbfc548ecac837cf42c",
    measurementId: "G-0KXT8WPQC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);