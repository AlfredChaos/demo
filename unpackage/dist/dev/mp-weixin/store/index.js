"use strict";
const common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state: {
    attrValue: [],
    //detailAttr valueIndex [0,0]
    attrText: "请选择商品规格尺寸"
  },
  mutations: {
    setAttr(state, data) {
      state.attrValue = data.attrValue;
      state.attrText = data.attrText;
    },
    defaultAttr(state) {
      state.attrValue = [];
      state.attrText = "请选择商品规格尺寸";
    }
  }
});
exports.store = store;
