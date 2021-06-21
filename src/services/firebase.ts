import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyD_6hqJ09lmVIFb-SEzJfPhGQ6oTzqkVl8",
    authDomain: "letmeask-a8660.firebaseapp.com",
    databaseURL: "https://letmeask-a8660-default-rtdb.firebaseio.com",
    projectId: "letmeask-a8660",
    storageBucket: "letmeask-a8660.appspot.com",
    messagingSenderId: "291178474911",
    appId: "1:291178474911:web:d70766d74accfaa93521aa"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();