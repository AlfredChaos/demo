"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      cate: [],
      current: 0
    };
  },
  onLoad() {
    this.getData();
  },
  methods: {
    getData() {
      common_vendor.index.request({
        url: "http://www.mall.com/api/index/cate",
        success: (res) => {
          console.log(res.data.data), this.cate = res.data.data;
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.f($data.cate, (item, index, i0) => {
      return {
        a: common_vendor.t(item.catename),
        b: index == $data.current ? 1 : "",
        c: index
      };
    }),
    c: common_vendor.f($data.cate, (item, index, i0) => {
      return {
        a: common_vendor.t(item.catename),
        b: common_vendor.f(item.product, (child, childIndex, i1) => {
          return {
            a: this.$imgUrl + child.mainimage,
            b: common_vendor.t(child.smalltitle),
            c: childIndex
          };
        }),
        c: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
