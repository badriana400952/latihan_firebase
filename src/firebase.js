import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getStorage } from '@firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAMOEH49df13C4Ua-D8Hcj_rNEXCWQr90",
    authDomain: "latihan-firebase-aad3e.firebaseapp.com",
    projectId: "latihan-firebase-aad3e",
    storageBucket: "latihan-firebase-aad3e.appspot.com",
    messagingSenderId: "241334826205",
    appId: "1:241334826205:web:f06733ea7772a794501734"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const storage = getStorage(app)