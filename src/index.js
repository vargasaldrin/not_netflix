import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

const config = {
    apiKey: "AIzaSyBoPqAyGW_Qh2HOLVocWZ8g5wJ_SkB6zvM",
    authDomain: "not-netflix-b36ef.firebaseapp.com",
    databaseURL: "https://not-netflix-b36ef.firebaseio.com",
    projectId: "not-netflix-b36ef",
    storageBucket: "not-netflix-b36ef.appspot.com",
    messagingSenderId: "270966494602",
    appId: "1:270966494602:web:00e64849e0022dc58c2473"
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);
