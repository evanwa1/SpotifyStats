// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT65smP4nreZO-FCnwdv4nsYoolnLraPc",
  authDomain: "spotifystats-7a2e9.firebaseapp.com",
  projectId: "spotifystats-7a2e9",
  storageBucket: "spotifystats-7a2e9.appspot.com",
  messagingSenderId: "767004912877",
  appId: "1:767004912877:web:9d26a4cd60588c7c9cb0e4",
  measurementId: "G-N4B83V9KN0",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
//const analytics = getAnalytics(app);

export { firebase, auth };
