import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBSJemdICvwmrBQXp4e4RU3ogBwhUQVZac",
  authDomain: "netflix-adminapp.firebaseapp.com",
  projectId: "netflix-adminapp",
  storageBucket: "netflix-adminapp.appspot.com",
  messagingSenderId: "648875720008",
  appId: "1:648875720008:web:9c90f38f32115a9f2c477d",
  measurementId: "G-G83P5ZF2FK",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
