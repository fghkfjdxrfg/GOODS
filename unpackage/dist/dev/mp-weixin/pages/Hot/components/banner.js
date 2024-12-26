"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "banner",
  setup(__props) {
    const images = [
      "/static/1999-1.png",
      "/static/1999-2.png",
      "/static/1999-3.png"
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(images, (item, index, i0) => {
          return {
            a: item,
            b: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0b08369a"]]);
wx.createComponent(Component);
