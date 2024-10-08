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
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const _imports_0$4 = "/static/topNavigation/search.png";
  const _imports_1$2 = "/static/topNavigation/logo.png";
  const _imports_2$1 = "/static/topNavigation/shopping.png";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$b = {
    props: ["content"]
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
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
                src: _imports_1$2,
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "shopping" }, [
              vue.createElementVNode("image", {
                src: _imports_2$1,
                mode: ""
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "menuTab" }, [
            vue.createElementVNode("view", { class: "menuTabItem menuActive" }, " 推荐 "),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($props.content, (item, index) => {
                return vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    class: "menuTabItem",
                    key: index
                  },
                  vue.toDisplayString(item.catename),
                  1
                  /* TEXT */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        vue.createElementVNode("view", { class: "headerEmpty" })
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const topNavigation = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-f86995bb"], ["__file", "D:/develop/code/uniapp-demo/demo/pages/components/topNavigation.vue"]]);
  const _sfc_main$a = {
    props: ["content"]
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("swiper", {
      class: "swiper",
      "indicator-dots": true,
      autoplay: true,
      interval: 3e3,
      duration: 1e3
    }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($props.content, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index }, [
            vue.createElementVNode("view", { class: "swiper-item" }, [
              vue.createElementVNode("navigator", { url: "#" }, [
                vue.createElementVNode("image", {
                  src: this.$imgUrl + item.image,
                  mode: ""
                }, null, 8, ["src"])
              ])
            ])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]);
  }
  const indexSwiper = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-77cdc92d"], ["__file", "D:/develop/code/uniapp-demo/demo/pages/components/indexSwiper.vue"]]);
  const _sfc_main$9 = {
    props: ["active", "icon"]
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "service" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.active, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "serviceItem",
                key: index
              }, [
                vue.createElementVNode("image", {
                  src: this.$imgUrl + item.image,
                  mode: ""
                }, null, 8, ["src"]),
                vue.createTextVNode(
                  " " + vue.toDisplayString(item.title),
                  1
                  /* TEXT */
                )
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("view", { class: "shopNav" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.icon, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "shopNavItem",
                key: index
              }, [
                vue.createElementVNode("navigator", { url: "#" }, [
                  vue.createElementVNode("image", {
                    src: this.$imgUrl + item.image,
                    mode: ""
                  }, null, 8, ["src"]),
                  vue.createElementVNode(
                    "text",
                    null,
                    vue.toDisplayString(item.title),
                    1
                    /* TEXT */
                  )
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const indexService = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-d1b1ec0c"], ["__file", "D:/develop/code/uniapp-demo/demo/pages/components/indexService.vue"]]);
  const _imports_0$3 = "/static/ad/ad1.jpg";
  const _imports_1$1 = "/static/ad/ad2.jpg";
  const _imports_2 = "/static/ad/ad3.png";
  const _sfc_main$8 = {};
  function _sfc_render$7(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "indexAd" }, [
      vue.createElementVNode("view", { class: "indexAdLeft" }, [
        vue.createElementVNode("image", {
          src: _imports_0$3,
          mode: ""
        })
      ]),
      vue.createElementVNode("view", { class: "indexAdRight" }, [
        vue.createElementVNode("view", { class: "indexAdRightItem" }, [
          vue.createElementVNode("image", {
            src: _imports_1$1,
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
  const indexAd = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-748bf119"], ["__file", "D:/develop/code/uniapp-demo/demo/pages/components/indexAd.vue"]]);
  const _sfc_main$7 = {
    props: ["name"]
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
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
  const titleVue = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-6c7f5247"], ["__file", "D:/develop/code/uniapp-demo/demo/pages/components/title.vue"]]);
  const _imports_0$2 = "/static/commodity/p1.png";
  const _sfc_main$6 = {};
  function _sfc_render$5(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "shopListItem" }, [
      vue.createElementVNode("image", {
        src: _imports_0$2,
        class: "shopImg",
        mode: ""
      }),
      vue.createElementVNode("view", { class: "shopTitle" }, " 魅族 16s Pro "),
      vue.createElementVNode("view", { class: "shopActive" }, [
        vue.createElementVNode("view", { class: "shopActiveLab" }, " 免息 "),
        vue.createElementVNode("view", { class: "shopActiveText" }, " 4800W AI三摄 屏幕下方屏幕下方 ")
      ]),
      vue.createElementVNode("view", { class: "shopPrice" }, " ¥2699.00 ")
    ]);
  }
  const shopItem = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-60bf3dab"], ["__file", "D:/develop/code/uniapp-demo/demo/pages/components/shopItem.vue"]]);
  const _imports_0$1 = "/static/shopNav/cateRecommend1.jpg";
  const _imports_1 = "/static/shopNav/cateRecommend2.jpg";
  const _sfc_main$5 = {};
  function _sfc_render$4(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "floorTable" }, [
      vue.createElementVNode("view", { class: "tableItem" }, [
        vue.createElementVNode("image", {
          src: _imports_0$1,
          mode: ""
        })
      ]),
      vue.createElementVNode("view", {
        class: "tableItem",
        style: { "background": "#7064ca" }
      }, [
        vue.createElementVNode("view", { class: "tableBigTitle" }, " MEIZU UR 高端定制耳机 预约 "),
        vue.createElementVNode("view", { class: "tableSmallTitle" }, " 预约专用私人定制，为你而声预约专用私人定制为你而声预约专用私人定制 "),
        vue.createElementVNode("view", { class: "tableLine" }),
        vue.createElementVNode("view", { class: "tablePrice" }, " ¥ 200 ")
      ]),
      vue.createElementVNode("view", {
        class: "tableItem",
        style: { "background": "#f65c5c" }
      }, [
        vue.createElementVNode("view", { class: "tableBigTitle" }, " MEIZU UR 高端定制耳机 预约 "),
        vue.createElementVNode("view", { class: "tableSmallTitle" }, " 预约专用私人定制，为你而声预约专用私人定制为你而声预约专用私人定制 "),
        vue.createElementVNode("view", { class: "tableLine" }),
        vue.createElementVNode("view", { class: "tablePrice" }, " ¥ 200 ")
      ]),
      vue.createElementVNode("view", { class: "tableItem" }, [
        vue.createElementVNode("image", {
          src: _imports_1,
          mode: ""
        })
      ])
    ]);
  }
  const indexTable = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-06202052"], ["__file", "D:/develop/code/uniapp-demo/demo/pages/components/indexTable.vue"]]);
  const _imports_0 = "/static/ad/cate1Ad.jpg";
  const _sfc_main$4 = {
    data() {
      return {
        // 轮播图
        banner: [],
        // 顶部推荐分类
        recommend_cate: [],
        active: [],
        icon: []
      };
    },
    components: {
      topNavigation,
      indexSwiper,
      indexService,
      indexAd,
      titleVue,
      shopItem,
      indexTable
    },
    onLoad() {
      this.getData();
    },
    methods: {
      getData() {
        uni.request({
          // mumu模拟器
          // url: 'http://192.168.5.9:80/mall/public/api/index', //仅为示例，并非真实接口地址。
          url: "http://www.mall.com/api/index",
          success: (res) => {
            formatAppLog("log", "at pages/index/index.vue:86", res.data.data);
            var data = res.data.data;
            this.recommend_cate = data.recommend_cate;
            this.banner = data.banner;
            this.active = data.active;
            this.icon = data.icon;
          }
        });
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_topNavigation = vue.resolveComponent("topNavigation");
    const _component_indexSwiper = vue.resolveComponent("indexSwiper");
    const _component_indexService = vue.resolveComponent("indexService");
    const _component_indexAd = vue.resolveComponent("indexAd");
    const _component_titleVue = vue.resolveComponent("titleVue");
    const _component_shopItem = vue.resolveComponent("shopItem");
    const _component_indexTable = vue.resolveComponent("indexTable");
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createCommentVNode(" 顶部导航 "),
      vue.createVNode(_component_topNavigation, { content: $data.recommend_cate }, null, 8, ["content"]),
      vue.createCommentVNode(" 首页轮播 "),
      vue.createVNode(_component_indexSwiper, { content: $data.banner }, null, 8, ["content"]),
      vue.createCommentVNode(" 商品服务和商品导航 "),
      vue.createVNode(_component_indexService, {
        active: $data.active,
        icon: $data.icon
      }, null, 8, ["active", "icon"]),
      vue.createCommentVNode(" 首页广告 "),
      vue.createVNode(_component_indexAd),
      vue.createElementVNode("view", { class: "floor" }, [
        vue.createVNode(_component_titleVue, { name: "智能手机" }),
        vue.createElementVNode("view", { class: "adImage" }, [
          vue.createElementVNode("image", {
            src: _imports_0,
            class: "adImage",
            mode: ""
          })
        ]),
        vue.createElementVNode("view", { class: "shopList" }, [
          vue.createVNode(_component_shopItem),
          vue.createVNode(_component_shopItem),
          vue.createVNode(_component_shopItem),
          vue.createVNode(_component_shopItem)
        ])
      ]),
      vue.createElementVNode("view", { class: "floor" }, [
        vue.createVNode(_component_titleVue, { name: "魅族声乐" }),
        vue.createVNode(_component_indexTable),
        vue.createElementVNode("view", { class: "shopList" }, [
          vue.createVNode(_component_shopItem),
          vue.createVNode(_component_shopItem),
          vue.createVNode(_component_shopItem),
          vue.createVNode(_component_shopItem)
        ])
      ]),
      vue.createElementVNode("view", { class: "floor" }, [
        vue.createVNode(_component_titleVue, { name: "智能配件" }),
        vue.createVNode(_component_indexTable),
        vue.createElementVNode("view", { class: "shopList" }, [
          vue.createVNode(_component_shopItem),
          vue.createVNode(_component_shopItem),
          vue.createVNode(_component_shopItem),
          vue.createVNode(_component_shopItem)
        ])
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
    app.config.globalProperties.$imgUrl = "http://www.mall.com/uploads";
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
