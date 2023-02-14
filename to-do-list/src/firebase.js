import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = {
  apiKey: "AIzaSyDLlJucrazLfK_5Si-bSBJpCD0GJT-08NU",
  authDomain: "react-todo-list-66968.firebaseapp.com",
  projectId: "react-todo-list-66968",
  storageBucket: "react-todo-list-66968.appspot.com",
  messagingSenderId: "884622703804",
  appId: "1:884622703804:web:5a9d947eb6f81a231d64b9",
  measurementId: "G-XQ9W5NP9XZ",
};

const app = initializeApp(firebaseApp);
const db = getFirestore(app);

export { db };
