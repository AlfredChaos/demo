"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      codeText: "获取验证码",
      codeFlag: true
    };
  },
  methods: {
    getCode() {
      if (this.codeFlag == false) {
        return;
      }
      this.codeFlag = false;
      var time = 10;
      this.codeText = "重新获取" + time;
      var timer = setInterval(() => {
        if (time == 1) {
          this.codeText = "获取验证码";
          this.codeFlag = true;
          clearInterval(timer);
        } else {
          time--;
          this.codeText = "重新获取" + time;
        }
      }, 1e3);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0$2,
    b: common_vendor.t($data.codeText),
    c: $data.codeFlag ? 1 : "",
    d: common_vendor.o((...args) => $options.getCode && $options.getCode(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
