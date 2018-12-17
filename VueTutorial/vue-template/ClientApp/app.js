import './css/site.scss';
import 'bootstrap';
import Vue from 'vue';
import router from './router/index';
import store from './store';
import App from './components/app';
import { sync } from 'vuex-router-sync'
import { FontAwesomeIcon } from './icons';

Vue.component('icon', FontAwesomeIcon)

sync(store, router)

new Vue({
    el: "#app-root",
    router,
    ...App
});