"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "wxParseTable",
  props: {
    node: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  inject: ["parseSelect"],
  data() {
    return {
      nodes: []
    };
  },
  mounted() {
    this.nodes = this.loadNode([this.node]);
  },
  methods: {
    loadNode(node) {
      let obj = [];
      for (let children of node) {
        if (children.node == "element") {
          let t = {
            name: children.tag,
            attrs: {
              class: children.classStr
              // style: children.styleStr,
            },
            children: children.nodes ? this.loadNode(children.nodes) : []
          };
          obj.push(t);
        } else if (children.node == "text") {
          obj.push({
            type: "text",
            text: children.text
          });
        }
      }
      return obj;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.nodes,
    b: common_vendor.n($props.node.classStr),
    c: common_vendor.s("user-select:" + $options.parseSelect)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
