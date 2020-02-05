import firebase from "firebase";
const config = {
   apiKey: "AIzaSyCS3aKXKT958hzMWbz5ViJypllePcEWzO0",
   authDomain: "homestay-app-d9822.firebaseapp.com",
   databaseURL: "https://homestay-app-d9822.firebaseio.com",
   projectId: "homestay-app-d9822",
   storageBucket: "homestay-app-d9822.appspot.com",
   messagingSenderId: "493644254640",
   appId: "1:493644254640:web:129cf589d3f76df98f1a75",
   measurementId: "G-74F38XL27P"
 };
 firebase.initializeApp(config);
 export const provider = new firebase.auth.GoogleAuthProvider();
 export const auth = firebase.auth();
 export default firebase;
 var database = firebase.database();
