"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "wxParseVideo",
  props: {
    node: {}
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($props.node.classStr),
    b: common_vendor.s($props.node.styleStr),
    c: $props.node.attr.src,
    d: common_vendor.n($props.node.classStr),
    e: common_vendor.s($props.node.styleStr)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
