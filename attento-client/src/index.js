import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN2-DkcxPFoSyAbkINJcZCCvtz7w0WdlE",
  authDomain: "attendo-41b02.firebaseapp.com",
  projectId: "attendo-41b02",
  storageBucket: "attendo-41b02.appspot.com",
  messagingSenderId: "57090708182",
  appId: "1:57090708182:web:af81dfc851bbcbf1dbef77",
  measurementId: "G-NDDGY879K5"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

