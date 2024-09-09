"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const topNavigation = () => "../components/topNavigation.js";
const indexSwiper = () => "../components/indexSwiper.js";
const indexService = () => "../components/indexService.js";
const indexAd = () => "../components/indexAd.js";
const titleVue = () => "../components/title.js";
const shopItem = () => "../components/shopItem.js";
const indexTable = () => "../components/indexTable.js";
const _sfc_main = {
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
    titleVue,
    shopItem,
    indexTable
  },
  onLoad() {
  },
  methods: {}
};
if (!Array) {
  const _component_topNavigation = common_vendor.resolveComponent("topNavigation");
  const _component_indexSwiper = common_vendor.resolveComponent("indexSwiper");
  const _component_indexService = common_vendor.resolveComponent("indexService");
  const _component_indexAd = common_vendor.resolveComponent("indexAd");
  const _component_titleVue = common_vendor.resolveComponent("titleVue");
  const _component_shopItem = common_vendor.resolveComponent("shopItem");
  const _component_indexTable = common_vendor.resolveComponent("indexTable");
  (_component_topNavigation + _component_indexSwiper + _component_indexService + _component_indexAd + _component_titleVue + _component_shopItem + _component_indexTable)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      name: "智能手机"
    }),
    b: common_assets._imports_0,
    c: common_vendor.p({
      name: "魅族声乐"
    }),
    d: common_vendor.p({
      name: "智能配件"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
