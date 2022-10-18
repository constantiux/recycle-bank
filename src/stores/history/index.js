import { defineStore } from 'pinia';

export const useHistory = defineStore('history', {
  state() {
    return {
      deposit: [
        {
          title: 'Cardboard',
          description: '3KG 150 HKD',
          thumbnail: '/kardus.png',
        },
        {
          title: 'Plastics',
          description: '1KG 45 HKD',
          thumbnail: '/plastik.png',
        },
        {
          title: 'Glass Bottles',
          description: '3KG 115 HKD',
          thumbnail: '/botol.png',
        },
        {
          title: 'Cans',
          description: '1KG 60 HKD',
          thumbnail: '/kaleng.png',
        },
      ],
      carts: [
        {
          title: 'Recycled Shopping Bag',
          amount: 1,
          price: 75,
          timestamp: '20/03/2022',
        },
        {
          title: 'Recycled Shopping Bag',
          amount: 1,
          price: 75,
          timestamp: '20/03/2022',
        },
        {
          title: 'Recycled Shopping Bag',
          amount: 3,
          price: 75,
          timestamp: '20/03/2022',
        },
        {
          title: 'Recycled Shopping Bag',
          amount: 1,
          price: 75,
          timestamp: '20/03/2022',
        },
        {
          title: 'Recycled Shopping Bag',
          amount: 1,
          price: 75,
          timestamp: '20/03/2022',
        },
        {
          title: 'Recycled Shopping Bag',
          amount: 3,
          price: 75,
          timestamp: '20/03/2022',
        },
        {
          title: 'Recycled Shopping Bag',
          amount: 1,
          price: 75,
          timestamp: '20/03/2022',
        },
        {
          title: 'Recycled Shopping Bag',
          amount: 1,
          price: 75,
          timestamp: '20/03/2022',
        },
        {
          title: 'Recycled Shopping Bag',
          amount: 2,
          price: 75,
          timestamp: '20/03/2022',
        },
        {
          title: 'Recycled Shopping Bag',
          amount: 1,
          price: 75,
          timestamp: '20/03/2022',
        },
      ],
    };
  },
});
