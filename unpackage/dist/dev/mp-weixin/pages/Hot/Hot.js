"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (bannerVue + messageVue)();
}
const bannerVue = () => "./components/banner.js";
const messageVue = () => "./components/message.js";
const _sfc_main = {
  __name: "Hot",
  setup(__props) {
    const messages = [
      ["重要！！！使用须知！！", "【置顶】", ["GOODS", "-", "2024-12-26"]],
      ["吞天之鲸售后规则", "【售后】", ["米游铺", "-", "2024-12-26"]],
      ["那维莱特高脚杯上新", "【NEW】", ["米游铺", "-", "2024-12-26"]],
      ["博学而多汁儿-apple手办到货", "【公告-到货】", ["咕嗞咕嗞", "-", "2024-12-26"]],
      ["星间奇遇徽章完售", "【SHARE】", ["星间小铺", "-", "2024-12-26"]]
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(messages, (message, index, i0) => {
          return {
            a: index,
            b: "bbfa316c-1-" + i0,
            c: common_vendor.p({
              title: message[0],
              description: message[1],
              annotations: message[2]
            })
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
