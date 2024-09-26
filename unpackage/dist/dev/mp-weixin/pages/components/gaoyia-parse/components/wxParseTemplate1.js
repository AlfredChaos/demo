"use strict";
const common_vendor = require("../../../../common/vendor.js");
const wxParseTemplate = () => "./wxParseTemplate2.js";
const wxParseImg = () => "./wxParseImg.js";
const wxParseVideo = () => "./wxParseVideo.js";
const wxParseAudio = () => "./wxParseAudio.js";
const wxParseTable = () => "./wxParseTable.js";
const _sfc_main = {
  name: "wxParseTemplate1",
  props: {
    node: {}
  },
  components: {
    wxParseTemplate,
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
  const _component_wx_parse_template = common_vendor.resolveComponent("wx-parse-template");
  const _component_wx_parse_table = common_vendor.resolveComponent("wx-parse-table");
  const _component_wx_parse_video = common_vendor.resolveComponent("wx-parse-video");
  const _component_wx_parse_audio = common_vendor.resolveComponent("wx-parse-audio");
  const _component_wx_parse_img = common_vendor.resolveComponent("wx-parse-img");
  (_component_wx_parse_template + _component_wx_parse_table + _component_wx_parse_video + _component_wx_parse_audio + _component_wx_parse_img)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.node.node == "element"
  }, $props.node.node == "element" ? common_vendor.e({
    b: $props.node.tag == "button"
  }, $props.node.tag == "button" ? {
    c: common_vendor.p({
      node: $props.node
    }),
    d: common_vendor.n($props.node.classStr),
    e: common_vendor.s($props.node.styleStr)
  } : $props.node.tag == "a" ? {
    g: common_vendor.f($props.node.nodes, (node, index, i0) => {
      return {
        a: "b4905fb0-1-" + i0,
        b: common_vendor.p({
          node
        }),
        c: index
      };
    }),
    h: common_vendor.o(($event) => $options.wxParseATap($props.node.attr, $event)),
    i: common_vendor.n($props.node.classStr),
    j: $props.node.attr.href,
    k: common_vendor.s($props.node.styleStr)
  } : $props.node.tag == "li" ? {
    m: common_vendor.f($props.node.nodes, (node, index, i0) => {
      return {
        a: "b4905fb0-2-" + i0,
        b: common_vendor.p({
          node
        }),
        c: index
      };
    }),
    n: common_vendor.n($props.node.classStr),
    o: common_vendor.s($props.node.styleStr)
  } : $props.node.tag == "table" ? {
    q: common_vendor.n($props.node.classStr),
    r: common_vendor.s($props.node.styleStr),
    s: common_vendor.p({
      node: $props.node
    })
  } : $props.node.tag == "br" ? {} : $props.node.tag == "video" ? {
    w: common_vendor.p({
      node: $props.node
    })
  } : $props.node.tag == "audio" ? {
    y: common_vendor.p({
      node: $props.node
    })
  } : $props.node.tag == "img" ? {
    A: common_vendor.s($props.node.styleStr),
    B: common_vendor.p({
      node: $props.node
    })
  } : {
    C: common_vendor.f($props.node.nodes, (node, index, i0) => {
      return {
        a: "b4905fb0-7-" + i0,
        b: common_vendor.p({
          node
        }),
        c: index
      };
    }),
    D: common_vendor.n($props.node.classStr),
    E: common_vendor.s($props.node.styleStr)
  }, {
    f: $props.node.tag == "a",
    l: $props.node.tag == "li",
    p: $props.node.tag == "table",
    t: $props.node.tag == "br",
    v: $props.node.tag == "video",
    x: $props.node.tag == "audio",
    z: $props.node.tag == "img"
  }) : $props.node.node == "text" ? {
    G: common_vendor.t($props.node.text)
  } : {}, {
    F: $props.node.node == "text"
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
