import { defineStore} from 'pinia'

export const useNotifications = defineStore('notifications', {
    state() {
        return {
            lists: [
                {
                title: 'You earned additional 50 points',
                timestamp: '20/03/2022'
                },
                {
                title: 'You earned additional 50 points',
                timestamp: '20/03/2022'
                },
                {
                title: 'You earned additional 50 points',
                timestamp: '20/03/2022'
                },
                {
                title: 'You earned additional 50 points',
                timestamp: '20/03/2022'
                }
            ]
        }
    }
})