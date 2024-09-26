"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      valueIndex: [],
      checkAttr: "",
      currentPrice: "",
      stock: "",
      number: 1,
      buttonText: ""
    };
  },
  mounted() {
    if (this.$store.state.attrValue.length == 0) {
      for (var i = 0; i < this.attr.length; i++) {
        this.valueIndex.push(0);
      }
    } else {
      this.valueIndex = this.$store.state.attrValue;
    }
    this.checkAttr = this.getValue().toString();
    this.getPrice(this.getValue());
    if (this.type == 1) {
      this.buttonText = "加入购物车";
    } else {
      this.buttonText = "立即购买";
    }
  },
  props: ["image", "price", "attr", "attrValue", "type"],
  methods: {
    closeDialog() {
      this.$emit("close");
      this.$store.commit("setAttr", {
        "attrValue": this.valueIndex,
        "attrText": this.checkAttr
      });
    },
    attrCheck(index, childIndex) {
      this.valueIndex.splice(index, 1, childIndex);
      var valueCheck = this.getValue();
      this.checkAttr = valueCheck.toString();
      this.getPrice(valueCheck);
    },
    getPrice(valueCheck) {
      var temp = [];
      for (var i = 0; i < this.attrValue.length; i++) {
        if (this.attrValue[i]["attr_0"] == valueCheck[0] && this.attrValue[i]["attr_1"] == valueCheck[1]) {
          temp.push(this.attrValue[i]);
        }
      }
      this.currentPrice = temp[0].price;
      this.stock = temp[0].stock;
    },
    getValue() {
      var temp = [];
      for (var i = 0; i < this.attr.length; i++) {
        for (var j = 0; j < this.attr[i].value.length; j++) {
          temp.push(this.attr[i].value[this.valueIndex[i]]);
          break;
        }
      }
      return temp;
    },
    reduce() {
      if (this.number == 1) {
        return;
      }
      this.number--;
    },
    add() {
      if (this.number >= this.stock) {
        this.number = this.stock;
        return;
      }
      this.number++;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: this.$imgUrl + $props.image,
    b: common_vendor.t($data.currentPrice),
    c: common_vendor.t($data.checkAttr),
    d: common_vendor.o((...args) => $options.closeDialog && $options.closeDialog(...args)),
    e: common_vendor.f($props.attr, (item, index, i0) => {
      return {
        a: common_vendor.t(item.attrname),
        b: common_vendor.f(item.value, (child, childIndex, i1) => {
          return {
            a: common_vendor.t(child),
            b: childIndex,
            c: $data.valueIndex[index] == childIndex ? 1 : "",
            d: common_vendor.o(($event) => $options.attrCheck(index, childIndex), childIndex)
          };
        }),
        c: index
      };
    }),
    f: common_vendor.o((...args) => $options.reduce && $options.reduce(...args)),
    g: $data.number,
    h: common_vendor.o(($event) => $data.number = $event.detail.value),
    i: common_vendor.o((...args) => $options.add && $options.add(...args)),
    j: common_vendor.t($data.stock),
    k: common_vendor.t($data.buttonText)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
