
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const FireBaseConfig = {
  apiKey: "AIzaSyBrf1YhhZGCZ46Mn5UeUnvFbXZBHN5mEyU",
  authDomain: "test-project-c9819.firebaseapp.com",
  projectId: "test-project-c9819",
  storageBucket: "test-project-c9819.appspot.com",
  messagingSenderId: "806779956840",
  appId: "1:806779956840:web:d80305d2d36af3c84515dd"
};


const app = initializeApp(FireBaseConfig);

export const db=getFirestore(app);