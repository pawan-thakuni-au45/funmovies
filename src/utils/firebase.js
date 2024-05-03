// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz0bJnzuoCFUo0ugDqAUe7FVDc1Pw0MP0",
  authDomain: "fungpt-cfcf5.firebaseapp.com",
  projectId: "fungpt-cfcf5",
  storageBucket: "fungpt-cfcf5.appspot.com",
  messagingSenderId: "9576252164",
  appId: "1:9576252164:web:90a78c339c273e5bd94651",
  measurementId: "G-ERZN13JNL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);