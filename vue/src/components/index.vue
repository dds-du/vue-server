<template>
	<div class="main_wrap" id="dds_index">
		<button id="index_display">展开图片</button>
		<div id="box">
			<ul id="wrap">
				<router-link to="/saolei" tag="li">
					<img src="/static/img/tim.jpg" alt="">
					<div class="mask"></div>
				</router-link>
				<router-link to="/3dshow" tag="li">
					<img src="/static/img/star.png" alt="">
					<div class="mask"></div>
				</router-link>
				<router-link to="/zuma" tag="li">
					<img src="/static/img/zuma.jpg" alt="">
					<div class="mask"></div>
				</router-link>
				<router-link to="/saolei" tag="li">
					<img src="/static/img/pic.jpg" alt="">
					<div class="mask"></div>
				</router-link>
				<!-- <router-link to="/saolei" tag="li">
					<img src="/static/img/case2/food1.png" alt="">
					<div class="mask"></div>
				</router-link> -->
				<router-link to="/saolei" tag="li">
					<img src="/static/img/case3/bg1.jpg" alt="">
					<div class="mask"></div>
				</router-link>
				<router-link to="/saolei" tag="li">
					<img src="/static/img/1.jpg" alt="">
					<div class="mask"></div>
				</router-link>
				<router-link to="/other" tag="li">
					<img src="/static/img/360.jpg" alt="">
					<div class="mask"></div>
				</router-link>
				<router-link to="/other" tag="li">
					<img src="/static/img/520.jpg" alt="">
					<div class="mask"></div>
				</router-link>
			</ul>
		</div>
		<div id="mask">
			<p>
				对不起，您的浏览器版本过低，请升级您的浏览器或者使用标准浏览器，如：谷歌浏览器打开本站，对您造成的不便相当抱歉！！！
			</p>
		</div>
		<router-link id="toMsg" to="/message">留言板</router-link>
		<audio id="audio1" src="/static/media/zenyang.mp3" preload="false"></audio>
	</div>
</template>

<script>
import init from '@/assets/js/index'

function head(){
	var dW = document.documentElement.getBoundingClientRect().width
	if(dW<900){
		$('#header').find('h1').html('欢迎');
	}else if(dW<1600){
		$('#header').find('h1').html('欢迎大家来到DDS的个人站');
	}else{
		$('#header').find('h1').html('欢迎大家来到DDS的个人站！点击下面的图片，可以发现一些新东西哦!');
	}
}
export default {
	mounted(){
		setTimeout(init,50)
		head()
		$(window).on('resize.head',head)
	},
	destroyed(){
		$(window).off('resize.head')
		$('#header').find('h1').html('欢迎大家来到DDS的个人站');
	},
	methods:{
		displayPic(){

		}
	}
}
</script>

<style>
#dds_index {background: url(/static/img/star2.jpg);}

</style>