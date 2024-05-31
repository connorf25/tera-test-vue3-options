import { createApp } from 'vue'
import App from './App.vue'
let app = createApp(App);

// $tera service
import TeraFy from '@iebh/tera-fy';
import TerafyVue from '@iebh/tera-fy/plugins/vue3';
let terafy = new TeraFy()
  .set('devMode', true)
  .setIfDev('siteUrl', null)
  .use(TerafyVue) // Add the Vue plugin

terafy.init(); // Initialize everything

app.use(terafy.vuePlugin({
  globalName: '$tera', // Install as vm.$tera into every component
}));

app.mount('#app')
