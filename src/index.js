import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
    apiKey: "AIzaSyARUAYNgHkHrfWAPtwcdW5ObLMrgSYe3cE",
    authDomain: "pwasocial-a6961.firebaseapp.com",
    databaseURL: "https://pwasocial-a6961.firebaseio.com",
    projectId: "pwasocial-a6961",
    storageBucket: "pwasocial-a6961.appspot.com",
    messagingSenderId: "23664168545",
    appId: "1:23664168545:web:c306f0a031e47021b9a420"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
