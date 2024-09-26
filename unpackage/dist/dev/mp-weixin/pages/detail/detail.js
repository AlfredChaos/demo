"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const detailAttr = () => "../components/detailAttr.js";
const detailService = () => "../components/detailService.js";
const indexSwiper = () => "../components/indexSwiper.js";
const parse = () => "../components/gaoyia-parse/parse.js";
const _sfc_main = {
  data() {
    return {
      tab: 0,
      serviceFlag: false,
      //服务弹窗的显示隐藏
      attrFlag: false,
      //属性弹窗的显示隐藏
      detail: [],
      type: 2
      //1表示加入购物车，2表示立即购买
    };
  },
  onLoad(option) {
    this.getData(option.id);
  },
  onBackPress() {
    this.$store.commit("defaultAttr");
  },
  components: {
    detailAttr,
    detailService,
    indexSwiper,
    parse
  },
  methods: {
    tabChange(index) {
      this.tab = index;
    },
    // 显示服务弹窗
    showService() {
      this.serviceFlag = true;
    },
    // 关闭服务弹窗
    closeService() {
      this.serviceFlag = false;
    },
    //显示属性弹窗
    showAttr(type) {
      this.type = type;
      this.attrFlag = true;
    },
    //关闭属性弹窗
    closeAttr() {
      this.attrFlag = false;
    },
    getData(id) {
      common_vendor.index.request({
        url: this.$apiUrl + "index/detail/id/" + id,
        success: (res) => {
          console.log(res.data.data);
          this.detail = res.data.data;
        }
      });
    }
  }
};
if (!Array) {
  const _component_indexSwiper = common_vendor.resolveComponent("indexSwiper");
  const _component_parse = common_vendor.resolveComponent("parse");
  const _component_detailService = common_vendor.resolveComponent("detailService");
  const _component_detailAttr = common_vendor.resolveComponent("detailAttr");
  (_component_indexSwiper + _component_parse + _component_detailService + _component_detailAttr)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      activeBtn: "#0bc9fd",
      content: $data.detail.image,
      swiperHeight: "525rpx",
      width: "470rpx",
      height: "470rpx"
    }),
    b: $data.detail.tag == 1
  }, $data.detail.tag == 1 ? {} : {}, {
    c: $data.detail.tag == 2
  }, $data.detail.tag == 2 ? {} : {}, {
    d: $data.detail.tag == 3
  }, $data.detail.tag == 3 ? {} : {}, {
    e: common_vendor.t($data.detail.title),
    f: common_vendor.t($data.detail.summary),
    g: common_vendor.t($data.detail.price),
    h: common_vendor.t($data.detail.market_price),
    i: common_vendor.t($data.detail.sale),
    j: common_vendor.f($data.detail.servicelist, (item, index, i0) => {
      return common_vendor.e({
        a: index < 3
      }, index < 3 ? {
        b: common_vendor.t(item.title)
      } : {}, {
        c: index
      });
    }),
    k: common_vendor.o((...args) => $options.showService && $options.showService(...args)),
    l: common_vendor.t(_ctx.$store.state.attrText),
    m: common_vendor.o(($event) => $options.showAttr(2)),
    n: common_vendor.o(($event) => $options.tabChange(0)),
    o: $data.tab == 0 ? 1 : "",
    p: common_vendor.o(($event) => $options.tabChange(1)),
    q: $data.tab == 1 ? 1 : "",
    r: $data.tab == 0
  }, $data.tab == 0 ? {
    s: common_vendor.p({
      content: $data.detail.content,
      imageProp: {
        "domain": "www.mall.com",
        "mode": "widthFix"
      }
    })
  } : {}, {
    t: $data.tab == 1
  }, $data.tab == 1 ? {
    v: common_vendor.f($data.detail.spec, (item, index, i0) => {
      return {
        a: common_vendor.t(item.specname),
        b: common_vendor.t(item.specvalue),
        c: index
      };
    })
  } : {}, {
    w: $data.tab == 1
  }, $data.tab == 1 ? {} : {}, {
    x: common_assets._imports_0$1,
    y: common_assets._imports_1,
    z: common_vendor.o(($event) => $options.showAttr(1)),
    A: common_vendor.o(($event) => $options.showAttr(2)),
    B: $data.serviceFlag
  }, $data.serviceFlag ? {
    C: common_vendor.o($options.closeService),
    D: common_vendor.p({
      content: $data.detail.servicelist
    })
  } : {}, {
    E: $data.attrFlag
  }, $data.attrFlag ? {
    F: common_vendor.o($options.closeAttr),
    G: common_vendor.p({
      image: $data.detail.mainimage,
      price: $data.detail.price,
      attr: $data.detail.checkAttr,
      attrValue: $data.detail.attr,
      type: $data.type
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
