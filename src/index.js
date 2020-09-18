import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0-6Hfs-mPBB5Xyl3GyZ3tPPzDfSdEhaI",
  authDomain: "artscape-97160.firebaseapp.com",
  databaseURL: "https://artscape-97160.firebaseio.com",
  projectId: "artscape-97160",
  storageBucket: "artscape-97160.appspot.com",
  messagingSenderId: "706465248594",
  appId: "1:706465248594:web:bfae4b511225986cdd768b",
  measurementId: "G-58YLW8N1N8"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
