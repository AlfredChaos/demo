"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: ["content"]
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.content, (item, index, i0) => {
      return common_vendor.e({
        a: this.$imgUrl + item.mainimage,
        b: common_vendor.t(item.smalltitle),
        c: item.tag == 1
      }, item.tag == 1 ? {} : {}, {
        d: item.tag == 2
      }, item.tag == 2 ? {} : {}, {
        e: item.tag == 3
      }, item.tag == 3 ? {} : {}, {
        f: common_vendor.t(item.summary),
        g: common_vendor.t(item.price),
        h: "../detail/detail?id=" + item.id,
        i: index
      });
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
