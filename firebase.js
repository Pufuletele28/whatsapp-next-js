import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtSrDiAv6W5yMRvzOmzRJyuk0bvoH4FLc",
    authDomain: "whatsapp---nextjs.firebaseapp.com",
    projectId: "whatsapp---nextjs",
    storageBucket: "whatsapp---nextjs.appspot.com",
    messagingSenderId: "191537989642",
    appId: "1:191537989642:web:1f981cdb34ca20642df7f3",
    measurementId: "G-1SBQ92ZDN2"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};