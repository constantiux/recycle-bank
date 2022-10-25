<template>
  <main class="app">
    <div v-if="isLoading" class="page-layout">
      <PageLoader />
    </div>
    <router-view v-else></router-view>
  </main>
  <BottomBar v-if="routeName !== 'Login'" />
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import BottomBar from '@/components/BottomBar.vue';
import { computed } from 'vue';

import PageLoader from '@/components/PageLoader.vue';

import { useAuth0 } from '@auth0/auth0-vue';

const { isLoading } = useAuth0();

const route = useRoute();
const router = useRouter();
const routeName = computed(() => route.name);

/*
const backNavigate = () => {
  setTimeout(() => {
    router.go(-1);
  }, 300);
};
*/
</script>

<style scoped>
.app {
  @apply min-h-screen py-5 px-10 pb-20 w-full md:w-6/12 lg:w-5/12 md:mx-auto xl:w-4/12 bg-primary;
}
</style>
