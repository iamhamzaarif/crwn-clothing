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

  export const createUserProfileDocument = async(userAuth, additionalData) =>{
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
    
      try{
        await userRef.set ({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      }
      catch(error){
          console.log('error creating user', error.message);
      }
    
    }
    return userRef;

  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})

  export const signInWithGoogle = ( ) => auth.signInWithPopup(provider)

  export default firebase; 