"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/components/shopping/shopping.js";
  "./pages/components/mine/mine.js";
  "./pages/cate/cate.js";
  "./pages/detail/detail.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.config.globalProperties.$imgUrl = "http://www.mall.com/uploads/";
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
