if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _imports_0$4 = "/static/topNavigation/search.png";
  const _imports_1$3 = "/static/topNavigation/logo.png";
  const _imports_2$3 = "/static/topNavigation/shopping.png";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$9 = {};
  function _sfc_render$8(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "status" }),
        vue.createElementVNode("view", { class: "header" }, [
          vue.createElementVNode("view", { class: "navbar" }, [
            vue.createElementVNode("view", { class: "search" }, [
              vue.createElementVNode("image", {
                src: _imports_0$4,
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "logo" }, [
              vue.createElementVNode("image", {
                src: _imports_1$3,
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "shopping" }, [
              vue.createElementVNode("image", {
                src: _imports_2$3,
                mode: ""
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "menuTab" }, [
            vue.createElementVNode("view", { class: "menuTabItem menuActive" }, " 推荐 "),
            vue.createElementVNode("view", { class: "menuTabItem" }, " 手机 "),
            vue.createElementVNode("view", { class: "menuTabItem" }, " 声学 "),
            vue.createElementVNode("view", { class: "menuTabItem" }, " 配件 "),
            vue.createElementVNode("view", { class: "menuTabItem" }, " 生活 ")
          ])
        ]),
        vue.createElementVNode("view", { class: "headerEmpty" })
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const topNavigation = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-f86995bb"], ["__file", "D:/develop/code/uniapp-demo/demo/pages/components/topNavigation.vue"]]);
  const _imports_0$3 = "/static/banner/banner1.jpg";
  const _imports_1$2 = "/static/banner/banner2.jpg";
  const _imports_2$2 = "/static/banner/banner3.jpg";
  const _imports_3$1 = "/static/banner/banner4.jpg";
  const _sfc_main$8 = {};
  function _sfc_render$7(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("swiper", {
      class: "swiper",
      "indicator-dots": true,
      autoplay: true,
      interval: 3e3,
      duration: 1e3
    }, [
      vue.createElementVNode("swiper-item", null, [
        vue.createElementVNode("view", { class: "swiper-item" }, [
          vue.createElementVNode("image", {
            src: _imports_0$3,
            mode: ""
          })
        ])
      ]),
      vue.createElementVNode("swiper-item", null, [
        vue.createElementVNode("view", { class: "swiper-item" }, [
          vue.createElementVNode("image", {
            src: _imports_1$2,
            mode: ""
          })
        ])
      ]),
      vue.createElementVNode("swiper-item", null, [
        vue.createElementVNode("view", { class: "swiper-item" }, [
          vue.createElementVNode("image", {
            src: _imports_2$2,
            mode: ""
          })
        ])
      ]),
      vue.createElementVNode("swiper-item", null, [
        vue.createElementVNode("view", { class: "swiper-item" }, [
          vue.createElementVNode("image", {
            src: _imports_3$1,
            mode: ""
          })
        ])
      ])
    ]);
  }
  const indexSwiper = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-77cdc92d"], ["__file", "D:/develop/code/uniapp-demo/demo/pages/components/indexSwiper.vue"]]);
  const _imports_0$2 = "/static/service/icon1.png";
  const _imports_1$1 = "/static/service/icon2.png";
  const _imports_2$1 = "/static/service/icon3.png";
  const _imports_3 = "/static/shopNav/recommend1.png";
  const _imports_4 = "/static/shopNav/recommend2.png";
  const _imports_5 = "/static/shopNav/recommend3.jpg";
  const _imports_6 = "/static/shopNav/recommend4.jpg";
  const _sfc_main$7 = {};
  function _sfc_render$6(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "service" }, [
          vue.createElementVNode("view", { class: "serviceItem" }, [
            vue.createElementVNode("image", { src: _imports_0$2 }),
            vue.createTextVNode(" 魅族官网直供 ")
          ]),
          vue.createElementVNode("view", { class: "serviceItem" }, [
            vue.createElementVNode("image", { src: _imports_1$1 }),
            vue.createTextVNode(" 满80免运费 ")
          ]),
          vue.createElementVNode("view", { class: "serviceItem" }, [
            vue.createElementVNode("image", { src: _imports_2$1 }),
            vue.createTextVNode(" 7天无理由退货 ")
          ])
        ]),
        vue.createElementVNode("view", { class: "shopNav" }, [
          vue.createElementVNode("view", { class: "shopNavItem" }, [
            vue.createElementVNode("image", { src: _imports_3 }),
            vue.createElementVNode("text", null, "魅族 16S PRO")
          ]),
          vue.createElementVNode("view", { class: "shopNavItem" }, [
            vue.createElementVNode("image", { src: _imports_4 }),
            vue.createElementVNode("text", null, "魅族 16S PRO")
          ]),
          vue.createElementVNode("view", { class: "shopNavItem" }, [
            vue.createElementVNode("image", { src: _imports_5 }),
            vue.createElementVNode("text", null, "魅族 16S PRO")
          ]),
          vue.createElementVNode("view", { class: "shopNavItem" }, [
            vue.createElementVNode("image", { src: _imports_6 }),
            vue.createElementVNode("text", null, "魅族 16S PRO")
          ])
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const indexService = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-d1b1ec0c"], ["__file", "D:/develop/code/uniapp-demo/demo/pages/components/indexService.vue"]]);
  const _imports_0$1 = "/static/ad/ad1.jpg";
  const _imports_1 = "/static/ad/ad2.jpg";
  const _imports_2 = "/static/ad/ad3.png";
  const _sfc_main$6 = {};
  function _sfc_render$5(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "indexAd" }, [
      vue.createElementVNode("view", { class: "indexAdLeft" }, [
        vue.createElementVNode("image", {
          src: _imports_0$1,
          mode: ""
        })
      ]),
      vue.createElementVNode("view", { class: "indexAdRight" }, [
        vue.createElementVNode("view", { class: "indexAdRightItem" }, [
          vue.createElementVNode("image", {
            src: _imports_1,
            mode: ""
          })
        ]),
        vue.createElementVNode("view", { class: "indexAdRightItem" }, [
          vue.createElementVNode("image", {
            src: _imports_2,
            mode: ""
          })
        ])
      ])
    ]);
  }
  const indexAd = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-748bf119"], ["__file", "D:/develop/code/uniapp-demo/demo/pages/components/indexAd.vue"]]);
  const _sfc_main$5 = {
    props: ["name"]
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "floorTitle" }, [
      vue.createElementVNode(
        "view",
        { class: "title" },
        vue.toDisplayString($props.name),
        1
        /* TEXT */
      ),
      vue.createElementVNode("view", { class: "line" })
    ]);
  }
  const titleVue = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-6c7f5247"], ["__file", "D:/develop/code/uniapp-demo/demo/pages/components/title.vue"]]);
  const _imports_0 = "/static/ad/cate1Ad.jpg";
  const _sfc_main$4 = {
    data() {
      return {
        title: "Hello"
      };
    },
    components: {
      topNavigation,
      indexSwiper,
      indexService,
      indexAd,
      titleVue
    },
    onLoad() {
    },
    methods: {}
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_topNavigation = vue.resolveComponent("topNavigation");
    const _component_indexSwiper = vue.resolveComponent("indexSwiper");
    const _component_indexService = vue.resolveComponent("indexService");
    const _component_indexAd = vue.resolveComponent("indexAd");
    const _component_titleVue = vue.resolveComponent("titleVue");
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createCommentVNode(" 顶部导航 "),
      vue.createVNode(_component_topNavigation),
      vue.createCommentVNode(" 首页轮播 "),
      vue.createVNode(_component_indexSwiper),
      vue.createCommentVNode(" 商品服务和商品导航 "),
      vue.createVNode(_component_indexService),
      vue.createCommentVNode(" 首页广告 "),
      vue.createVNode(_component_indexAd),
      vue.createElementVNode("view", { class: "floor" }, [
        vue.createVNode(_component_titleVue, { name: "智能手机" }),
        vue.createElementVNode("image", {
          src: _imports_0,
          class: "adImage",
          mode: ""
        })
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "D:/develop/code/uniapp-demo/demo/pages/index/index.vue"]]);
  const _sfc_main$3 = {};
  function _sfc_render$2(_ctx, _cache) {
    return null;
  }
  const PagesComponentsSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/develop/code/uniapp-demo/demo/pages/components/search/search.vue"]]);
  const _sfc_main$2 = {};
  function _sfc_render$1(_ctx, _cache) {
    return null;
  }
  const PagesComponentsShoppingShopping = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/develop/code/uniapp-demo/demo/pages/components/shopping/shopping.vue"]]);
  const _sfc_main$1 = {};
  function _sfc_render(_ctx, _cache) {
    return null;
  }
  const PagesComponentsMineMine = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/develop/code/uniapp-demo/demo/pages/components/mine/mine.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/components/search/search", PagesComponentsSearchSearch);
  __definePage("pages/components/shopping/shopping", PagesComponentsShoppingShopping);
  __definePage("pages/components/mine/mine", PagesComponentsMineMine);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/develop/code/uniapp-demo/demo/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
