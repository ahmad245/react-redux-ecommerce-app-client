import * as firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBG8Ajf9cSTJeGBvEJqInzQLdilGmsICxw",
    authDomain: "ecommerce-99015.firebaseapp.com",
    projectId: "ecommerce-99015",
    storageBucket: "ecommerce-99015.appspot.com",
    messagingSenderId: "531564559913",
    appId: "1:531564559913:web:9f29e91a24471f6a866638"
  };
  // Initialize Firebase
  firebase.default.initializeApp(firebaseConfig);
  export const auth=firebase.default.auth()
  export const googleAuthProvider=new firebase.default.auth.GoogleAuthProvider()