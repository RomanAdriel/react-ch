import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyC0EpZlDOmASaMyOnW0p7xH1eiOKxYbe6s",

  authDomain: "roman-react-ch.firebaseapp.com",

  projectId: "roman-react-ch",

  storageBucket: "roman-react-ch.appspot.com",

  messagingSenderId: "950368777431",

  appId: "1:950368777431:web:cd18ac9b507745dd7eac92"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const dbFirestore = getFirestore(app)
export const fbCollection = collection(dbFirestore, "products")