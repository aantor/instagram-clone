// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAtdZHMh94WhWICZZYrizEKP9OVXXK9gZ0',
  authDomain: 'instagram-clone-19d24.firebaseapp.com',
  projectId: 'instagram-clone-19d24',
  storageBucket: 'instagram-clone-19d24.appspot.com',
  messagingSenderId: '631492750223',
  appId: '1:631492750223:web:76d5242b021f84e2c5b9fa',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
