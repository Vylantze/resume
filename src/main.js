import Vue from 'vue'
import App from './App.vue'
import "./css/styles.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faPhone,

  faGithub,
  faLinkedin,
);
Vue.component("FontAwesomeIcon", FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
