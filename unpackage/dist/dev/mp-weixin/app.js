"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/components/shopping/shopping.js";
  "./pages/components/mine/mine.js";
  "./pages/cate/cate.js";
  "./pages/detail/detail.js";
  "./pages/components/card/card.js";
  "./pages/register/register.js";
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
  app.use(store_index.store);
  app.config.globalProperties.$apiUrl = "http://www.mall.com/api/";
  app.config.globalProperties.$imgUrl = "http://www.mall.com/uploads/";
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
