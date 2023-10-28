// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAmhzH8JAzo2OLDg-IW_6rniuMZRsI6buw',
  authDomain: 'book-catelog-7dc1f.firebaseapp.com',
  projectId: 'book-catelog-7dc1f',
  storageBucket: 'book-catelog-7dc1f.appspot.com',
  messagingSenderId: '1020190499554',
  appId: '1:1020190499554:web:7647a2476de1c9af9af4bb',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
