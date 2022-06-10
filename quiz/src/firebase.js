// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmf_qM_hA5_SjaxlqogLlEZHsZQG3wF1E",
    authDomain: "sparta-react-basic-861d3.firebaseapp.com",
    projectId: "sparta-react-basic-861d3",
    storageBucket: "sparta-react-basic-861d3.appspot.com",
    messagingSenderId: "884833806639",
    appId: "1:884833806639:web:6337c9374e8bfb57ac19da",
    measurementId: "G-4Y00FKNJHB"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();