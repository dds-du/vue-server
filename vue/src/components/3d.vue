<template>
  <div class="main_wrap" id="show3D">
   		<div class="since">
			<div class="box">
				<ul class="word">			
				</ul>
			</div>
			<div class="item">
				<p class="con">
					欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 
				</p>
				<a href="javascript:;">x</a>
			</div>
		</div>
		<ul class="table">
			<li><a class="active" href="javascript:;">圆球</a></li>
			<li><a href="javascript:;">圆柱</a></li>
			<li><a href="javascript:;">圆锥</a></li>
			<li><a href="javascript:;">扭曲圆柱</a></li>
		</ul>
		<div class="line"></div>
		<div class="btn">
			<a href="javascript:;" class="left">展开</a>
			<a href="javascript:;" class="right">自定义文字</a>
		</div>
		<div class="txt">
			<p>在下面输入自己的文字:(建议：50~250字)</p>
			<textarea></textarea>
			<a class="btn1">提交</a>
			<a class="btn2">重置</a>
			<a class="close" href="javascript:;"></a>
		</div>
  </div>
</template>

<script>
function init(){
	var obj = document.getElementById('show3D')
	var oUl = obj.getElementsByClassName('word')[0];
	var oCon = obj.getElementsByClassName('con')[0];
	var alf = 0;
	var beta = 0; //初始化角度	 
	var radX = 1;
	var radY = 0;
	var tab = 0; //图形选择初始化
	var color = ['red','yellow','green','blue','pink','#514646'];
	var timer = null;
	var txt = '欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 ';
	
	//页面按钮相关DOM操作
	
	//展开按钮
	$('.btn .left').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.item').show(500);
		$('.txt').hide(500);
		$('.box').hide(300);
	});

	//字体层的关闭按钮
	$('.item a').click(function(){
		$('.item').hide(500);
		$('.btn .left').removeClass('active');
		$('.box').show(300);
	});

	//自定义文字按钮
	$('.btn .right').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.txt').show(500);
		$('.item').hide(500);
	});

	//自定义输入框关闭
	$('.txt .close').click(function(){
		$('.txt').hide(500);
		$('.btn .right').removeClass('active');
		$('.box').show(300);
	});

	//提交按钮
	$('.txt .btn1').click(function(){
		var $txtara = $('.txt textarea');
		if($txtara.val() != ''){
			txt = $txtara.val();
			$('.item p').html($txtara.val());
			$('.txt .close').trigger('click');
			$('.word').html('');
			circle();
			changeColor();
			$('.txt textarea').val('');
			$('.word').hide(300).delay(300).show(300);
		}else{
			alert('请输入文字');
		}
	});

	//重置按钮
	$('.txt .btn2').click(function(){
		$('.txt textarea').val('');
	});

	//变换形状
	$('.table').delegate('a','click',function(){
		
		$('.table a').attr('class','');
		$(this).attr('class','active');
		var index = $(this).parent().index();
		
		if(index != tab){
			
			switch (index) {
				case 0:
					$('.word').hide(300).delay(300).show(300);
					setTimeout(function(){
						$('.word').html('');
						circle();
						changeColor();
					},300)
					break;
				case 1:
					$('.word').hide(300).delay(300).show(300);
					setTimeout(function(){
						$('.word').html('');
						col();
						changeColor();
					},300)
					break;
				case 2:
					$('.word').hide(300).delay(300).show(300);
					setTimeout(function(){
						$('.word').html('');
						cone();
						changeColor();
					},300)
					break;
				case 3:
					$('.word').hide(300).delay(300).show(300);
					setTimeout(function(){
						$('.word').html('');
						obq();
						changeColor();
					},300)
					break;
			}

			tab = index;
		}
	});

	//页面初始时球体运动
	circle();
	changeColor();
	function changeColor (){
		var aLi = oUl.children;
		for (var i = 0; i < aLi.length; i++) {
			aLi[i].style.color = color[i%6];
		}
	}

	//球体
	function circle(){	
		var num = 0;
		var it = -1;
		var layer = 0;	
		//通过字数计算球体层数
		for(var i=4;i<12;i++){
			if(i*i+(i+1)*(i+1)>txt.length){
				layer = 2*i-1;
				break;
			}
			
		}
		
		//给ul添加字体，并添加与其位置相关的自定义属性
		var arr = txt.substring(0,(i-1)*(i-1)+i*i).split('');
		alf = Math.PI/(layer-1);
		for(var i=0;i<layer;i++){
			if(i<=(layer-1)/2){
				it += 2;
			}else{
				it -= 2;
			}
			beta = 2*Math.PI/it;
			for(var j=0;j<it;j++){
				var oLi = document.createElement('li');
				oLi.innerHTML = arr[num];
				num++;
				coord(oLi,alf,beta,i,j);
				oUl.appendChild(oLi);
			}
		}
		
		//将字移动到球体的相应位置，并旋转使其朝向圆心
		var aLi = oUl.getElementsByTagName('li');
		for(i=0;i<aLi.length;i++){
			aLi[i].style.transform = 'translate3d('+ aLi[i].cirX + 'px,' + aLi[i].cirY + 'px,' + aLi[i].cirZ + 'px) rotateX(' + aLi[i].alf + 'rad) rotateY(' + aLi[i].beta + 'rad)';
			//
		}

	}

	//圆柱
	function col(){	
		var layer = 15;
		var num = 0;
		var it = 0;	
		//通过字数计算柱体层数
		for(var i=3;i<15;i++){
			if(i*layer>txt.length){
				it = i-1;
				break;
			}	
		}
		
		//给ul添加字体，并添加与其位置相关的自定义属性
		var arr = txt.substring(0,layer*it).split('');
		alf = 2*Math.PI/it;

		for(var i=0;i<layer;i++){
			for(var j=0;j<it;j++){
				var oLi = document.createElement('li');
				oLi.innerHTML = arr[num];
				num++;
				coord(oLi,alf,layer,i,j);
				oUl.appendChild(oLi);
			}
		}
		
		//将字移动到球体的相应位置，并旋转使其朝向圆心
		var aLi = oUl.getElementsByTagName('li');
		
		for(i=0;i<aLi.length;i++){
			aLi[i].style.transform = 'translate3d('+ aLi[i].colX + 'px,' + aLi[i].colY + 'px,' + aLi[i].colZ + 'px) rotateY(' + aLi[i].colAlf + 'rad)';
		}
	}

	//圆锥
	function cone(){	
		var layer = 0;
		var num = 0;
		var it = 1;	
		//通过字数计算柱体层数
		for(var i=6;i<15;i++){
			if(i*i>txt.length){
				layer = i-1;
				break;
			}	
		}
		
		//给ul添加字体，并添加与其位置相关的自定义属性
		var arr = txt.substring(0,layer*layer).split('');

		for(var i=0;i<layer;i++){
			alf = 2*Math.PI/it;
			it += 2;
			for(var j=0;j<it-2;j++){
				var oLi = document.createElement('li');
				oLi.innerHTML = arr[num];
				num++;
				coord(oLi,alf,layer,i,j);
				oUl.appendChild(oLi);
			}
		}
		
		//将字移动到球体的相应位置，并旋转使其朝向圆心
		var aLi = oUl.getElementsByTagName('li');
		
		for(i=0;i<aLi.length;i++){
			aLi[i].style.transform = 'translate3d('+ aLi[i].coneX + 'px,' + aLi[i].coneY + 'px,' + aLi[i].coneZ + 'px) rotateY(' + aLi[i].colAlf + 'rad)  rotateX(' + aLi[i].coneAlf + 'rad)';
			
		}
	}

	//斜柱
	function obq(){	
		var layer = 15;
		var num = 0;
		var it = 0;	
		//通过字数计算柱体层数
		for(var i=3;i<15;i++){
			if(i*layer>txt.length){
				it = i-1;
				break;
			}	
		}
		
		//给ul添加字体，并添加与其位置相关的自定义属性
		var arr = txt.substring(0,layer*it).split('');
		alf = 2*Math.PI/it;

		for(var i=0;i<layer;i++){
			for(var j=0;j<it;j++){
				var oLi = document.createElement('li');
				oLi.innerHTML = arr[num];
				num++;
				coord(oLi,alf,layer,i,j);
				oUl.appendChild(oLi);
			}
		}
		
		//将字移动到球体的相应位置，并旋转使其朝向圆心
		var aLi = oUl.getElementsByTagName('li');
		
		for(i=0;i<aLi.length;i++){
			aLi[i].style.transform = 'translate3d('+ aLi[i].obqX + 'px,' + aLi[i].obqY + 'px,' + aLi[i].obqZ + 'px) rotateY(' + aLi[i].obqAlf + 'rad)';
		}
	}
	//计算鼠标速度
	$('.box').on('mousedown',function(ev){		
		var disX = ev.pageX;
		var disY = ev.pageY;
		var dragX = 0;
		var dragY = 0;
		var lastX = disX;
		var lastY = disY; 
		var speedX = 0;
		var speedY = 0;
		
		clearInterval(timer);

		$(document).on('mousemove',function(ev){
			dragX = (ev.pageX-disX);
			dragY = (ev.pageY-disY);
			
			oUl.style.transform = 'rotateY(' + (radX + dragX) + 'deg) rotateX(' + (radY - dragY) + 'deg)';

			speedX = ev.pageX - lastX;
			speedY = ev.pageY - lastY;

			lastX = ev.pageX;
			lastY = ev.pageY;

			return false;
		});

		$(document).on('mouseup',function(){
			$(document).off();

			radX += dragX;
			radY -= dragY;
			timer = setInterval(function(){
				radX += speedX*2;
				radY -= speedY*2;
				oUl.style.transform = 'rotateY(' + radX + 'deg) rotateX(' + radY + 'deg)';
			},30);

		});
	});
	

	//旋转球体
	timer = setInterval(function(){
		radX++;
		oUl.style.transform = 'rotateY(' + radX + 'deg) rotateX(' + radY + 'deg)';
	},30);

	//计算字体位置的函数
	function coord(obj,alf,beta,i,j){
		var r = 150; //球体半径
		var cR = 80; //柱体半径
		var h =300; //柱体高度

		//在球体中的位置
		obj.cirX = r*Math.sin(alf*i)*Math.cos(beta*j)+200;
		obj.cirY = r*Math.sin(alf*i)*Math.sin(beta*j)+200;
		obj.cirZ = r*Math.cos(alf*i);		
		obj.alf =alf*i;
		obj.beta =beta*j+Math.PI/2;
	
		//在柱体中的位置
		obj.colX = cR*Math.sin(alf*j)+200;
		obj.colY = h*i/beta+40;
		obj.colZ = cR*Math.cos(alf*j);
		obj.colAlf = alf*j;

		//在椎体中的位置
		obj.coneX = r*(i/beta)*Math.sin(alf*j)+200;
		obj.coneY = h*i/beta+40;
		obj.coneZ = r*(i/beta)*Math.cos(alf*j);
		obj.coneAlf = Math.atan(r/h);

		//在斜柱体中的位置
		obj.obqX = cR*Math.sin(alf*j+Math.PI/beta*i/2)+200;
		obj.obqY = h*i/beta+40;
		obj.obqZ = cR*Math.cos(alf*j+Math.PI/beta*i/2);
		obj.obqAlf = alf*j+Math.PI/beta*i/2;
	}
}
export default {
 mounted(){
 	setTimeout(init,100)
 }
}
</script>

<style>
#show3D { background: repeating-linear-gradient(90deg,blue 0%,#d4d57c 20%,green 40%,blue 60%); }
{
	
}
</style>