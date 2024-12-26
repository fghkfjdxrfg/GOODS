<template>
	<view>
		<banner-vue></banner-vue>
		<view>
			<message-vue
			v-for="(message, index) in messages"
			:key="index"   
			:title="message[0]"   
			:description="message[1]"   
			:annotations="message[2]"  
		></message-vue>
		</view>
	</view>
</template>

<script setup>
	import bannerVue from './components/banner.vue';
	import messageVue from './components/message.vue';
	const messages = [['重要！！！使用须知！！','【置顶】',['GOODS','-','2024-12-26']],
	['吞天之鲸售后规则','【售后】',['米游铺','-','2024-12-26']],
	['那维莱特高脚杯上新','【NEW】',['米游铺','-','2024-12-26']],
	['博学而多汁儿-apple手办到货','【公告-到货】',['咕嗞咕嗞','-','2024-12-26']],
	['星间奇遇徽章完售','【SHARE】',['星间小铺','-','2024-12-26']]]
	
</script>

<style>

</style>
