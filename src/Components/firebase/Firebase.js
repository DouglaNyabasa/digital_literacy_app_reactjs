// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDN8pvS71Fn9ujmmXzK-PX4QlXWdp4j90",
  authDomain: "digital-literacy-84324.firebaseapp.com",
  projectId: "digital-literacy-84324",
  storageBucket: "digital-literacy-84324.appspot.com",
  messagingSenderId: "987300852825",
  appId: "1:987300852825:web:8240770d60d0a8d65ead48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export const db=getFirestore(app);


export { auth }; 