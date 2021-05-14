import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/analytics';
import { firebaseConfig } from 'config';

// Initialize firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Initialize store
const storage = firebase.storage();

// Initialize firestore
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, firestore, timestamp };
