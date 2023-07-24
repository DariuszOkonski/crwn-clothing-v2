import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

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
