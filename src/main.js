import M from 'materialize-css/dist/js/materialize.min';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'materialize-css/dist/css/materialize.min.css';

Vue.config.productionTip = false;

const STYLE_WARNING_ERROR_HANDLER = {
  'background-color': 'black',
  'font-size': '12px',
  padding: '5px 5px 6px 5px',
};

Vue.config.warnHandler = (err) => {
  STYLE_WARNING_ERROR_HANDLER.color = '#cfaf04';
  const style = Object.entries(STYLE_WARNING_ERROR_HANDLER).map(data => `${data[0]}:${data[1]}`).join(';');
  console.log(`%c[WARNING]: ${err || err.message}`, style);
};

Vue.config.errorHandler = (err) => {
  STYLE_WARNING_ERROR_HANDLER.color = '#ff6666';
  const style = Object.entries(STYLE_WARNING_ERROR_HANDLER).map(data => `${data[0]}:${data[1]}`).join(';');
  console.log(`%c[ERROR]: ${err || err.message}`, style);
};

const $M = {};
$M.install = (V) => {
  const VueLocal = V;
  VueLocal.prototype.$M = M;
};

Vue.use($M);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
