import busy from "./v-busy";

const install = function(Vue) {
  Vue.directive("busy", busy);
};

if (window.Vue) {
  Vue.use(install);
}

busy.install = install;

export default busy;
