import { defineStore } from 'pinia'

export const useBalance = defineStore('balance', {
	state() {
		return {
			current: 12888,
			points: 800,
			trend: {
				title: 'up',
				percent: 14.7,
				prefix: '%',
				value: 190
			}
		}
	}
})
