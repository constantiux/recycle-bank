<style scoped>
.title {
  @apply font-semibold text-success text-lg;
}
</style>

<template>
  <main class="pt-20">
    <HeaderHome />
    <BalanceCard />
    <section class="mt-12">
      <h1 class="title">Services</h1>
      <Services />
    </section>
    <section class="mt-12">
      <h1 class="title">Today's deals</h1>
      <Promo />
    </section>
    <section class="mt-6">
      <h1 class="title">Deposit History</h1>
      <DepositHistory />
    </section>
  </main>
</template>

<script setup>
import HeaderHome from '@/components/HeaderHome.vue';
import BalanceCard from '@/components/BalanceCard.vue';
import Services from '@/components/Services.vue';
import Promo from '@/components/Promo.vue';
import DepositHistory from '@/components/DepositHistory.vue';

import { useRouter } from 'vue-router';
import { useAuth0 } from '@auth0/auth0-vue';
const { isAuthenticated } = useAuth0();

console.log(isAuthenticated._value);
const router = useRouter();

if (!(isAuthenticated._value)) {
  router.replace({ name: 'Login' });
}

//window.history.forward(1);
</script>
