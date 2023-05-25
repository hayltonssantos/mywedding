// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhTx_jyQ9XXDXbwN_8G3StDaWk8ixpOrU",
  authDomain: "mywendding.web.app",
  projectId: "mywendding",
  storageBucket: "mywendding.appspot.com",
  messagingSenderId: "297404197510",
  appId: "1:297404197510:web:51e391cdc5fcdca56a7f07",
  measurementId: "G-66KL1Q1VMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);