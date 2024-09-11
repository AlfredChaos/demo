"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: ["active", "icon"]
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.active, (item, index, i0) => {
      return {
        a: this.$imgUrl + item.image,
        b: common_vendor.t(item.title),
        c: index
      };
    }),
    b: common_vendor.f($props.icon, (item, index, i0) => {
      return {
        a: this.$imgUrl + item.image,
        b: common_vendor.t(item.title),
        c: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
