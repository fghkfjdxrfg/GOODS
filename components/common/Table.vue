<template>  
<view class="table-box">  
    <view class="table-name">{{ name }}</view>  
	<view class="Buttons">
		<button class="add Button">添加</button>
		<button class="add Button">删除</button>
		<button class="add Button">修改</button>
	</view>
    <scroll-view class="scroll-view" scroll-X="true" scroll-Y="true">  
      <view class="table">  
        <view class="table-body">  
          <view class="table-row">  
            <view class="table-cell" v-for="(header, index) in headers" :key="index">{{ header }}</view>  
          </view>  
        </view>  
        <view class="table-body">  
          <view class="table-row" v-for="(row, rowIndex) in rows" :key="rowIndex">  
            <view class="table-cell" v-for="(col, colIndex) in row" :key="colIndex">{{ col }}</view>  
          </view>  
        </view>  
      </view>  
    </scroll-view>  
  </view>  
</template>  

<script setup>  
import { defineProps } from 'vue';  

// 定义接收的 props  
const props = defineProps({  
  rows: {  
    type: Array,  
    default: () => ([  
      ['1', '1', '1', '1', '1', '1'], // 默认四行空数据  
      ['2', '2', '2', '2', '2', '2'],  
      ['3', '3', '3', '3', '3', '3'],  
      ['4', '4', '4', '4', '4', '4']  
    ])  
  },  
  name:{
	  type: String,
	  default: "寒腿叔叔的小店"
  },
  headers: {  
    type: Array,  
    default: () => (['游戏名','系列名', '角色', '制品类别',  '数量', '状态']) // 默认表头  
  }  
});  
</script>  

<style scoped>  
.table-box {  
  margin: 10px;  
}  

.table-name {  
  font-size: 18px; /* 标题字体大小 */  
  font-weight: bold; /* 加粗 */  
  margin-bottom: 10px; /* 标题与表格间距 */  
  color: #ffaa00; /* 标题颜色 */  
  text-align: center; /* 标题居中 */  
}  

.scroll-view {  
  max-height: 300px;  /* 设置最大高度，可以根据需要调整 */  
  overflow: auto;   /* 允许滚动 */  
}  

.table {  
  border-collapse: collapse;  
  width: 100%;  
}  

.table-row {  
  display: flex;  
}  

.table-cell {  
  flex: 1;  
  border: 1px solid #363636;  
  padding: 10px;  
  text-align: left;  
  min-width: 20%;
}  
.Buttons {
	display: flex;
}
button {
	font-size: 15px;
	background-color: beige;
}
</style>