<template>
	<div class="main_wrap" id="dds_index">
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
				<router-link to="/saolei" tag="li">
					<img src="/static/img/case2/food1.png" alt="">
					<div class="mask"></div>
				</router-link>
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
function init(){

	if (document.attachEvent) {
		document.attachEvent('onreadystatechange', function () {
	        if(document.readyState=="complete") {
	            document.detachEvent("onreadystatechange", arguments.callee);
	     		callback();
	   		}
		})
	}else if (document.lastChild == document.body) {
	    callback();
	}

	function callback(){
		//在ie6789下，拒绝访问
		var user = navigator.userAgent;
		
		if(/IE [6789]/.test(user)){
			document.getElementById('mask').style.display = 'block';
		}
	}

	var oBox = document.getElementById('box');
	var aImg = oBox.getElementsByTagName('li');
	var rap = document.getElementById('wrap');
	var timer = null;
	var rapRot = 0;
	var onoff = true;

	var len = aImg.length;
	for (var i = 0; i < len; i++) {
		aImg[i].style.transition = '2s '+ .5*i +'s';
		aImg[i].index = i;
	}
	for (var i = 0; i < len; i++) {
		coor(aImg[i],i);
	}
	
	function coor(obj,i){//计算角度，确定位置与偏移量
		var r = 300;

		obj.style.transform = 'translateX('+ (r*Math.cos(2*Math.PI/len*i)+390) +'px) translateZ('+ r*Math.sin(2*Math.PI/len*i) +'px) rotateY('+ (2*Math.PI/len*(len-i)+Math.PI/2) +'rad)  rotateX(0rad)';
	}	
	
	
	//判定初始化时鼠标是否在图片墙内
	rap.addEventListener('mouseenter',ent);
	rap.addEventListener('mouseleave',lea);
	function ent () {
		onoff = false;
	}
	function lea () {
		onoff = true;
	}

	
	aImg[len-1].addEventListener('transitionend',init);
	function init(){//页面初始化
		for (var i = 0; i < len; i++) {
			aImg[i].style.transition = 'none';
		}
		aImg[len-1].removeEventListener('transitionend',init);	
		
		rap.onmouseover = function(ev){//移入停止旋转
			if(ev.target.nodeName==='DIV'){
				ev.target.style.opacity = 0;
			}	
			clearInterval(timer);
		}

		rap.onmouseout = function(ev){//移出开始旋转
			if(ev.target.nodeName==='DIV'){
				ev.target.style.opacity = '.2';
			}	
			timer = setInterval(function(){
				rapRot -= 1;
				rap.style.transform = 'rotateY('+ rapRot +'deg)';
			},30);
		}
		
		if(onoff){//在图片位置确定后旋转图片墙
			timer = setInterval(function(){
				rapRot -= 1;
				rap.style.transform = 'rotateY('+ rapRot +'deg)';
			},30);
		}
		rap.removeEventListener('mouseenter',ent);
		rap.removeEventListener('mouseleave',ent);
	}

	var zy = document.getElementById('audio1');
	zy.play();
}

/*function headSet(){//调整头部字的数量
	
	//window.onresize=head;
}*/

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
	}
}
</script>

<style>
#dds_index {background: url(/static/img/star2.jpg);}

</style>