import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBTbbP642TMgOfs1ajZ5V4opIiM-wlGpVg',
  authDomain: 'rawg-huynh.firebaseapp.com',
  projectId: 'rawg-huynh',
  storageBucket: 'rawg-huynh.appspot.com',
  messagingSenderId: '138751560759',
  appId: '1:138751560759:web:d779d413b47149eb08c3b2',
  measurementId: 'G-06QW2EHHC3'
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.EmailAuthProvider = app.auth.EmailAuthProvider;
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
  }
}

export default new Firebase();
