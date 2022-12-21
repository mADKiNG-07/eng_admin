import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB1JN8BlcHcSq3RGerM7nKjPPYRTamGYik",
    authDomain: "eng-admin-8e3e3.firebaseapp.com",
    projectId: "eng-admin-8e3e3",
    storageBucket: "eng-admin-8e3e3.appspot.com",
    messagingSenderId: "304485146881",
    appId: "1:304485146881:web:f681fa334050cdef35fb00"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);