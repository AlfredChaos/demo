"use strict";
const common_vendor = require("../../../common/vendor.js");
const pages_components_gaoyiaParse_libs_html2json = require("./libs/html2json.js");
const wxParseTemplate = () => "./components/wxParseTemplate0.js";
const _sfc_main = {
  name: "wxParse",
  props: {
    // user-select:none;
    userSelect: {
      type: String,
      default: "text"
      //none |text| all | element
    },
    imgOptions: {
      type: [Object, Boolean],
      default: function() {
        return {
          loop: false,
          indicator: "number",
          longPressActions: false
          // longPressActions: {
          // 	 itemList: ['发送给朋友', '保存图片', '收藏'],
          // 		success: function (res) {
          // 			console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
          // 		},
          // 		fail: function (res) {
          // 			console.log(res.errMsg);
          // 		}    
          // 	}
          // }
        };
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    noData: {
      type: String,
      default: '<div style="color: red;">数据不能为空</div>'
    },
    startHandler: {
      type: Function,
      default() {
        return (node) => {
          node.attr.class = null;
          node.attr.style = null;
        };
      }
    },
    endHandler: {
      type: Function,
      default: null
    },
    charsHandler: {
      type: Function,
      default: null
    },
    imageProp: {
      type: Object,
      default() {
        return {
          mode: "aspectFit",
          padding: 0,
          lazyLoad: false,
          domain: ""
        };
      }
    }
  },
  components: {
    wxParseTemplate
  },
  data() {
    return {
      nodes: {},
      imageUrls: [],
      wxParseWidth: {
        value: 0
      }
    };
  },
  computed: {},
  mounted() {
    this.setHtml();
  },
  methods: {
    setHtml() {
      this.getWidth().then((data) => {
        this.wxParseWidth.value = data;
      });
      let {
        content,
        noData,
        imageProp,
        startHandler,
        endHandler,
        charsHandler
      } = this;
      let parseData = content || noData;
      let customHandler = {
        start: startHandler,
        end: endHandler,
        chars: charsHandler
      };
      let results = pages_components_gaoyiaParse_libs_html2json.html2json(parseData, customHandler, imageProp);
      this.imageUrls = results.imageUrls;
      this.nodes = [];
      results.nodes.forEach((item) => {
        setTimeout(() => {
          this.nodes.push(item);
        }, 0);
      });
    },
    getWidth() {
      return new Promise((res, rej) => {
        common_vendor.index.createSelectorQuery().in(this).select(".wxParse").fields(
          {
            size: true,
            scrollOffset: true
          },
          (data) => {
            res(data.width);
          }
        ).exec();
      });
    },
    navigate(href, $event, attr) {
      console.log(href, attr);
      this.$emit("navigate", href, $event);
    },
    preview(src, $event) {
      if (!this.imageUrls.length || typeof this.imgOptions === "boolean")
        ;
      else {
        common_vendor.index.previewImage({
          current: src,
          urls: this.imageUrls,
          loop: this.imgOptions.loop,
          indicator: this.imgOptions.indicator,
          longPressActions: this.imgOptions.longPressActions
        });
      }
      this.$emit("preview", src, $event);
    },
    removeImageUrl(src) {
      const {
        imageUrls
      } = this;
      imageUrls.splice(imageUrls.indexOf(src), 1);
    }
  },
  // 父组件中提供
  provide() {
    return {
      parseWidth: this.wxParseWidth,
      parseSelect: this.userSelect
      // 提示：provide 和 inject 绑定并不是可响应的。这是刻意为之的。然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。
    };
  },
  watch: {
    content() {
      this.setHtml();
    }
    // content: {
    // 	handler: function(newVal, oldVal) {
    // 		if (newVal !== oldVal) {
    // 			
    // 		}
    // 	},
    // 	deep: true
    // }
  }
};
if (!Array) {
  const _component_wxParseTemplate = common_vendor.resolveComponent("wxParseTemplate");
  _component_wxParseTemplate();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$props.loading
  }, !$props.loading ? {
    b: common_vendor.f($data.nodes, (node, index, i0) => {
      return {
        a: "62ab6d3d-0-" + i0,
        b: common_vendor.p({
          node
        }),
        c: index
      };
    })
  } : {}, {
    c: common_vendor.n($props.className),
    d: common_vendor.s("user-select:" + $props.userSelect)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
