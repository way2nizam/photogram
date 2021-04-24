import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBGefe5OwjSMGTP8ok6uVuj3FfmYzkDW1k",
    authDomain: "nizam-firegram.firebaseapp.com",
    projectId: "nizam-firegram",
    storageBucket: "nizam-firegram.appspot.com",
    messagingSenderId: "739198094870",
    appId: "1:739198094870:web:b597ee898a5acdbbc26f37"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };