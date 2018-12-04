import './css/site.scss';
import 'bootstrap';
import Vue from 'vue';
import router from './router/index';
import App from './components/app';


new Vue({
    el: '#app-root',
    router,
    ...App
});