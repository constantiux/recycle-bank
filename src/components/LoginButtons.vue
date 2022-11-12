<template>
	<section>
		<span v-if="isLoad"> 
            <PageLoader />
		</span>
		<span v-else>
            <button
                class="
                w-full
                bg-green-500
                font-semibold
                text-gray-800
                py-3
                rounded-lg
                mt-6
                "
                v-if="$isMobile()"
                @click="handleLoginMobile"
            >
                Login with IAMSmart Mobile
            </button>
            <button
                class="
                w-full
                bg-green-500
                font-semibold
                text-gray-800
                py-3
                rounded-lg
                mt-6
                "
                v-else
                @click="handleLoginDesktop"
            >
                Login with IAMSmart Desktop
            </button>
            <button
                class="
                w-full
                bg-green-500
                font-semibold
                text-gray-800
                py-3
                rounded-lg
                mt-6
                "
                @click="handleLoginZero"
            >
                Login with Auth0
            </button>
		</span>
	</section>
</template>

<script setup>
import PageLoader from '@/components/PageLoader.vue';
import { computed } from 'vue';
import { ref, reactive } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';

const { loginWithRedirect } = useAuth0();

const props = defineProps({
	isLoad: {
		type: Boolean,
		default: false
	}
})

const isLoad = ref(false);

const handleLoginZero = () => {
  isLoad.value = true;
  loginWithRedirect({
    prompt: 'login',
    appState: {
      target: '/home',
    },
  });
};

const BASE_URL = process.env.BASE_URL || 'https://recycle-bank.vercel.app';
console.log(BASE_URL);

const handleLoginDesktop = () => {
  isLoad.value = true;
  var url =
    `https://apigw-isit.staging-eid.gov.hk/api/v1/auth/getQR?clientID=2048e738477e48d493bdf7208fb93551&responseType=code&source=App_Scheme&redirectURI=${BASE_URL}/iams&scope=eidapi_auth&lang=en-US&brokerPage=false`;
  window.location.href = url;
};

const handleLoginMobile = () => {
  isLoad.value = true;
  var url =
    `https://apigw-isit.staging-eid.gov.hk/api/v1/auth/getQR?clientID=2048e738477e48d493bdf7208fb93551&responseType=code&source=App_Scheme&redirectURI=${BASE_URL}/iams&scope=eidapi_auth&lang=en-US&brokerPage=true`;
  window.location.href = url;
};

</script>