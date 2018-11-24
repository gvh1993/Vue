module.exports = { contents: "\"use strict\";\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// The Vue build version to load with the `import` command\r\n// (runtime-only or standalone) has been set in webpack.base.conf with an alias.\r\nconst vue_1 = require(\"../../../../../node_modules/vue\");\r\nconst App_1 = require(\"./App\");\r\nconst router_1 = require(\"./router\");\r\nvue_1.default.config.productionTip = false;\r\n/* eslint-disable no-new */\r\nnew vue_1.default({\r\n    el: '#app',\r\n    router: router_1.default,\r\n    template: '<App/>',\r\n    components: { App: App_1.default }\r\n});\r\n//# sourceMappingURL=main.js.map",
dependencies: ["../../../../../node_modules/vue","./App","./router"],
sourceMap: "{\"version\":3,\"file\":\"vue-tutorial/src/main.js\",\"sourceRoot\":\"\",\"sources\":[\"/wwwroot/src/vue-tutorial/src/main.js\"],\"names\":[],\"mappings\":\";;AAAA,0DAA0D;AAC1D,gFAAgF;AAChF,yDAAiD;AACjD,+BAAuB;AACvB,qCAA6B;AAE7B,aAAG,CAAC,MAAM,CAAC,aAAa,GAAG,KAAK,CAAA;AAEhC,2BAA2B;AAC3B,IAAI,aAAG,CAAC;IACN,EAAE,EAAE,MAAM;IACV,MAAM,EAAN,gBAAM;IACN,QAAQ,EAAE,QAAQ;IAClB,UAAU,EAAE,EAAE,GAAG,EAAH,aAAG,EAAE;CACpB,CAAC,CAAA\",\"sourcesContent\":[\"// The Vue build version to load with the `import` command\\n// (runtime-only or standalone) has been set in webpack.base.conf with an alias.\\nimport Vue from '../../../../../node_modules/vue'\\nimport App from './App'\\nimport router from './router'\\n\\nVue.config.productionTip = false\\n\\n/* eslint-disable no-new */\\nnew Vue({\\n  el: '#app',\\n  router,\\n  template: '<App/>',\\n  components: { App }\\n})\\n\"]}",
headerContent: undefined,
mtime: 1542926680543,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
