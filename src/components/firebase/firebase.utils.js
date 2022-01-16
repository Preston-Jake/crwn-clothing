import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyDclfPBX4rS9t4iQGHmg3RbCUFwdEC_zgQ',
  authDomain: 'crwn-db-9081d.firebaseapp.com',
  projectId: 'crwn-db-9081d',
  storageBucket: 'crwn-db-9081d.appspot.com',
  messagingSenderId: '420380514308',
  appId: '1:420380514308:web:9d3fa61a38b9339cc8fd51',
  measurementId: 'G-FRSEYSGKC0',
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
