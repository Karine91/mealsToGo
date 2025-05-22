import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const login = (email: string, password: string) => {
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      // Signed up
      const user = userCredential.user;
      return user;
    }
  );
};
