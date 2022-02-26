import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBY6slPSqANXSCvH2DZb4oysqn6c8tC-B4",
  authDomain: "twitter-clone-5b967.firebaseapp.com",
  projectId: "twitter-clone-5b967",
  storageBucket: "twitter-clone-5b967.appspot.com",
  messagingSenderId: "296420896153",
  appId: "1:296420896153:web:1530ac3dace4234a4c3708",
  measurementId: "G-GSDRN8076M"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

export  default db;
