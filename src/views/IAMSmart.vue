<template>
    <div class="page-layout">
      <PageLoader />
    </div>
</template>

<script setup>
import PageLoader from '@/components/PageLoader.vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuth0 } from '@auth0/auth0-vue';
import * as dotenv from "dotenv";
dotenv.config();

//const { loginWithRedirect } = useAuth0();
//const { isAuthenticated } = useAuth0();

const crypto = require('crypto');
const CONFIG = {
  apiKey: process.env.X_API_KEY,
  hashSecret: process.env.X_HASH_SECRET
};

const hash = crypto.createHash('sha256', CONFIG.hashSecret)
                   // updating data
                   .update(CONFIG.apiKey)
                   // Encoding to be used
                   .digest('hex');

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
    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'x-api-proxy-validated': hash
      },
      body: JSON.stringify({ code: route.query.code,
                             grantType: "authorization_code" })
    };
    fetch('https://{0}/api/token'.format(process.env.BASE_URL), requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }
  else {
    router.replace({ name: 'Login' })
  }
}

</script>
