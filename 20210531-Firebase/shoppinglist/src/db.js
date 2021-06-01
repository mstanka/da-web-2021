import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDV1Wr9QjfEDDzIxVK87KX_Zt0mp38QPEw",
    authDomain: "shoppinglist02-7dc11.firebaseapp.com",
    projectId: "shoppinglist02-7dc11",
    storageBucket: "shoppinglist02-7dc11.appspot.com",
    messagingSenderId: "535686224584",
    appId: "1:535686224584:web:6c524af7d0ea56ee6fa3fd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
