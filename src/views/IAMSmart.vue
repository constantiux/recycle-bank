<template>
    <div class="page-layout">
      <PageLoader />
    </div>
</template>

<script setup>
import PageLoader from '@/components/PageLoader.vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuth0 } from '@auth0/auth0-vue';

//const { loginWithRedirect } = useAuth0();
//const { isAuthenticated } = useAuth0();

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
  return hashHex;
}

const router = useRouter();
const route = useRoute();

//console.log(isAuthenticated._value);
//console.log(route.query);

//if (isAuthenticated._value)
if (false) {
  router.replace({ name: 'Home' });
}
else{
  if (route.query.code) {
    /*
    loginWithRedirect({
      prompt: 'login',
      appState: {
        target: '/home',
      },
    });
    */
    const timestamp = new Date().getTime().toString();
    const raw = import.meta.env.VITE_X_API_KEY + timestamp;
    digestMessage(raw)
    .then((digestHex) => {
    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'x-api-proxy-validated': digestHex,
        'x-api-proxy-timestamp': timestamp
      },
      body: JSON.stringify({ code: route.query.code,
                             grantType: "authorization_code" })
    };
    fetch(import.meta.env.VITE_BASE_URL + '/api/token', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
    });
  }
  else {
    router.replace({ name: 'Login' })
  }
}

</script>
