"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: ["content"]
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: this.$imgUrl + $props.content[0].img,
    b: common_vendor.t($props.content[0].name),
    c: common_vendor.t($props.content[0].summary),
    d: common_vendor.t($props.content[0].price),
    e: common_vendor.t($props.content[1].name),
    f: common_vendor.t($props.content[1].summary),
    g: common_vendor.t($props.content[1].price),
    h: this.$imgUrl + $props.content[1].img
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
