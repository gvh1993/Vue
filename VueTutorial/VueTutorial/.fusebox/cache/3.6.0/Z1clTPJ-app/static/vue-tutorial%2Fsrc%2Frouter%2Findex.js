module.exports = { contents: "\"use strict\";\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst vue_1 = require(\"vue\");\r\nconst vue_router_1 = require(\"vue-router\");\r\nconst Hello_1 = require(\"@/components/Hello\");\r\nvue_1.default.use(vue_router_1.default);\r\nexports.default = new vue_router_1.default({\r\n    routes: [\r\n        {\r\n            path: '/',\r\n            name: 'Hello',\r\n            component: Hello_1.default\r\n        }\r\n    ]\r\n});\r\n//# sourceMappingURL=index.js.map",
dependencies: ["vue","vue-router","@/components/Hello"],
sourceMap: "{\"version\":3,\"file\":\"vue-tutorial/src/router/index.js\",\"sourceRoot\":\"\",\"sources\":[\"/wwwroot/src/vue-tutorial/src/router/index.js\"],\"names\":[],\"mappings\":\";;AAAA,6BAAqB;AACrB,2CAA+B;AAC/B,8CAAsC;AAEtC,aAAG,CAAC,GAAG,CAAC,oBAAM,CAAC,CAAA;AAEf,kBAAe,IAAI,oBAAM,CAAC;IACxB,MAAM,EAAE;QACN;YACE,IAAI,EAAE,GAAG;YACT,IAAI,EAAE,OAAO;YACb,SAAS,EAAE,eAAK;SACjB;KACF;CACF,CAAC,CAAA\",\"sourcesContent\":[\"import Vue from 'vue'\\nimport Router from 'vue-router'\\nimport Hello from '@/components/Hello'\\n\\nVue.use(Router)\\n\\nexport default new Router({\\n  routes: [\\n    {\\n      path: '/',\\n      name: 'Hello',\\n      component: Hello\\n    }\\n  ]\\n})\\n\"]}",
headerContent: undefined,
mtime: 1542926468781,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
