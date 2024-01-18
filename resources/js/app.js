/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

import router from "./router";
import "./axios";
import store from "./vuex";
// import './globalpermissions.js'; 
import GlobalFunctionsMixin from './globalpermissions';
import Toasted from "vue-toasted";
import VueToastr from "vue-toastr";
import Chart from "chart.js";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { HasError } from 'vform/src/components/bootstrap5'
import i18n from './utils/i18n'
import vSelect from 'vue-select'
import MetaCtrlEnter from 'meta-ctrl-enter';

window.Vue = require("vue").default;
Vue.use(Toasted);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(MetaCtrlEnter);
Vue.use(VueToastr,{
    defaultStyle: { "background-color": "green" },
})
Vue.component(HasError.name, HasError)
Vue.component('v-select', vSelect)
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component("app", require("./App.vue").default);
Vue.mixin(GlobalFunctionsMixin);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    i18n,
    router,
    store,
    el: "#app"
});
