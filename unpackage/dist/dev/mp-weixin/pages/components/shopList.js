"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: ["content"]
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.content, (item, index, i0) => {
      return {
        a: this.$imgUrl + item.mainimage,
        b: common_vendor.t(item.smalltitle),
        c: common_vendor.t(item.summary),
        d: common_vendor.t(item.price),
        e: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
