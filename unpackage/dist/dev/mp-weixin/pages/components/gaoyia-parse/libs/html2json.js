"use strict";
const common_vendor = require("../../../../common/vendor.js");
const pages_components_gaoyiaParse_libs_wxDiscode = require("./wxDiscode.js");
const pages_components_gaoyiaParse_libs_htmlparser = require("./htmlparser.js");
function makeMap(str) {
  const obj = {};
  const items = str.split(",");
  for (let i = 0; i < items.length; i += 1)
    obj[items[i]] = true;
  return obj;
}
const block = makeMap("br,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video");
const inline = makeMap("a,abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");
const closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
function removeDOCTYPE(html) {
  const isDocument = /<body.*>([^]*)<\/body>/.test(html);
  return isDocument ? RegExp.$1 : html;
}
function trimHtml(html) {
  return html.replace(/<!--.*?-->/gi, "").replace(/\/\*.*?\*\//gi, "").replace(/[ ]+</gi, "<").replace(/<script[^]*<\/script>/gi, "").replace(/<style[^]*<\/style>/gi, "");
}
function getScreenInfo() {
  const screen = {};
  common_vendor.wx$1.getSystemInfo({
    success: (res) => {
      screen.width = res.windowWidth;
      screen.height = res.windowHeight;
    }
  });
  return screen;
}
function html2json(html, customHandler, imageProp, host) {
  html = removeDOCTYPE(html);
  html = trimHtml(html);
  html = pages_components_gaoyiaParse_libs_wxDiscode.wxDiscode.strDiscode(html);
  const bufArray = [];
  const results = {
    nodes: [],
    imageUrls: []
  };
  const screen = getScreenInfo();
  function Node(tag) {
    this.node = "element";
    this.tag = tag;
    this.$screen = screen;
  }
  pages_components_gaoyiaParse_libs_htmlparser.HTMLParser(html, {
    start(tag, attrs, unary) {
      const node = new Node(tag);
      if (bufArray.length !== 0) {
        const parent = bufArray[0];
        if (parent.nodes === void 0) {
          parent.nodes = [];
        }
      }
      if (block[tag]) {
        node.tagType = "block";
      } else if (inline[tag]) {
        node.tagType = "inline";
      } else if (closeSelf[tag]) {
        node.tagType = "closeSelf";
      }
      node.attr = attrs.reduce((pre, attr) => {
        const { name } = attr;
        let { value } = attr;
        if (name === "class") {
          node.classStr = value;
        }
        if (name === "style") {
          node.styleStr = value;
        }
        if (value.match(/ /)) {
          value = value.split(" ");
        }
        if (pre[name]) {
          if (Array.isArray(pre[name])) {
            pre[name].push(value);
          } else {
            pre[name] = [pre[name], value];
          }
        } else {
          pre[name] = value;
        }
        return pre;
      }, {});
      if (node.classStr) {
        node.classStr += ` ${node.tag}`;
      } else {
        node.classStr = node.tag;
      }
      if (node.tagType === "inline") {
        node.classStr += " inline";
      }
      if (node.tag === "img") {
        let imgUrl = node.attr.src;
        imgUrl = pages_components_gaoyiaParse_libs_wxDiscode.wxDiscode.urlToHttpUrl(imgUrl, imageProp.domain);
        Object.assign(node.attr, imageProp, {
          src: imgUrl || ""
        });
        if (imgUrl) {
          results.imageUrls.push(imgUrl);
        }
      }
      if (node.tag === "a") {
        node.attr.href = node.attr.href || "";
      }
      if (node.tag === "font") {
        const fontSize = [
          "x-small",
          "small",
          "medium",
          "large",
          "x-large",
          "xx-large",
          "-webkit-xxx-large"
        ];
        const styleAttrs = {
          color: "color",
          face: "font-family",
          size: "font-size"
        };
        if (!node.styleStr)
          node.styleStr = "";
        Object.keys(styleAttrs).forEach((key) => {
          if (node.attr[key]) {
            const value = key === "size" ? fontSize[node.attr[key] - 1] : node.attr[key];
            node.styleStr += `${styleAttrs[key]}: ${value};`;
          }
        });
      }
      if (node.tag === "source") {
        results.source = node.attr.src;
      }
      if (customHandler.start) {
        customHandler.start(node, results);
      }
      if (unary) {
        const parent = bufArray[0] || results;
        if (parent.nodes === void 0) {
          parent.nodes = [];
        }
        parent.nodes.push(node);
      } else {
        bufArray.unshift(node);
      }
    },
    end(tag) {
      const node = bufArray.shift();
      if (node.tag !== tag) {
        console.error("invalid state: mismatch end tag");
      }
      if (node.tag === "video" && results.source) {
        node.attr.src = results.source;
        delete results.source;
      }
      if (customHandler.end) {
        customHandler.end(node, results);
      }
      if (bufArray.length === 0) {
        results.nodes.push(node);
      } else {
        const parent = bufArray[0];
        if (!parent.nodes) {
          parent.nodes = [];
        }
        parent.nodes.push(node);
      }
    },
    chars(text) {
      if (!text.trim())
        return;
      const node = {
        node: "text",
        text
      };
      if (customHandler.chars) {
        customHandler.chars(node, results);
      }
      if (bufArray.length === 0) {
        results.nodes.push(node);
      } else {
        const parent = bufArray[0];
        if (parent.nodes === void 0) {
          parent.nodes = [];
        }
        parent.nodes.push(node);
      }
    }
  });
  return results;
}
exports.html2json = html2json;
