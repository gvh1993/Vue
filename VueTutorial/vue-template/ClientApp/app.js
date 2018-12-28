import './css/site.scss';
import 'bootstrap';

import Vue from 'vue';
import axios from 'axios'
import router from './router/index';
import store from './store';
import { sync } from 'vuex-router-sync'
import App from './components/app';
import { FontAwesomeIcon } from './icons';


Vue.component('icon', FontAwesomeIcon)

Vue.prototype.$http = axios

sync(store, router)

console.log("Check it!")

const app = new Vue({
    store,
    router,
    ...App
}).$mount('#app-root');

export {
    app,
    router,
    store
}