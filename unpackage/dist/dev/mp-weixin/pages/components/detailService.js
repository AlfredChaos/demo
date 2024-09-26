"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  props: ["content"],
  methods: {
    closeBtn() {
      this.$emit("close");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.closeBtn && $options.closeBtn(...args)),
    b: common_vendor.f($props.content, (item, index, i0) => {
      return {
        a: this.$imgUrl + item.image,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.summary),
        d: index
      };
    }),
    c: common_vendor.o((...args) => $options.closeBtn && $options.closeBtn(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
