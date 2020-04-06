import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config= {
    apiKey: "AIzaSyCZcMQ3YksThRfBhfS-vjzKD-ADQEqeg-4",
    authDomain: "crwn-db-27f13.firebaseapp.com",
    databaseURL: "https://crwn-db-27f13.firebaseio.com",
    projectId: "crwn-db-27f13",
    storageBucket: "crwn-db-27f13.appspot.com",
    messagingSenderId: "11304859853",
    appId: "1:11304859853:web:a87e3e0934e20661cfd184",
    measurementId: "G-G8NX0SBTZ8"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})

  export const signInWithGoogle = ( ) => auth.signInWithPopup(provider)

  export default firebase; 