<template>
    <div class="page-layout">
      <PageLoader />
    </div>
</template>

<script setup>
import PageLoader from '@/components/PageLoader.vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuth0 } from '@auth0/auth0-vue';
const { loginWithRedirect } = useAuth0();
const { isAuthenticated } = useAuth0();

const router = useRouter();
const route = useRoute();

console.log(isAuthenticated._value);
console.log(route.query);

if (isAuthenticated._value) {
  router.replace({ name: 'Home' });
}
else{
  if (route.query.code) {
    loginWithRedirect({
      prompt: 'login',
      appState: {
        target: '/home',
      },
    });
  }
  else {
    router.replace({ name: 'Login' })
  }
}

</script>
