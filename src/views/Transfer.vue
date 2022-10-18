<template>
    <main class="text-gray-300">
        <Header title="Transfer Out" sub="Send out money to your friends" />
        <section class="mt-20">
            <h1 class="text-lg font-medium">List of beneficiary accounts</h1>
            <p class="text-xs mb-5">
				<i class="fas fa-lightbulb mr-1 text-green-500"></i>
				Please select one of the following
			</p>
            <template v-for="card in 6" :key="card">
                <List>
                    <template v-slot:start>
                        <section class="mt-2">
                            <p class="font-semibold">Jane Smith</p>
                            <small class="text-xs">Last tranfer on 12/02/2022</small>
                        </section>
                    </template>
                    <template v-slot:end>
                        <section class="flex items-center gap-3">
                         <img width="50" src="/bank.png" alt="">
                         <i class="fa fa-chevron-right"></i>
                        </section>
                    </template>
                </List>
            </template>           
        </section>
        <section class="mt-10">
            <h1 class="text-lg font-medium">Others</h1>
            <p class="text-xs mb-5">
                <i class="fas fa-lightbulb mr-1 text-green-500"></i>
                Would you like to consider other ways to use your balance?
            </p>
            <List>
                <template v-slot:start>
                    <section class="mt-2">
                        <p class="font-semibold">Withdraw cash</p>
                    </section>
                </template>
                <template v-slot:end>
                    <i class="fa fa-chevron-right mt-2"></i>
                </template>
            </List>
            <List>
                <template v-slot:start>
                    <section class="mt-2">
                        <p class="font-semibold">Exchange points</p>
                    </section>
                </template>
                <template v-slot:end>
                    <i class="fa fa-chevron-right mt-2"></i>
                </template>
            </List>
        </section>
        <HelpCenter />
    </main>
</template>

<script setup>

import Header from '@/components/Header.vue'
import List from '@/components/List.vue'
import HelpCenter from '@/components/HelpCenter.vue'

</script>
