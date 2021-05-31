import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB39jr2rpJUBA4o6t7A461U3xbxEOgAUqA",
  authDomain: "e-commerce-75298.firebaseapp.com",
  projectId: "e-commerce-75298",
  storageBucket: "e-commerce-75298.appspot.com",
  messagingSenderId: "551432276718",
  appId: "1:551432276718:web:85d22869f1e8d8fc0601ff",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
