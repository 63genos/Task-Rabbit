// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCog5su6VEU0ZfsaAzFuLrb4s9K0DbUTpU",
  authDomain: "task-rabbit-fd79a.firebaseapp.com",
  projectId: "task-rabbit-fd79a",
  storageBucket: "task-rabbit-fd79a.appspot.com",
  messagingSenderId: "524354228577",
  appId: "1:524354228577:web:f93dcc66b0060dba6af520",
  measurementId: "G-816X2KDMRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
