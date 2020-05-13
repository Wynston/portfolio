import React from "react";
import ReactDOM from "react-dom";
import App from "app/App";
import * as serviceWorker from "services/serviceWorker";
import * as firebase from "firebase/app";
require("typeface-roboto");
require("typeface-space-mono");

const firebaseConfig = {
  apiKey: "AIzaSyD3zpEJg4t3wqYT213l2DHaB4mAsbr1SRM",
  authDomain: "wynston-ramsay-portfolio.firebaseapp.com",
  databaseURL: "https://wynston-ramsay-portfolio.firebaseio.com",
  projectId: "wynston-ramsay-portfolio",
  storageBucket: "wynston-ramsay-portfolio.appspot.com",
  messagingSenderId: "126043684398",
  appId: "1:126043684398:web:2161e9dac773df85c929bf",
  measurementId: "G-GMSQQ6CZ7R"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
