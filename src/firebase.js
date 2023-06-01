
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyB6j6U2uqM5YNTkGcr3TduBB2XSJhlV240",
    authDomain: "netshow-77b69.firebaseapp.com",
    projectId: "netshow-77b69",
    storageBucket: "netshow-77b69.appspot.com",
    messagingSenderId: "203013984763",
    appId: "1:203013984763:web:fc128ea20a01ae81227b5e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };