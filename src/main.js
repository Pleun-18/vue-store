import { createApp} from 'vue'
import App from './App.vue'
import router from './router'

//Without the braces it will cause a state error
import { store } from './store'

// Vue.config.productionTip = false;

const app = createApp(App)
  .use(store)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});