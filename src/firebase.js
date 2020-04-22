import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCbrRoStxUeQjtdz5U6oajnA48jvQ5RFbY",
    authDomain: "ideetodo.firebaseapp.com",
    databaseURL: "https://ideetodo.firebaseio.com",
    projectId: "ideetodo",
    storageBucket: "ideetodo.appspot.com",
    messagingSenderId: "829901996888",
    appId: "1:829901996888:web:cb91cc49fead2bef509b2d",
    measurementId: "G-FQ5MX7TDK5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const base = Rebase.createClass(firebase.database())


  export {firebaseConfig}

  export default base