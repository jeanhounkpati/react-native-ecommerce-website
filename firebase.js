// import  firebase from 'firebase';
import firebase from 'firebase/app';
require('firebase/auth')
import 'firebase/firestore'
// import firestore from '@react-native-firebase/firestore';

// import auth from '@react-native-firebase/auth';

  const firebaseConfig ={
    apiKey: "AIzaSyCSxq-hrEC4cs6edl72Som9l3XErrN7yJ8",
    authDomain: "ecommerce2-e4775.firebaseapp.com",
    projectId: "ecommerce2-e4775",
    storageBucket: "ecommerce2-e4775.appspot.com",
    messagingSenderId: "505996820475",
    appId: "1:505996820475:web:0d283a396c071d791e555e"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  }
export default firebase;