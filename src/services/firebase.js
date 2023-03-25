import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDdg5Hch6rn5uIKwtm7lLtmmXWOkxgr1-g',
  authDomain: 'pre-school-management-297a9.firebaseapp.com',
  projectId: 'pre-school-management-297a9',
  storageBucket: 'pre-school-management-297a9.appspot.com',
  messagingSenderId: '555843975914',
  appId: '1:555843975914:web:4b5611cc9751b079bf7593',
};

firebase.initializeApp(firebaseConfig);

export {firebase};

// export const firestoreForDefaultApp = app.firestore();
