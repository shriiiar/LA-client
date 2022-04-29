// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrqPxMzhELVWPh4JYoiVJusnoInk0gZRQ",
    authDomain: "assignment11-4b728.firebaseapp.com",
    projectId: "assignment11-4b728",
    storageBucket: "assignment11-4b728.appspot.com",
    messagingSenderId: "568545309365",
    appId: "1:568545309365:web:ec5fecce4f3ee407ed04fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;