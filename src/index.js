import React from 'react';
import ReactDOM from 'react-dom/client';

import {RouterProvider} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {router} from "./router";
import { CartContextProvider } from './context/cartContext';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDpUIRLJ5usRl0Ut48GuuhmG393avSQWjA",
  authDomain: "shuaccesorios-47650.firebaseapp.com",
  projectId: "shuaccesorios-47650",
  storageBucket: "shuaccesorios-47650.appspot.com",
  messagingSenderId: "563620224905",
  appId: "1:563620224905:web:1247a48f6660dd80cb0b58"
};


initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
