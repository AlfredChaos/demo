"use strict";
const common_vendor = require("../../../../common/vendor.js");
const wxParseImg = () => "./wxParseImg.js";
const wxParseVideo = () => "./wxParseVideo.js";
const wxParseAudio = () => "./wxParseAudio.js";
const wxParseTable = () => "./wxParseTable.js";
const _sfc_main = {
  name: "wxParseTemplate11",
  props: {
    node: {}
  },
  components: {
    wxParseImg,
    wxParseVideo,
    wxParseAudio,
    wxParseTable
  },
  methods: {
    wxParseATap(attr, e) {
      const {
        href
      } = e.currentTarget.dataset;
      if (!href)
        return;
      let parent = this.$parent;
      while (!parent.preview || typeof parent.preview !== "function") {
        parent = parent.$parent;
      }
      parent.navigate(href, e, attr);
    }
  }
};
if (!Array) {
  const _component_wx_parse_table = common_vendor.resolveComponent("wx-parse-table");
  const _component_wx_parse_video = common_vendor.resolveComponent("wx-parse-video");
  const _component_wx_parse_audio = common_vendor.resolveComponent("wx-parse-audio");
  const _component_wx_parse_img = common_vendor.resolveComponent("wx-parse-img");
  (_component_wx_parse_table + _component_wx_parse_video + _component_wx_parse_audio + _component_wx_parse_img)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.node.node == "element"
  }, $props.node.node == "element" ? common_vendor.e({
    b: $props.node.tag == "button"
  }, $props.node.tag == "button" ? {
    c: $props.node,
    d: common_vendor.n($props.node.classStr),
    e: common_vendor.s("user-select:" + _ctx.parseSelect),
    f: common_vendor.n($props.node.classStr),
    g: common_vendor.s($props.node.styleStr)
  } : $props.node.tag == "a" ? {
    i: common_vendor.f($props.node.nodes, (node, index, i0) => {
      return {
        a: node,
        b: common_vendor.n(node.classStr),
        c: index
      };
    }),
    j: common_vendor.s("user-select:" + _ctx.parseSelect),
    k: common_vendor.o(($event) => $options.wxParseATap($props.node.attr, $event)),
    l: common_vendor.n($props.node.classStr),
    m: $props.node.attr.href,
    n: common_vendor.s($props.node.styleStr)
  } : $props.node.tag == "li" ? {
    p: common_vendor.f($props.node.nodes, (node, index, i0) => {
      return {
        a: node,
        b: common_vendor.n(node.classStr),
        c: index
      };
    }),
    q: common_vendor.s("user-select:" + _ctx.parseSelect),
    r: common_vendor.n($props.node.classStr),
    s: common_vendor.s($props.node.styleStr)
  } : $props.node.tag == "table" ? {
    v: common_vendor.n($props.node.classStr),
    w: common_vendor.s($props.node.styleStr),
    x: common_vendor.p({
      node: $props.node
    })
  } : $props.node.tag == "br" ? {} : $props.node.tag == "video" ? {
    A: common_vendor.p({
      node: $props.node
    })
  } : $props.node.tag == "audio" ? {
    C: common_vendor.p({
      node: $props.node
    })
  } : $props.node.tag == "img" ? {
    E: common_vendor.p({
      node: $props.node
    })
  } : {
    F: common_vendor.f($props.node.nodes, (node, index, i0) => {
      return {
        a: node,
        b: common_vendor.n(node.classStr),
        c: index
      };
    }),
    G: common_vendor.s("user-select:" + _ctx.parseSelect),
    H: common_vendor.n($props.node.classStr),
    I: common_vendor.s($props.node.styleStr)
  }, {
    h: $props.node.tag == "a",
    o: $props.node.tag == "li",
    t: $props.node.tag == "table",
    y: $props.node.tag == "br",
    z: $props.node.tag == "video",
    B: $props.node.tag == "audio",
    D: $props.node.tag == "img"
  }) : $props.node.node == "text" ? {
    K: common_vendor.t($props.node.text)
  } : {}, {
    J: $props.node.node == "text"
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
