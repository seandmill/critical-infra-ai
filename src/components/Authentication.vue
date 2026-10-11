<script setup>
import logoImg from '../assets/critical_infra_ai_logo.jpeg';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { useRouter } from 'vue-router';

const router = useRouter();

const app = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
});

const auth = getAuth();
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    // Redirect to the dashboard
    router.push('/dashboard');
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    // Redirect to the main page
    router.push('/');
  });
}

</script>

<template>
    <section id="center">
        <img :src="logoImg" class="base" width="600" height="600" alt="Critical Infra AI Logo" />
        <h2>Sign in to your account</h2>
        <button class="button" @click="signInWithGoogle">Sign in with Google</button>
    </section>
</template>