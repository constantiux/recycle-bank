<template>
  <main class="text-gray-300">
    <Header
      title="Withdraw Cash"
      sub="Transfer your balance to your bank account"
    />
    <section class="mt-20">
      <h1 class="text-lg font-medium">Choose method</h1>
      <p class="text-xs mb-5">
        <i class="fas fa-lightbulb mr-1 text-green-500"></i>
        Please select one of the withdrawal channels
      </p>
    </section>
    <section class="mt-6">
      <h1 class="text-sm font-medium mb-4 text-green-500">Bank Transfer</h1>
      <template v-for="card in 4" :key="card">
        <List>
          <template v-slot:start>
            <section class="mt-2">
              <img src="/bank.png" width="80" alt="" />
            </section>
          </template>
          <template v-slot:end>
            <section class="mt-2">
              <i class="fa fa-chevron-right"></i>
            </section>
          </template>
        </List>
      </template>
    </section>

    <section class="mt-6">
      <h1 class="text-sm text-green-500 font-medium mb-4">Others</h1>
      <template v-for="card in 4" :key="card">
        <List>
          <template v-slot:start>
            <section class="mt-2">
              <img src="/dana.png" width="80" alt="" />
            </section>
          </template>
          <template v-slot:end>
            <section class="mt-2">
              <i class="fa fa-chevron-right"></i>
            </section>
          </template>
        </List>
      </template>
    </section>
    <HelpCenter />
  </main>
</template>

<script setup>
import Header from '@/components/Header.vue';
import List from '@/components/List.vue';
import HelpCenter from '@/components/HelpCenter.vue';

//window.history.forward(1);
</script>
