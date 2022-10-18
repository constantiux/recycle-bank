<style scoped>

.input-wrapper {
	@apply flex flex-col h-20 text-gray-300;
}

input[type=text], select {
	@apply bg-secondary border border-gray-700 text-gray-300 rounded-lg h-full mt-2 text-sm px-2 py-3;
}

</style>
<template>
	<main>
		<Header title="Deposit" sub="Convert your rubbish to cash" />
		<section class="text-gray-300 mt-20">
			<h1 class="text-lg font-medium">Details</h1>
			<p class="text-xs">
				<i class="fas fa-lightbulb mr-1"></i>
				Please fill-in the item recycle deposit form below
			</p>
		</section>
		<form class="mt-8 w-full flex flex-wrap justify-between">
			<div class="input-wrapper w-5/12">
				<label>Weight</label>
				<input type="text" placeholder="in kg" />
			</div>
			<div class="input-wrapper w-5/12">
				<label>Methods</label>
				<select>
					<option>Deposit method</option>
					<option>Self-delivery</option>
					<option>Request pick-up service</option>
				</select>
			</div>
			<div class="input-wrapper mt-8 mb-3 w-full">
				<label>Choose kiosk location</label>
				<select>
					<option>None</option>
					<option>Tai Po Community Centre</option>
					<option>Prince Edward Community Centre</option>
					<option>North Point Community Centre</option>
				</select>
			</div>
			<p class="text-xs text-gray-300">
				<i class="fas fa-lightbulb mr-1"></i>
				Only for <strong>self-delivery</strong> method
			</p>
		</form>
		<section class="mt-12">
			<h1 class="font-medium text-gray-300 text-lg">Trash categories</h1>
			<TrashCategory />
			<section class="w-full mt-10">
				<button class="bg-green-600 text-gray-300 font-semibold px-3 py-2 w-full rounded-full">Submit</button>
			</section>
		</section>
	</main>
</template>
<script setup>

import Header from '@/components/Header.vue'
import TrashCategory from '@/components/TrashCategory.vue'

</script>
