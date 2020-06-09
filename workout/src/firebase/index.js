import firebase from "~/firebase";

const config = {
  apiKey: "AIzaSyC5g3IjEJb_06PruMmCYr76rQcdcyVRB_8",
  authDomain: "workout-8a59b.firebaseapp.com",
  databaseURL: "https://workout-8a59b.firebaseio.com",
  projectId: "workout-8a59b",
  storageBucket: "workout-8a59b.appspot.com",
  messagingSenderId: "277311215638",
  appId: "1:277311215638:web:4076dfdc37a35342fdfd37",
  measurementId: "G-JTV6QKXJKT",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
