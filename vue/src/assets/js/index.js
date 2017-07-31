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
	var disP = document.getElementById('index_display');
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

	$('#box li').hover(function(){
		$(this).find('div').css({opacity:0})
	},function(){
		$(this).find('div').css({opacity:.2})
	})
	
	aImg[len-1].addEventListener('transitionend',init);
	function init(){//页面初始化
		aImg[len-1].removeEventListener('transitionend',init);	
		
		rap.onmouseover = function(ev){//移入停止旋转
			clearInterval(timer);
		}

		rap.onmouseout = function(ev){//移出开始旋转
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

	disP.onclick = function(){
		clearInterval(timer);
		aImg[len-1].removeEventListener('transitionend',init);
		rap.onmouseout=rap.onmouseover=null;
		
		rapRot %= 360;
		rap.style.transform = 'rotateY('+ rapRot +'deg)';
		setTimeout(function(){
			rap.style.transition = '.5s';
			rap.style.transform = 'none';
		},50)
		
		for (var i = 0; i < len; i++) {
			back(aImg[i],i);
		}
	}

	function back(obj,i){//计算角度，确定位置与偏移量
		var r = 300;
		var col = 4;
		var x = i%col;
		var y = Math.floor(i/col);
		obj.style.transform = 'translateX('+ (x*200) +'px) translateY('+ (y*320-100) +'px)';
	}	

	var zy = document.getElementById('audio1');
	zy.play();
}
export default init