"use strict";
const common_vendor = require("../../common/vendor.js");
const topNavigation = () => "../components/topNavigation.js";
const indexSwiper = () => "../components/indexSwiper.js";
const indexService = () => "../components/indexService.js";
const indexAd = () => "../components/indexAd.js";
const titleVue = () => "../components/title.js";
const shopList = () => "../components/shopList.js";
const indexTable = () => "../components/indexTable.js";
const _sfc_main = {
  data() {
    return {
      // 轮播图
      banner: [],
      // 顶部推荐分类
      recommend_cate: [],
      active: [],
      icon: [],
      ad: [],
      floor: []
    };
  },
  components: {
    topNavigation,
    indexSwiper,
    indexService,
    indexAd,
    titleVue,
    shopList,
    indexTable
  },
  onLoad() {
    this.getData();
  },
  methods: {
    getData() {
      common_vendor.index.request({
        // mumu模拟器
        // url: 'http://192.168.5.9:80/mall/public/api/index', //仅为示例，并非真实接口地址。
        url: "http://www.mall.com/api/index",
        success: (res) => {
          console.log(res.data.data);
          var data = res.data.data;
          this.recommend_cate = data.recommend_cate;
          this.banner = data.banner;
          this.active = data.active;
          this.icon = data.icon;
          this.ad = data.floor;
          this.floor = data.cate;
        }
      });
    }
  }
};
if (!Array) {
  const _component_topNavigation = common_vendor.resolveComponent("topNavigation");
  const _component_indexSwiper = common_vendor.resolveComponent("indexSwiper");
  const _component_indexService = common_vendor.resolveComponent("indexService");
  const _component_indexAd = common_vendor.resolveComponent("indexAd");
  const _component_titleVue = common_vendor.resolveComponent("titleVue");
  const _component_indexTable = common_vendor.resolveComponent("indexTable");
  const _component_shopList = common_vendor.resolveComponent("shopList");
  (_component_topNavigation + _component_indexSwiper + _component_indexService + _component_indexAd + _component_titleVue + _component_indexTable + _component_shopList)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      content: $data.recommend_cate
    }),
    b: common_vendor.p({
      content: $data.banner
    }),
    c: common_vendor.p({
      active: $data.active,
      icon: $data.icon
    }),
    d: common_vendor.p({
      content: $data.ad
    }),
    e: common_vendor.f($data.floor, (item, index, i0) => {
      return common_vendor.e({
        a: "f27585da-4-" + i0,
        b: common_vendor.p({
          name: item.content[0].title
        }),
        c: item.content.length == 1
      }, item.content.length == 1 ? {
        d: this.$imgUrl + item.content[0].img
      } : {
        e: "f27585da-5-" + i0,
        f: common_vendor.p({
          content: item.content
        })
      }, {
        g: "f27585da-6-" + i0,
        h: common_vendor.p({
          content: item.product
        }),
        i: index
      });
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
