import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUOY-mdjKXYTI42VGPxLwrUZM6CMdkgys",
  authDomain: "jocker-e3a24.firebaseapp.com",
  databaseURL: "https://jocker-e3a24.firebaseio.com",
  projectId: "jocker-e3a24",
  storageBucket: "jocker-e3a24.appspot.com",
  messagingSenderId: "204785758330",
  appId: "1:204785758330:web:a9789dad0c05cf49878bc3",
  measurementId: "G-186F9QRM2W"
};



export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
