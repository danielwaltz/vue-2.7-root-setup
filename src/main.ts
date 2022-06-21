import Vue, { provide } from 'vue'
import Router from 'vue-router';
import App from '@/App.vue'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: () => import('@/views/Home.vue')
  }]
});

new Vue({
  router,
  setup() {
    provide('test', 'value')
  },
  render: (h) => h(App)
}).$mount('#app')
