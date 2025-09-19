
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDDXxRReoqiJyX57AqLZgrChiDEBX94_qo",
    authDomain: "mocktalk-e140b.firebaseapp.com",
    projectId: "mocktalk-e140b",
    storageBucket: "mocktalk-e140b.firebasestorage.app",
    messagingSenderId: "861476587335",
    appId: "1:861476587335:web:27ad987bc333ef4c8fee62",
    measurementId: "G-N3R582ZFH5"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);