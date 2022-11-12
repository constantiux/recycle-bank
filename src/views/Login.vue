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
      <LoginButtons />
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
import PageLoader from '@/components/PageLoader.vue';
import { ref, reactive } from 'vue';
import { useUser } from '@/stores/user';
import { useRouter, useRoute } from 'vue-router';
import LoginButtons from '@/components/LoginButtons.vue';

import { useAuth0 } from '@auth0/auth0-vue';
const { loginWithRedirect } = useAuth0();
const { isAuthenticated } = useAuth0();

const user = useUser();
const router = useRouter();
const route = useRoute();

console.log(isAuthenticated._value);
console.log(route.query);

if (isAuthenticated._value) {
  router.replace({ name: 'Home' });
}

</script>

<style scoped>
.input-wrapper {
  @apply w-full h-16 flex items-center mb-3 rounded-lg overflow-hidden gap-2;
}

input {
  @apply text-gray-300 active:ring-1 focus:ring-1 ring-green-500 duration-300 rounded-lg w-full bg-secondary h-full px-3 focus:ring-2 active:ring-2 ring-secondary;
}
</style>