<template>  
  <view class="container">  
    <image class="image" src="./ys-1.png" mode="aspectFill"></image>  
    <view class="text-container">  
      <text class="title">{{ title }}</text>  
      <text class="description">{{ description }}</text>  
      <view class="annotations">  
        <text v-for="(annotation, index) in annotations" :key="index" class="annotation">{{ annotation }}</text>  
      </view>  
    </view>  
  </view>  
</template>  

<script setup>  
import { defineProps } from 'vue';  

const props = defineProps({  
  imageSrc: {  
    type: String,  
    required: true  ,
	default: "./ys-1.png"
  },  
  title: {  
    type: String,  
    default: '标题1'  
  },  
  description: {  
    type: String,  
    default: '描述1'  
  },  
  annotations: {  
    type: Array,  
    default: () => ['啦啦啦啦','嘿嘿']  
  }  
});  
</script>  

<style scoped>  
.container {  
  display: flex;  
  margin: 10px;  
}  

.image {  
  width: 100px; /* 固定宽度 */  
  height: 100px; /* 固定高度 */  
  object-fit: cover; /* 确保图片保持比例 */  
  border-radius: 5px; /* 圆角效果 */  
} 
.text-container {  
  margin-left: 10px;  
  flex-grow: 1;  
}  

.title {  
  font-weight: bold;  
  font-size: 14px; 
  white-space: normal; /* 允许换行 */  
  word-wrap: break-word; /* 处理长单词的换行 */  
}  

.description {  
  font-size: 14px;  
  color: #666;  
}  

.annotations {  
  margin-top: 5px;  
}  

.annotation {  
  font-size: 12px;  
  color: #999;  
}  
</style>