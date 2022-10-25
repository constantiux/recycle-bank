import { createApp } from 'vue';
import { createAuth0 } from '@auth0/auth0-vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from '@/router';
import '@/styles/index.css';
import '@/styles/app.css';

const app = createApp(App);

app
  .use(router)
  .use(createPinia())
  .use(
    createAuth0({
      domain: import.meta.env.VITE_AUTH0_DOMAIN || '0xdev.us.auth0.com',
      client_id:
        import.meta.env.VITE_AUTH0_CLIENT_ID ||
        'EEPjjpke69kSiWGOVJ5P3j1yMLOL4QGy',
      redirect_uri:
        import.meta.env.VITE_AUTH0_CALLBACK_URL ||
        'https://github-eteo45--3000.local.webcontainer.io',
    })
  )
  .mount('#app');
