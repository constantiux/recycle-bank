<style scoped>
.input-wrapper {
  @apply w-full h-16 flex items-center mb-3 rounded-lg overflow-hidden gap-2;
}

input {
  @apply text-gray-300 active:ring-1 focus:ring-1 ring-green-500 duration-300 rounded-lg w-full bg-secondary h-full px-3 focus:ring-2 active:ring-2 ring-secondary;
}
</style>

<template>
  <main>
    <section class="mt-16 text-gray-300 text-center w-10/12 mx-auto">
      <h1 class="font-semibold text-lg">Recycle Bank</h1>
      <p class="text-sm">Convert rubbish to cash</p>
    </section>

    <section class="mt-10">
      <form @submit.prevent="login" action="">
        <div class="input-wrapper">
          <input v-model="form.otp" type="text" placeholder="OTP" />
        </div>

        <section>
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
          >
            <LoadAction
              :isLoad="isLoad"
              :isSuccess="isSuccess"
              :isFail="isFail"
              action="LOGIN"
            />
          </button>
          <small class="mt-3 block text-red-600 font-medium">{{
            msgErr
          }}</small>
        </section>
      </form>
    </section>

    <section class="mt-24 text-gray-300">
      <div class="flex gap-3">
        <span
          class="bg-secondary rounded-lg grid place-items-center w-2/12 p-1"
        >
          <i class="fas fa-lightbulb text-sm"></i>
        </span>
        <p class="text-sm w-10/12">
          Don't have an account? Sign up at our
          <a href="" class="text-blue-500">offline</a>
          branch.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useUser } from '@/stores/user';
import { useRouter } from 'vue-router';
import LoadAction from '@/components/LoadAction.vue';

import auth0 from 'auth0-js';
import axios from 'axios';

const options = {
  domain: '0xdev.us.auth0.com',
  clientID: 'EEPjjpke69kSiWGOVJ5P3j1yMLOL4QGy',
  redirectUri: 'https://github-eteo45--3000.local.webcontainer.io',
  responseType: 'id_token token',
};

const webAuth = new auth0.WebAuth({
  ...options,
  responseType: 'id_token token',
});

//webAuth.crossOriginVerification();

const user = useUser();
const router = useRouter();

const form = reactive({
  otp: '',
});

const isLoad = ref(false);
const isSuccess = ref(false);
const isFail = ref(false);
const msgErr = ref('');

const login = () => {
  [isLoad.value, isFail.value, isSuccess.value, msgErr.value] = [
    true,
    false,
    false,
    '',
  ];
  setTimeout(() => {
    if (form.otp) {
      const otp = form.otp;
      const email = user.username;

      axios
        .post('https://0xdev.us.auth0.com/oauth/token', {
          client_id: 'EEPjjpke69kSiWGOVJ5P3j1yMLOL4QGy',
          username: email,
          otp: otp,
          realm: 'email',
          grant_type: 'http://auth0.com/oauth/grant-type/passwordless/otp',
        })
        .then(function (response) {
          console.log(response);
          console.log('Redirecting passwordless...');
          [isLoad.value, isSuccess.value] = [false, true];
          router.push({ name: 'Home' });
        })
        .catch(function (error) {
          console.log(error);
        });

      /*
      webAuth.passwordlessLogin(
        {
          connection: 'email',
          verificationCode: otp,
          username: email,
          onRedirecting: (done) => {
            console.log('Redirecting passwordless...');
            [isLoad.value, isSuccess.value] = [false, true];
            router.push({ name: 'Home' });
          },
        },
        (err, res) => {
          if (err) console.error(err);
          console.log(res);
        }
      );
      */
    } else {
      [isLoad.value, isFail.value, msgErr.value] = [
        false,
        true,
        'Invalid code',
      ];
    }
  }, 300);
};

const showPassword = ref(false);
</script>
