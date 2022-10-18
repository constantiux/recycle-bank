import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
	state() {
		return {
			fullname: 'John Doe',
			password: 'password',
			username: 'user',
			highlights: [
				{
					title: 'Total deposits',
					value: 192,
					prefix: 'KG'
				},
				{
					title: 'Earned points',
					value: 1888,
					prefix: 'pts'
				},
				{
					title: 'Total purchased',
					value: 88,
					prefix: 'items'
				}
			]
		}
	},
	actions: {
		login( payload ) {
			const { username, password } = payload
			if ( username === this.username && password === this.password ) return true
			else return false
		}
	}
})
