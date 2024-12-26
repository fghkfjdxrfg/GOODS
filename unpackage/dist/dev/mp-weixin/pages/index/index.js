"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  tableBox();
}
const tableBox = () => "../../components/common/Table.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const nameArr = ["寒腿叔叔的小店", "星间小铺", "米游铺", "咕嗞咕嗞"];
    const tableHeaders = ["游戏", "系列", "角色", "制品", "数量", "状态"];
    const tableData = [[
      ["starRail", "大公", "貊泽", "暴击衣", "100", "未发货"],
      ["starRail", "司铎", "周天", "速度鞋", "30", "未发货"],
      ["starRail", "快枪手", "饮月", "爆伤衣", "200", "未发货"]
    ], [
      ["starRail", "银枝怀表", "银枝", "怀表", "1", "未发货"],
      ["starRail", "键帽", "饮月", "键帽", "3", "未发货"]
    ], [
      ["MiHoYo", "吞天之鲸", "达达利亚", "玩偶", "1", "已到货"],
      ["MiHoYo", "Q版徽章", "白术", "徽章", "3", "未发货"],
      ["MiHoYo", "印象服", "阿贝多", "贝雷帽", "1", "未发货"],
      ["MiHoYo", "冬夜愚戏", "达达利亚", "徽章", "20", "未发货"]
    ], [
      ["1999", "数据1-2", "数据1-3", "数据1-4", "数据1-5", "数据1-6"],
      ["1999", "数据2-2", "数据2-3", "数据2-4", "数据2-5", "数据2-6"],
      ["1999", "数据3-2", "数据3-3", "数据3-4", "数据3-5", "数据3-6"],
      ["1999", "数据4-2", "数据4-3", "数据4-4", "数据4-5", "数据4-6"]
    ]];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(nameArr, (name, index, i0) => {
          return {
            a: index,
            b: "d2fbfe58-0-" + i0,
            c: common_vendor.p({
              rows: tableData[index],
              headers: tableHeaders,
              name
            })
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
