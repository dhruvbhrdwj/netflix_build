import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD2W4LpjptVbivzk6_mL84AViXyL4OOyz0",
  authDomain: "netflix-build-600e9.firebaseapp.com",
  projectId: "netflix-build-600e9",
  storageBucket: "netflix-build-600e9.appspot.com",
  messagingSenderId: "1080177209205",
  appId: "1:1080177209205:web:a7a6fe68876ed498c5ad3c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export default { db };
export { auth };