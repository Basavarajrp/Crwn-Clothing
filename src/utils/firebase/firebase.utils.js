import { initializeApp } from "firebase/app"
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider 
} from "firebase/auth"

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBNxrcsiB-68_yFDXAoLwRl0wmnurg-5Xo",
    authDomain: "crwn-clothing-db-4db2f.firebaseapp.com",
    projectId: "crwn-clothing-db-4db2f",
    storageBucket: "crwn-clothing-db-4db2f.appspot.com",
    messagingSenderId: "355458187938",
    appId: "1:355458187938:web:1aff8db7a7c1d78677cdfb"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {

            await setDoc(userDocRef, {
                displayName, 
                email, 
                createdAt
            });
            
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef;

}
