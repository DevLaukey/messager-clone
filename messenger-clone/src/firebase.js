import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBDHVmPI0ramGHycmJfPpkr1-T-y7c_QHM",
    authDomain: "messenger-clone-70550.firebaseapp.com",
    databaseURL: "https://messenger-clone-70550.firebaseio.com",
    projectId: "messenger-clone-70550",
    storageBucket: "messenger-clone-70550.appspot.com",
    messagingSenderId: "440580210113",
    appId: "1:440580210113:web:4610580c80738f33758340",
    measurementId: "G-1N8H9LHR1T"
});

const db = firebaseApp.firestore();


export default db;