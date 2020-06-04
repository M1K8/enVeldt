import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import * as Go from "./wasm_exec"

new Go.Polyfill();


const go = new Go.Go();

WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject).then((result) => {
  go.run(result.instance);
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
