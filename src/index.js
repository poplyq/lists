import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { BrowserRouter } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyDCUz1gIIgKdIbsd4oaOXMGvsKbfRhVf-U",
  authDomain: "lists-45a79.firebaseapp.com",
  databaseURL: "https://lists-45a79-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lists-45a79",
  storageBucket: "lists-45a79.appspot.com",
  messagingSenderId: "852095154217",
  appId: "1:852095154217:web:b5ed1ceeaa4145b6e40438"
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
