"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      cate: []
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
    b: common_assets._imports_1,
    c: common_assets._imports_2,
    d: common_assets._imports_3,
    e: common_assets._imports_4,
    f: common_assets._imports_5,
    g: common_assets._imports_6,
    h: common_assets._imports_1,
    i: common_assets._imports_2,
    j: common_assets._imports_3,
    k: common_assets._imports_4,
    l: common_assets._imports_1,
    m: common_assets._imports_2,
    n: common_assets._imports_3,
    o: common_assets._imports_4,
    p: common_assets._imports_5
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
