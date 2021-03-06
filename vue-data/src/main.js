// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRoute from 'vue-router';
import App from './App';
import router from './router';
/* eslint-disable */
import iView from 'iview';
import 'iview/dist/styles/iview.css';
/* eslint-disable */

import 'animate.css/animate.css';

import * as utils from './service/utils';

Vue.config.productionTip = false;

Vue.use(VueRoute);
Vue.use(iView);
Vue.prototype.Utils = utils;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
