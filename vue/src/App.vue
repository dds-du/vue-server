<template>
  <div id="app">
	<div class="log_mask">
		<div id="log">
			<a href="javascript:;" class="del">x</a>
			<h2>DDS个人站登录页面</h2>
			<form id="form"> 
			   <span class="word">用户名</span>：<input id="user" type="text" name="name">
			   <p class="error error_user">请输入用户名</p>
			   <br><br>
			   <span class="word">密码：</span><input id="pass" type="password" name="pass">
			   <p class="error password">请输入6-8位密码</p>
			   <br><br>
			   <div class="reg_mask">
			   		<span class="word">确认密码：</span><input id="passd" type="password" name="email">
			   		<p class="error passsure"></p>
				   <br><br>
				   <span class="word">邮箱：</span><input type="text" id="mail">
				   <p class="error mailerror"></p>
				   <br><br>
				   <span class="word">性别：</span>
				   <input type="radio" name="gender" value="female">女性
				   <input id="sex" type="radio" checked name="gender" value="male">男性
				   <br><br>
			   </div>
				   
			   <div class="sure">
				   <span>验证码</span>
				   <input id="sure_text" type="text" name="sure">
				   <img src="#" id="sure"></img>
				   <p>看不清？点击图片换一张</p>
			   </div> 
			   
			   <input type="button" id="reg_btn" class="reg_show" value="注册"> 
			   <input type="button" id="submit" value="登录"> 
			</form>
		</div>
	</div>
		
	<div v-show="show" id="header">
		<router-link id="backIndex" to="/index"  v-if="showBack">返回首页</router-link>
		<h1>欢迎大家来到DDS的个人网站！</h1>
		<div class="head_right">
			<ul>
				<li id="log_text"><span>您好，请登录</span><a href="#"></a></li>
				<li><a id="login" href="javascript:;">登录</a></li>
				<li><a id="reg" href="javascript:;">注册</a></li>
				<li><a id="quit" href="javascript:;">退出</a></li>
				<li><a id="conf" href="api" target="_blank">管理</a></li>
			</ul>
		</div>
	</div>
	   	
	<transition mode="out-in">
		<router-view></router-view>
	</transition>
	
  </div>

   <!--  <router-link exact to="/">主页</router-link>
   <router-link to="/person">个人中心</router-link> -->
 
	
 </div>

  
</template>
	
<script>
require('jquery')

