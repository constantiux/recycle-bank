<template></template>

<script setup>
import { useRouter } from 'vue-router';
import { useAuth0 } from '@auth0/auth0-vue';

const { logout } = useAuth0();

logout({
    returnTo: window.location.origin,
  });
router.replace({ name: 'Login' });
</script>