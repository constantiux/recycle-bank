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

console.log("loginredir");
console.log(isAuthenticated._value);
console.log(route.query);

if (isAuthenticated._value) {
  router.replace({ name: 'Home' });
}

if (route.query.method) {
    /*
    if (route.query.method === 'iamsmartd') {
        sleep(5000).then(() => {
            console.log("Sleep completed successfully");
        
            var url =
                'https://apigw-isit.staging-eid.gov.hk/api/v1/auth/getQR?clientID=2048e738477e48d493bdf7208fb93551&responseType=code&source=App_Scheme&redirectURI=https://skillful-nettle-crow.glitch.me/callback&scope=eidapi_auth&lang=en-US&brokerPage=false';
            window.location.href = url;
        });
    }
    else if (route.query.method === 'iamsmartm') {
        var url =
            'https://apigw-isit.staging-eid.gov.hk/api/v1/auth/getQR?clientID=2048e738477e48d493bdf7208fb93551&responseType=code&source=App_Scheme&redirectURI=https://skillful-nettle-crow.glitch.me/callback&scope=eidapi_auth&lang=en-US&brokerPage=true';
        window.location.href = url;
    }
    else if (route.query.method === 'auth0') {
        loginWithRedirect({
            prompt: 'login',
            appState: {
            target: '/home',
            },
        });
    }
    */
    router.replace({ name: 'Login', query: { method: route.query.method} })
}


//router.replace({ name: 'Login' })

</script>