function init (){
var state = null;
var userin = false;
var passin = false;
var passsure = false;
var mailin = false;
var surein = false;

//发送用户信息存储请求
$.ajax({
	url:'/api/userInfo',
	type:'POST',
	data:{index:'userInfo'}
})

//在页面初始化时判定登录状态
$(function(){
	$.ajax({
		url:'/api/init',
		dataType:'json',
		type:'POST',
		data:{'index':'init'},
		success:function(data){
			if(data.num==1){
				$('#log_text').find('span').text('欢迎您，');
				$('#log_text').find('a').text(data.user);
				$('#quit').show();
				$('#login').hide();
				$('#reg').hide();
				$('#conf').show();
			}
		}
	})
});
$(function(){//弹出登录层

	$('#login').click(function(){
		state = 'log';
		$('.log_mask').show();
		$('.reg_mask').hide();
		$('#log').css({height:300});
		$('#submit').show();
		$('#user')[0].focus();
		clear();
		
		var aaa = localStorage.getItem('dds_username');
		if(aaa){
			$('#user').val(aaa);
			$('.error_user').html('');
		}
		

	});
	$('#log').find('.del').click(function(){
		$('.log_mask').hide(200);
	})

	$('#sure').click(function(){
		$(this).attr({src:'/api/sure?'+Date.now()});
	});


});

$(function(){//注册层切换
	$('#reg').click(function(){
		state = 'reg';
		$('.log_mask').show();
		$('#log').css({height:400});
		$('.reg_mask').show();
		$('#submit').hide();
		$('#user')[0].focus();		
		$('#user').val('');
		$('#pass').val('');
		$('#passd').val('');
		$('#mail').val('');
		$('#sure_text').val('');
		$('.error_user').html('');
		
	}); 
	$('.reg_show').click(function(){
		setTimeout(function(){
			state = 'reg';
		},1000);
		
		$('#log').css({height:400});
		$('.reg_mask').show();
		$('#submit').hide();
		if(state == 'log'){
			$('#user').val('');
			$('#pass').val('');
			$('#passd').val('');
			$('#mail').val('');
			$('#sure_text').val('');
		}
		
	});
});

$(function(){//用户名验证

	$('#user').on('keyup',function(){
		userin=false;
	});
	$('#user').on('blur',function(){
		var val = $(this).val();
		var re = /^[\w\u4e00-\u9fa5\.\+\-\*]{3,8}$/;
		if(val==''){
			$('.error_user').css({color:'red'}).html('用户名不能为空');
		}else if(!re.test(val)){
			$('.error_user').css({color:'red'}).html('请输入3-8位用户名');
		}else{
			if(state=='reg'){
				$.ajax({
					url:'/api/name',
					type:'POST',
					data:{'index':'usersure','username':val},
					success:function(data){
						var dt = parseInt(data);
						if(dt==0){
							$('.error_user').css({color:'green'}).html('恭喜您，该用户名可用');
							userin = true;
						}else{
							$('.error_user').css({color:'red'}).html('对不起，该用户名已经注册');
						}
					}
				});
			}else{
				$('.error_user').html('');
				userin = true;
			}
				
		}
	});
	
});
$(function(){//登录
	var user = $('#user').val();
	var pass = $('#pass').val();
	var sure = $('#sure_text').val();
	var re = /^[\w\.\,\+\-\*]{6,12}$/;

	$('#pass').on('keyup',function(){
		passin=false;
	});
	$('#sure_text').on('keyup',function(ev){
		surein=true;
		if(ev.which==13){
			if(state == 'log'){
				$('#submit').trigger('click');
			}else if(state == 'reg'){
				$('#reg_btn').trigger('click');
			}

		}
	});
	$('#pass').on('blur',function(){
		pass = $('#pass').val();
		if(pass==''){
			$('.password').html('密码不能为空');
		}else if(!re.test(pass)){
			$('.password').html('请输入6-12位密码');
		}else{
			$('.password').html('');
			passin = true;
		}
	});


	$('#submit').click(function(){
		user = $('#user').val();
		pass = $('#pass').val();
		sure = $('#sure_text').val();
		if(!surein){
			alert('请输入验证码');
		}else{
			if(!userin||!passin){
				alert('请输入正确的用户名或者密码');
				clear();
			}else{
				$.ajax({
					url:'/api/sureIn',
					type:'POST',
					data:{'index':'sure','code':sure},
					success:function(data){
						var dt = parseInt(data);
						if(dt==0){
							$.ajax({
								url:'/api/login',
								type:'POST',
								data:{'index':'log','username':user,'password':pass},
								dataType:'json',
								success:function(data){
									if(data.num==0){
										//alert(data);
										log_in(data.user);
									}else{
										alert('用户名或者密码错误');
										clear();
									}
								}
							});
						}else{						
							sure_error();
						}
					}
				});

			}
		}
			
	});
});

$(function(){//退出登录

	$('#quit').click(function(){
		if(confirm('你确定要退出吗？')){
			quit();
		}
	})

});

$(function(){//验证确认密码和邮箱输入正确
	var re = /^([\w\-]+\@[\w\-]+\.[\w\-]+)$/;

	$('#passd').on({
		'keyup':function(){
			passsure = false;
		},
		'blur':function(){
			if($(this).val()!=$('#pass').val()){
				$('.passsure').html('两次密码输入不一致');		
			}else{
				$('.passsure').html('');
				passsure = true;
			}
		}
	});

	$('#mail').on({
		'keyup':function(){
			mailin = false;
		},
		'blur':function(){
			if(!re.test($(this).val())){
				$('.mailerror').html('请输入正确的邮箱');		
			}else{
				$('.mailerror').html('');
				mailin = true;
			}
		}
	});

	
});
$(function(){//注册
	
		$('#reg_btn').click(function(){
			if(state=='reg'){
				if(userin&&passin&&passsure&&mailin&&surein){
					var user = $('#user').val();
					var pass = $('#pass').val();
					var mail = $('#mail').val();
					var sure = $('#sure_text').val();
					var sex = $('#sex')[0].checked?1:0;
					$.ajax({
						url:'/api/reg',
						type:'POST',
						data:{'index':'sure','code':sure},
						success:function(data){
							var dt = parseInt(data);
							if(dt==0){
								$.ajax({
									url:'api',
									type:'POST',
									dataType:'json',
									data:{'index':'reg','username':user,'password':pass,'mail':mail,'sex':sex},
									success:function(data){
										if(data.num){
											alert('注册成功！已自动为您登录');
											log_in(data.user);
										}else{
											alert('注册失败');
											clear();
										}
									}
								});
							}else{						
								sure_error();
							}
						}
					});
				}else{
					alert('请输入完整信息后再注册');
					$('#pass').val('');
					$('#passd').val('');
				}
			}		
		});
	
});

function log_in(user){//登录成功
	$('.log_mask').hide();
	$('#log_text').find('span').text('欢迎您，');
	$('#log_text').find('a').text(user);
	$('#quit').show();
	$('#login').hide();
	$('#reg').hide();
	$('#conf').show();
	localStorage.setItem('dds_username',user);
}

function sure_error(){//验证码错误
	alert('验证码错误');
	clear();
}

function quit(){//退出
	$('#quit').hide();
	$('#login').show();
	$('#reg').show();
	$('#conf').hide();
	$('#user').val('');
	$('#pass').val('');
	$('#sure').trigger('click');
	$.ajax({
		url:'/api/quit',
		type:'POST',
		data:{'index':'quit'},
		dataType:'json',
		success:function(data){
			if(data=='0'){
				$('#log_text').find('span').text('您好，请登录');
				$('#log_text').find('a').text('');
			}else{
				alert('错误');
			}
		}

	});
}

function clear(){//清空密码、确认密码、验证码的输入，刷新验证码
	
	$('#pass').val('');
	$('#passd').val('');
	$('#sure_text').val('');
	$('#sure').trigger('click');
}
}
export default {
	 data(){
	 	return {
	 		show:true,
	 		showBack:false
	 	}
	 },
	 watch:{
	 	$route(to,from){
	 		this.show = to.meta.error?false:true
	 		this.showBack = to.path=='/index'?false:true		
	 	}

	 },
	 mounted(){
	 	setTimeout(init,50)
	 },
	 created(){
	 	this.show = this.$route.meta.error?false:true
	 	this.showBack = this.$route.path=='/index'?false:true
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