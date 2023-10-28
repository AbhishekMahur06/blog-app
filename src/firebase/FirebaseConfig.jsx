import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqOpnGMxeoaPCrhUxbunRsxSrbFLKbv_s",
  authDomain: "silicon-scoops-blogs.firebaseapp.com",
  projectId: "silicon-scoops-blogs",
  storageBucket: "silicon-scoops-blogs.appspot.com",
  messagingSenderId: "475640768205",
  appId: "1:475640768205:web:7a6d988ba5c5fb11652b84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb, auth, storage };
