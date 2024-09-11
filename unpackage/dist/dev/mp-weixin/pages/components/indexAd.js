"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: ["content"]
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.content.length > 0
  }, $props.content.length > 0 ? {
    b: this.$imgUrl + $props.content[0].image
  } : {}, {
    c: $props.content.length > 0
  }, $props.content.length > 0 ? {
    d: this.$imgUrl + $props.content[1].image
  } : {}, {
    e: $props.content.length > 0
  }, $props.content.length > 0 ? {
    f: this.$imgUrl + $props.content[2].image
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
