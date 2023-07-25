import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB6LCuxkpgpChiLhr0PXGArvLT36Uj6xmo',
  authDomain: 'crwn-clothing-db-v1-a0201.firebaseapp.com',
  projectId: 'crwn-clothing-db-v1-a0201',
  storageBucket: 'crwn-clothing-db-v1-a0201.appspot.com',
  messagingSenderId: '623150777507',
  appId: '1:623150777507:web:818b31f3bb58b25ddeeb16',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

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
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user: ', error.message);
    }
  }

  return userDocRef;
};
