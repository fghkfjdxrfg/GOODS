"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  __name: "message",
  props: {
    imageSrc: {
      type: String,
      required: true,
      default: "./ys-1.png"
    },
    title: {
      type: String,
      default: "标题1"
    },
    description: {
      type: String,
      default: "描述1"
    },
    annotations: {
      type: Array,
      default: () => ["啦啦啦啦", "嘿嘿"]
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.t(__props.title),
        c: common_vendor.t(__props.description),
        d: common_vendor.f(__props.annotations, (annotation, index, i0) => {
          return {
            a: common_vendor.t(annotation),
            b: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4575be6e"]]);
wx.createComponent(Component);
