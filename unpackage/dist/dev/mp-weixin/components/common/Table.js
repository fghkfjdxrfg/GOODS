"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "Table",
  props: {
    rows: {
      type: Array,
      default: () => [
        ["1", "1", "1", "1", "1", "1"],
        // 默认四行空数据  
        ["2", "2", "2", "2", "2", "2"],
        ["3", "3", "3", "3", "3", "3"],
        ["4", "4", "4", "4", "4", "4"]
      ]
    },
    name: {
      type: String,
      default: "寒腿叔叔的小店"
    },
    headers: {
      type: Array,
      default: () => ["游戏名", "系列名", "角色", "制品类别", "数量", "状态"]
      // 默认表头  
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.name),
        b: common_vendor.f(__props.headers, (header, index, i0) => {
          return {
            a: common_vendor.t(header),
            b: index
          };
        }),
        c: common_vendor.f(__props.rows, (row, rowIndex, i0) => {
          return {
            a: common_vendor.f(row, (col, colIndex, i1) => {
              return {
                a: common_vendor.t(col),
                b: colIndex
              };
            }),
            b: rowIndex
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b249cdd6"]]);
wx.createComponent(Component);
