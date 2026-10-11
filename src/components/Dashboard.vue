<script setup>
import logoImg from '../assets/critical_infra_ai_logo.jpeg';
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'vue-router';

const router = useRouter();

const auth = getAuth();
const user = auth.currentUser;

if (!user) {
    router.push('/');
}

const signOutUser = () => {
    signOut(auth).then(() => {
        router.push('/');
    }).catch((error) => {
        console.error(error);
    });
}
</script>

<template>
    <section id="center">
        <img :src="logoImg" class="base" width="600" height="600" alt="Critical Infra AI Logo" />
        <h2>Dashboard</h2>
        <button @click="signOutUser">Sign Out</button>
    </section>
</template>