// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeBPQrv1f0yssE_9r7VPwMHIMoUDrP6Ag",
  authDomain: "burguerhouse-78fdf.firebaseapp.com",
  projectId: "burguerhouse-78fdf",
  storageBucket: "burguerhouse-78fdf.appspot.com",
  messagingSenderId: "503732480439",
  appId: "1:503732480439:web:fc7e2f4fbc00c02d18a032",
  measurementId: "G-2FQMEBCJ3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);