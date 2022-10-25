import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDPpz3yLiSWuzur3iRK7g3Nh2UDttZ7wCQ",
//   authDomain: "gamerizate.firebaseapp.com",
//   projectId: "gamerizate",
//   storageBucket: "gamerizate.appspot.com",
//   messagingSenderId: "765938583054",
//   appId: "1:765938583054:web:16537a933aeb18c2cade5f"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
