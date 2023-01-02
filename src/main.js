import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import VueParticles from "vue-particles";
import VueTypedJs from "vue-typed-js";

Vue.prototype.axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueParticles);
Vue.use(VueTypedJs);

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
