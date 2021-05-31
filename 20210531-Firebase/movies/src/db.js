// https://firebase.google.com/docs/firestore

import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC5XWHABvCplX5l06GyCk0P5ZBiCw17oRk',
  authDomain: 'movies-3f781.firebaseapp.com',
  projectId: 'movies-3f781',
  storageBucket: 'movies-3f781.appspot.com',
  messagingSenderId: '921537803494',
  appId: '1:921537803494:web:e0c9f63814da1e78c13727',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
