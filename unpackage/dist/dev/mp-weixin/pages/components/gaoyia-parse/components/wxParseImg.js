"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "wxParseImg",
  data() {
    return {
      newStyleStr: "",
      preview: true
    };
  },
  inject: ["parseWidth"],
  mounted() {
  },
  props: {
    node: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    wxParseImgTap(e) {
      if (!this.preview)
        return;
      const { src } = e.currentTarget.dataset;
      if (!src)
        return;
      let parent = this.$parent;
      while (!parent.preview || typeof parent.preview !== "function") {
        parent = parent.$parent;
      }
      parent.preview(src, e);
    },
    // 图片视觉宽高计算函数区
    wxParseImgLoad(e) {
      const { src } = e.currentTarget.dataset;
      if (!src)
        return;
      let { width, height } = e.detail;
      const recal = this.wxAutoImageCal(width, height);
      const { imageheight, imageWidth } = recal;
      const { padding, mode } = this.node.attr;
      const { styleStr } = this.node;
      const imageHeightStyle = mode === "widthFix" ? "" : `height: ${imageheight}px;`;
      this.newStyleStr = `${styleStr}; ${imageHeightStyle}; width: ${imageWidth}px; padding: 0 ${+padding}px;`;
    },
    // 计算视觉优先的图片宽高
    wxAutoImageCal(originalWidth, originalHeight) {
      const windowWidth = this.parseWidth.value;
      const results = {};
      if (originalWidth < 60 || originalHeight < 60) {
        const { src } = this.node.attr;
        let parent = this.$parent;
        while (!parent.preview || typeof parent.preview !== "function") {
          parent = parent.$parent;
        }
        parent.removeImageUrl(src);
        this.preview = false;
      }
      if (originalWidth > windowWidth) {
        results.imageWidth = windowWidth;
        results.imageheight = windowWidth * (originalHeight / originalWidth);
      } else {
        results.imageWidth = originalWidth;
        results.imageheight = originalHeight;
      }
      return results;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.node.attr.mode,
    b: $props.node.attr.lazyLoad,
    c: common_vendor.n($props.node.classStr),
    d: common_vendor.s($data.newStyleStr || $props.node.styleStr),
    e: $props.node.attr.src,
    f: $props.node.attr.src,
    g: common_vendor.o((...args) => $options.wxParseImgTap && $options.wxParseImgTap(...args)),
    h: common_vendor.o((...args) => $options.wxParseImgLoad && $options.wxParseImgLoad(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
