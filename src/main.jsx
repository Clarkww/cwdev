import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl7JRpn2hjgBFRly0KjpTv7gPpysYmeXM",
  authDomain: "cw-dev-01.firebaseapp.com",
  projectId: "cw-dev-01",
  storageBucket: "cw-dev-01.appspot.com",
  messagingSenderId: "652436573765",
  appId: "1:652436573765:web:7aeec9c57cef87897fdd2c",
  measurementId: "G-F13PL117FH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
