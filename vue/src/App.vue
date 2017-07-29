<template>
  <div id="app">
	<div class="log_mask">
		<div id="log">
			<a href="javascript:;" class="del">x</a>
			<h2>DDS个人站登录页面</h2>
			<form id="form"> 
			   <span class="word txt_left">用户名:<input class="text_wrap" id="user" type="text"></span>
			   <p class="error error_user">请输入用户名</p>
			   <br><br>
			   <span class="word txt_left">密码：<input class="text_wrap" id="pass" type="password"></span>
			   <p class="error password">请输入6-8位密码</p>
			   <br><br>
			   <div class="reg_mask">
			   		<span class="word txt_left">确认密码：<input class="text_wrap" id="passd" type="password" name="email"></span>
			   		<p class="error passsure"></p>
				   <br><br>
				   <span class="word txt_left">邮箱：<input class="text_wrap" type="text" id="mail"></span>
				   <p class="error mailerror"></p>
				   <br><br>
				   <span class="word">性别：</span>
				   <input type="radio" name="gender" value="female"><span class="sex">女性</span>
				   <input id="sex" type="radio" checked name="gender" value="male"><span class="sex">男性</span>
				   <br><br>
			   </div>
				   
			   <div class="sure">
				   <span>验证码</span>
					<div id="sure_wrap">
						<img class="sure_img" src="/static/img/circle.png" id="sure_pic"></img>
						<img class="sure_img" src="/static/img/circle2.png" id="sure"></img>
					</div>
				   <p>拖动按钮使其滑动到图片缺口部分</p>
			   </div> 
			   
			   <input type="button" id="reg_btn" class="reg_show" value="注册"> 
			   <input type="button" id="submit" value="登录"> 
			</form>
		</div>
	</div>
		
	<div v-if="show" id="header">
		<router-link id="backIndex" to="/index"  v-show="showBack">返回首页</router-link>
		<h1>欢迎大家来到DDS的个人网站！</h1>
		<div class="head_right">
			<ul>
				<li id="log_text"><span>您好，请登录</span><a href="#"></a></li>
				<li><a id="login" href="javascript:;">登录</a></li>
				<li><a id="reg" href="javascript:;">注册</a></li>
				<li><a id="quit" href="javascript:;">退出</a></li>
			</ul>
		</div>
	</div>
	   	
	<transition mode="out-in">
		<router-view></router-view>
	</transition>
	
  </div>
 </div>

  
</template>
	
<script>
require('jquery')
import init from '@/assets/js/main'
import {mapState} from 'vuex'

export default {
	 data(){
	 	return {
	 		show:true,
	 		//showBack:false
	 	}
	 },
	 watch:{
	 	$route(to,from){
	 		this.show = to.meta.admin?false:true
	 		to.path=='/index'?this.$store.commit('hideBtn'):this.$store.commit('showBtn')		
	 	}

	 },
	 /*computed:{
	 	showBack(){
	 		return this.$store.state.showBack
	 	}
	 },*/
	 computed:mapState(['showBack']),
	 mounted(){
	 	setTimeout(init,50)
	 },
	 created(){
	 	this.show = this.$route.meta.admin?false:true
	 }
}
</script>

<style>
.v-enter {opacity: 0;}
.v-enter-to {opacity: 1;}
.v-enter-active {transition: .5s;}
.v-leave {opacity: 1;}
.v-leave-to {opacity: 0;}
.v-leave-active {transition: .5s;}

#backIndex {height: 40px;line-height: 40px;width: 100px;text-align: center;color: #fff;position: absolute;left: 250px;top: 20px;background-color: #3F0B59;border-radius: 20px;opacity: .8;}
#backIndex:hover {opacity: 1;}
</style>