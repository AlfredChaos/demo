"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      swiper: {
        margin: "150rpx",
        index: 0,
        list: [
          "../../../static/banner/banner1.jpg",
          "../../../static/banner/banner2.jpg",
          "../../../static/banner/banner3.jpg"
        ]
      }
    };
  },
  components: {},
  mounted() {
  },
  methods: {
    //swiper滑动事件
    swiperChange: function(e) {
      this.swiper.index = e.detail.current;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.swiper.list[$data.swiper.index],
    b: common_vendor.f($data.swiper.list, (item, index, i0) => {
      return {
        a: item,
        b: $data.swiper.index == index ? 1 : "",
        c: index
      };
    }),
    c: $data.swiper.margin,
    d: $data.swiper.margin,
    e: common_vendor.o((...args) => $options.swiperChange && $options.swiperChange(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
