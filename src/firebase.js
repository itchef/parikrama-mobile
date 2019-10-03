import firebase from "firebase/app";
import "firebase/firestore";
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MSG_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID
} from "../env";

const config = (firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MSG_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
});

firebase.initializeApp(config);

export default firebase;
