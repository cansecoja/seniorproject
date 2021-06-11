import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBg2BATkGYsCwJLymsbidCSmA1mhIfGXso",
  authDomain: "senior-project-f667d.firebaseapp.com",
  projectId: "senior-project-f667d",
  storageBucket: "senior-project-f667d.appspot.com",
  messagingSenderId: "740103640228",
  appId: "1:740103640228:web:8aa27ea1c368a295e24231",
  measurementId: "G-TQ3TPSXNED"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };