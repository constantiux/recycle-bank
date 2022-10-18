<template>
	 <main class="flex justify-between gap-3 mt-3">
		<template v-for="(service, x) in services" :key="x">
			<IconMenu :source="service" />
		</template>
	</main>
</template>

<script setup>

import IconMenu from '@/components/IconMenu.vue'

const services = [
	{
		name: 'Deposit',
		to: 'Deposit'
	},
	{
		name: 'Transfer',
		to: 'Transfer'
	},
	{
		name: 'Withdraw Cash',
		to: 'WithDraw'
	},
	{
		name: 'Exchange Points',
		to: 'ChangePoint'
	}
]

</script>
