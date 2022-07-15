import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import { createAuth0 } from '@auth0/auth0-vue';

loadFonts();

const app = createApp(App)
  .use(vuetify)

app.use(
  createAuth0({
    domain: 'dev-jb4f9d30.us.auth0.com',
    client_id: 'va1B1DbhT9d8nMIt1zhmjdg4qTjJzp8b',
    redirect_uri: window.location.origin,
    audience: 'https://dev-jb4f9d30.us.auth0.com/api/v2/'
  })
);

app.mount('#app');
