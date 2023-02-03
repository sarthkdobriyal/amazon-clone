import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDYJlXRP-xnlR16D7nvLRcRNqTNgxZ4jBI",
    authDomain: "amzn-clone-2efcb.firebaseapp.com",
    projectId: "amzn-clone-2efcb",
    storageBucket: "amzn-clone-2efcb.appspot.com",
    messagingSenderId: "882680982467",
    appId: "1:882680982467:web:62570d1a5915aac1f26b76"
  };


  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);

  export const db = getFirestore(app);