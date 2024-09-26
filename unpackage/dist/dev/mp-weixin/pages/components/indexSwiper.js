"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: ["content", "swiperHeight", "activeBtn", "width", "height"]
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.content, (item, index, i0) => {
      return {
        a: this.$imgUrl + item.image,
        b: index
      };
    }),
    b: $props.width,
    c: $props.height,
    d: $props.swiperHeight,
    e: $props.activeBtn
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
