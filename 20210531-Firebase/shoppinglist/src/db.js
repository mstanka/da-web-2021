import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyA6lfMnc3ubpv22zp4kc-HzfljXIGjcIk8',
  authDomain: 'shoppinglist-9e9cd.firebaseapp.com',
  projectId: 'shoppinglist-9e9cd',
  storageBucket: 'shoppinglist-9e9cd.appspot.com',
  messagingSenderId: '992263979750',
  appId: '1:992263979750:web:74309d8e7ca4d58691f127',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();