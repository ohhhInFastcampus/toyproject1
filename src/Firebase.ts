import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: String(import.meta.env.REACT_APP_API_KEY),
    authDomain: String(import.meta.env.REACT_APP_AUTH_DOMAIN),
    projectId: String(import.meta.env.REACT_APP_PROJECT_ID),
    storageBucket: String(import.meta.env.REACT_APP_STORE_BUCKET),
    messagingSenderId: String(import.meta.env.REACT_APP_MESSAGING_SENDER_ID),
    appId: String(import.meta.env.REACT_APP_ID),
    measurementId: String(import.meta.env.REACT_MEASUREMENT_ID),
};


const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db}