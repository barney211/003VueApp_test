// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入使用flexible.js
import './base/js/base.js'
//引入MintUI
/*
import "mint-ui/lib/style.css";
import Mint from 'mint-ui';
Vue.use(Mint);
*/
import "mint-ui/lib/style.css";
import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
