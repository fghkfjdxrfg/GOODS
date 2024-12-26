<template>  
  <view class="container">  
    <view class="profile-section">  
      <image class="avatar" src="@/static/ys-2.png" mode="aspectFill"></image>  
      <text class="nickname">{{ nickname }}</text>  
    </view>  
    <view class="settings-section">  
	 <view class="setting-item" @click="toggleDropdown">  
	   <text class="setting-title">个人设置</text>  
	   <view v-if="isDropdownOpen" class="dropdown">  
	     <label class="dropdown-item">  
	       <span>展示总价</span>  
	       <checkbox class="checkBox"></checkbox>   
	     </label>  
	     <label class="dropdown-item">  
	       <span>状态高亮提示</span>  
	       <checkbox class="checkBox"></checkbox>   
	     </label>  
	     <label class="dropdown-item">  
	       <span>展示失效商品</span>  
	       <checkbox class="checkBox"></checkbox>   
	     </label>  
	     <label class="dropdown-item">  
	       <span>开启置顶功能</span>  
	       <checkbox class="checkBox"></checkbox>   
	     </label>  
	   </view>  
	 </view>  
	 
      <view class="setting-item" @click="navigateToPrivacy">  
        <text class="setting-title">隐私设置</text>  
      </view>  
      <view class="setting-item" @click="logout">  
        <text class="setting-title">退出登录</text>  
      </view>  
    </view>  
  </view>  
</template>  

<script setup>  
import { ref } from 'vue';  

const isDropdownOpen = ref(false);  
const selectedOption = ref(null);  

const toggleDropdown = () => {  
  isDropdownOpen.value = !isDropdownOpen.value;  
};  

// 假设这些数据来自某个用户状态管理或API  
const nickname = ref("用户昵称");  

// 跳转到相应的设置页面  
const navigateToSettings = () => {  
  // 导航到个人设置页面  
};  

const navigateToPrivacy = () => {  
  // 导航到隐私设置页面  
};  

const logout = () => {  
  // 处理退出登录的逻辑  
};  
</script>  

<style scoped>  
.container {  
  padding: 20px;  
}  

.profile-section {  
  display: flex;  
  align-items: center;  
  margin-bottom: 30px;  
}  

.avatar {  
  width: 60px;  
  height: 60px;  
  border-radius: 30px; /* 使头像为圆形 */  
  margin-right: 15px;  
}  

.nickname {  
  font-size: 18px;  
  font-weight: bold;  
}  

.settings-section {  
  border-top: 1px solid #ccc; /* 分割线 */  
}  

.setting-item {  
  padding: 15px 0;  
  border-bottom: 1px solid #eee; /* 设置项之间的分割线 */  
  cursor: pointer; /* 鼠标指针 */  
}  

.setting-title {  
  font-size: 16px;  
}  

.setting-item {  
  cursor: pointer;  
}  
.dropdown {  
  margin-top: 10px;  
  padding: 10px;  
  border: 1px solid #ccc;  
  background-color: #fff;  
}  
.dropdown-item {  
  display: flex;  
  justify-content: space-between;  
  align-items: center;  
  margin-bottom: 10px; /* 可以调整行间距 */  
}  
.checkBox {  
  margin-left: auto; /* 把checkbox推到右边 */  
} 
</style>