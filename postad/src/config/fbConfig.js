import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDKOpUBKJqIjJTd0W6pBCE5ac9V4-fRD-Y",
    authDomain: "adposting-8a5a9.firebaseapp.com",
    databaseURL: "https://adposting-8a5a9.firebaseio.com",
    projectId: "adposting-8a5a9",
    storageBucket: "adposting-8a5a9.appspot.com",
    messagingSenderId: "37575753858",
    appId: "1:37575753858:web:58c9aa7a17b226374db49b",
    measurementId: "G-9WNZ8CW91D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;