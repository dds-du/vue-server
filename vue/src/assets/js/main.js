function init (){
var state = null;
var userin = false;
var passin = false;
var passsure = false;
var mailin = false;
var surein = false;
var main_sure = 0;

//发送用户信息存储请求
$.ajax({
	url:'/api/userInfo',
	type:'POST',
})

//发送请求获取验证码cookie
getSure()
function getSure(){
	
	$.ajax({
		type:'GET',
		url:'/api/sure',
		success:function(data){
			main_sure = Number(data)
			$('#sure_pic').css({left:main_sure})
		},
		error:function(err){
			alert(err)
		}
	})
	surein = false
	$('.sure p').html('拖动按钮使其拖动到图片重合').css({color:'yellow'})
	$('#sure').css({left:0})
}
	
//发送滑动验证码
$(function(){
	$('#sure').on('mousedown',function(ev){
		var disX = ev.pageX
		$(document).on('mousemove',function(ev){
			var l = ev.pageX-disX
			l=Math.min(l,200)
			l=Math.max(l,0)
			$('#sure').css({left:l})

			return false
		})

		$(document).on('mouseup',function(ev){
			$(document).off('mousemove').off('mouseup')
			
			Math.abs(parseInt($('#sure').css('left'))-main_sure)<5?fnSuc():fnErr()
		})
	})
})
function fnSuc(){
	$('.sure p').html('恭喜您，验证成功').css({color:'#7bf6ac'})
	surein=true
}
function fnErr(){
	alert('对不起，验证失败')
	window.location.reload()
}

//在页面初始化时判定登录状态
$(function(){
	$.ajax({
		url:'/api/init',
		dataType:'json',
		type:'POST',
		success:function(data){
			if(data.num==1){
				console.log(data.user)
				$('#log_text').find('span').text('欢迎您，');
				$('#log_text').find('a').text(data.user);
				$('#quit').show();
				$('#login').hide();
				$('#reg').hide();
				$('#conf').show();
			}
		}
	})
})

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
		getSure()

	});
	$('#log').find('.del').click(function(){
		$('.log_mask').hide(200);
	})
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

		getSure()
		
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
			$('.error_user').css({color:'yellow'}).html('用户名不能为空');
		}else if(!re.test(val)){
			$('.error_user').css({color:'yellow'}).html('请输入3-8位用户名');
		}else{
			if(state=='reg'){
				$.ajax({
					url:'/api/name',
					type:'POST',
					data:{'username':val},
					success:function(data){
						var dt = parseInt(data);
						if(dt==0){
							$('.error_user').css({color:'green'}).html('恭喜您，该用户名可用');
							userin = true;
						}else{
							$('.error_user').css({color:'yellow'}).html('对不起，该用户名已经注册');
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
					url:'/api/login',
					type:'POST',
					data:{'index':'log','username':user,'password':pass},
					dataType:'json',
					success:function(data){
						if(data=='1'){
							//alert(data);
							log_in(user);
						}else{
							alert('用户名或者密码错误');
							clear();
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
						dataType:'json',
						data:{'username':user,'password':pass,'mail':mail,'sex':sex},
						success:function(data){
							if(data=='1'){
								alert('注册成功！已自动为您登录');
								log_in(user);
							}else{
								alert('注册失败');
								clear();
							}
						}
					})
							
				
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
export default init