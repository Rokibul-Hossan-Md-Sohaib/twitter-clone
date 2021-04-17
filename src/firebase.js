import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL-wrubQQBMllMtUZLBOaTg0Yi4vj6l14",
  authDomain: "twitter-clone-927c8.firebaseapp.com",
  projectId: "twitter-clone-927c8",
  storageBucket: "twitter-clone-927c8.appspot.com",
  messagingSenderId: "360031779251",
  appId: "1:360031779251:web:b6eb65df3941f03ea573c6",
  measurementId: "G-F846JGTD6B"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;