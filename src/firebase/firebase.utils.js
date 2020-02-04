import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyCFtqOXkxwWImsG8EvM4R39i0R3R15qhzI",
    authDomain: "joel-db.firebaseapp.com",
    databaseURL: "https://joel-db.firebaseio.com",
    projectId: "joel-db",
    storageBucket: "joel-db.appspot.com",
    messagingSenderId: "819125428230",
    appId: "1:819125428230:web:0105a9e42dac43be8ca387",
    measurementId: "G-69SVNLRWDK"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;