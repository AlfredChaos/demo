"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      cate: [],
      current: 0,
      rectInfo: [],
      mainCurrent: 0,
      scrollTop: 0
    };
  },
  onLoad() {
    this.getData();
  },
  mounted() {
    setTimeout(() => {
      this.getRectInfo();
      console.log(this.rectInfo);
    }, 200);
  },
  methods: {
    getData() {
      common_vendor.index.request({
        url: "http://www.mall.com/api/index/cate",
        success: (res) => {
          this.cate = res.data.data;
        }
      });
    },
    // 菜单选择
    menuTab(index) {
      this.current = index;
      this.mainCurrent = index;
      this.scrollTop = index * 50;
    },
    // 获取矩形信息
    getRectInfo() {
      var temp = 0;
      for (var i = 0; i < this.cate.length; i++) {
        var rectIndex = 0;
        let view = common_vendor.index.createSelectorQuery().in(this).select("#cate" + i);
        view.fields({
          size: true,
          rect: true
        }, (data) => {
          var top = temp;
          var bottom = temp + data.height;
          temp += data.height;
          this.rectInfo[rectIndex++] = { "top": top, "bottom": bottom };
        }).exec();
      }
    },
    // 滚动事件
    rightScroll(e) {
      var scrollTop = e.detail.scrollTop;
      for (var i = 0; i < this.rectInfo.length; i++) {
        if (scrollTop > this.rectInfo[i].top && scrollTop < this.rectInfo[i].bottom) {
          this.current = i;
          this.scrollTop = i * 50;
        }
      }
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
        c: index,
        d: common_vendor.o(($event) => $options.menuTab(index), index)
      };
    }),
    c: $data.scrollTop,
    d: common_vendor.f($data.cate, (item, index, i0) => {
      return {
        a: common_vendor.t(item.catename),
        b: common_vendor.f(item.product, (child, childIndex, i1) => {
          return {
            a: this.$imgUrl + child.mainimage,
            b: common_vendor.t(child.smalltitle),
            c: childIndex
          };
        }),
        c: index,
        d: "cate" + index
      };
    }),
    e: "cate" + $data.mainCurrent,
    f: common_vendor.o((...args) => $options.rightScroll && $options.rightScroll(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
