<template>  
  <swiper class="swiper-container" indicator-dots="true" autoplay="true">  
    <swiper-item v-for="(item, index) in images" :key="index">  
      <image :src="item" class="swiper-image" mode="aspectFill"></image>  
    </swiper-item>  
  </swiper>  
</template>  

<script setup>  
const images = [  
  '/static/1999-1.png',  
  '/static/1999-2.png',  
  '/static/1999-3.png'  
];    
</script>  

<style scoped>  
.swiper-container {  
  width: 100%;  
  height: 300px; /* 根据需要调整高度 */  
}  

.swiper-image {  
  width: 100%;  
  height: 100%;  
  border-radius: 10px; /* 圆角效果 */  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 阴影效果 */  
}  

/* 指示点的样式 */  
.swiper-dots {  
  text-align: center;  
  margin-top: 10px;  
}  

.swiper-dots > .swiper-dot {  
  background-color: rgba(255, 255, 255, 0.5); /* 默认点的颜色 */  
  width: 10px;  
  height: 10px;  
  border-radius: 50%;  
  display: inline-block;  
  margin: 0 5px;  
}  

.swiper-dots > .swiper-dot.swiper-active-dot {  
  background-color: #007AFF; /* 当前点的颜色 */  
}  
</style>