<style scoped>
.input-wrapper {
  @apply w-full h-16 flex items-center mb-3 rounded-lg overflow-hidden gap-2;
}

input {
  @apply text-gray-300 active:ring-1 focus:ring-1 ring-green-500 duration-300 rounded-lg w-full bg-secondary h-full px-3 focus:ring-2 active:ring-2 ring-secondary;
}
</style>

<template v-if="!isAuthenticated">
  <main>
    <section class="mt-20">
      <div class="w-10/12 mx-auto flex flex-col items-center text-gray-300">
        <img
          class="rounded-full border-0 border-gray-500"
          width="150"
          src="/app-logo.png"
        />
      </div>
    </section>

    <section class="mt-16 text-gray-300 text-center w-10/12 mx-auto">
      <h1 class="font-bold text-lg">Recycle Bank</h1>
      <p class="text-sm">Convert rubbish to cash</p>
    </section>

    <section class="mt-10">
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
        @click="handleLogin"
      >
        Log in
      </button>
      <!--
      <form @submit.prevent="login" action="">
        
        <div class="input-wrapper">
          <input v-model="form.username" type="text" placeholder="Username" />
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
      -->
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
//import LoadAction from '@/components/LoadAction.vue';

//import auth0 from 'auth0-js';
import { useAuth0 } from '@auth0/auth0-vue';
const { loginWithRedirect } = useAuth0();
const { isAuthenticated } = useAuth0();

/*
const options = {
  domain: '***.auth0.com',
  clientID: '***',
  redirectUri: 'https://***',
  responseType: 'id_token token',
};

const webAuth = new auth0.WebAuth({
  ...options,
  responseType: 'id_token token',
});

*/

const user = useUser();
const router = useRouter();

console.log(isAuthenticated._value);

if (isAuthenticated._value) {
  router.replace({ name: 'Home' });
}

const form = reactive({
  username: '',
});

const isLoad = ref(false);
const isSuccess = ref(false);
const isFail = ref(false);
const msgErr = ref('');

const handleLogin = () => {
  loginWithRedirect({
    prompt: 'login',
    appState: {
      target: '/home',
    },
  });
};

/*
const login = () => {
  [isLoad.value, isFail.value, isSuccess.value, msgErr.value] = [
    true,
    false,
    false,
    '',
  ];
  setTimeout(() => {
    if (form.username) {
      const email = form.username;
      

      //=====

      webAuth.passwordlessStart(
        {
          connection: 'email',
          send: 'code',
          email,
        },
        (err, result) => {
          if (err) {
            [isLoad.value, isFail.value, msgErr.value] = [false, true, 'Wrong email'];
            return console.error(err);
          }
          console.log(result);
          [isLoad.value, isSuccess.value] = [false, true];
          user.storeemail(email);
          router.push({ name: 'LoginOTP' });
        }
      );
      
      //=====

      loginWithRedirect({
        prompt: 'login',
        appState: {
          target: '/home',
        },
      });
    } else {
      [isLoad.value, isFail.value, msgErr.value] = [false, true, 'Wrong email'];
    }
  }, 300);
};

const showPassword = ref(false);

*/
</script>
