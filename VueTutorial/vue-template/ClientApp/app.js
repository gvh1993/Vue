import './css/site.scss';
import 'bootstrap';
import Vue from 'vue';
import router from './router/index';
import store from './store';
import { sync } from 'vuex-router-sync'
import App from './components/app';
import { FontAwesomeIcon } from './icons';

Vue.component('icon', FontAwesomeIcon)

sync(store, router)

const app = new Vue({
    store,
    router,
    ...App
}).$mount('#app-root');