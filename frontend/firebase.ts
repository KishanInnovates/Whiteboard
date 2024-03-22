// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYHG18DboR0Ap9lGpAiu_gtPRX_jYjUtg",
  authDomain: "whiteboard-93d85.firebaseapp.com",
  projectId: "whiteboard-93d85",
  storageBucket: "whiteboard-93d85.appspot.com",
  messagingSenderId: "807891211839",
  appId: "1:807891211839:web:d7610ea77a3a8be2254a8a",
  measurementId: "G-7E582L1F9V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
