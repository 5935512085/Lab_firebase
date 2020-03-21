import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import config from './config'  // new
import firebase from 'firebase/app'  // new
import 'firebase/firestore' // new
// new function from line 10 - 16
if(firebase.apps.length === 0)
    firebase.initializeApp(config)

export const firestore = firebase.firestore()

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
