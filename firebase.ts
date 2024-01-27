import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAHcJa7Rlk80WemO2CCp4aQv5YCejr_ic",
  authDomain: "dropbox-clone-2064d.firebaseapp.com",
  projectId: "dropbox-clone-2064d",
  storageBucket: "dropbox-clone-2064d.appspot.com",
  messagingSenderId: "1038712222487",
  appId: "1:1038712222487:web:3d7e6e234990f58cb43d52",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const functions = getFunctions(app);
const storage = getStorage(app);

export { db, storage };
