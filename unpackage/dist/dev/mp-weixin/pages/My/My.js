"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "My",
  setup(__props) {
    const isDropdownOpen = common_vendor.ref(false);
    common_vendor.ref(null);
    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };
    const nickname = common_vendor.ref("用户昵称");
    const navigateToPrivacy = () => {
    };
    const logout = () => {
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0,
        b: common_vendor.t(nickname.value),
        c: isDropdownOpen.value
      }, isDropdownOpen.value ? {} : {}, {
        d: common_vendor.o(toggleDropdown),
        e: common_vendor.o(navigateToPrivacy),
        f: common_vendor.o(logout)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8f9a99c0"]]);
wx.createPage(MiniProgramPage);
