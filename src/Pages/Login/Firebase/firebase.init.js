import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';
const initFirebase = () => {
    return (
        initializeApp(firebaseConfig)
    );
};

export default initFirebase;