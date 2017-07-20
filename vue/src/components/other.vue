<template>
  <div id="other" class="main_wrap">
    <h1>感谢来到DDS的个人站</h1>
	<p>站长正在努力开发中，更多内容，敬(yao)请(yao)期(wu)待(qi)!</p>
	<p>有什么意见或者建议，请e-mail至我的邮箱348518691@qq.com</p>
	<h2 style="color:#fff;text-align:center"><span id="time" style="color:red;">5</span>秒后将返回主页</h2>
  </div>
</template>

<script>
function init(){
	var t = document.getElementById('time')
	var num = 5
	setInterval(function(){
		num--
		num==-1?num=0:1
		t.innerHTML=num
	},1000)
}
export default {
 mounted(){
 	setTimeout(init,50)
 	setTimeout(()=>{
		this.$router.push({path:'/index'})
	},5000)
 }
}
</script>

<style>
#other { margin: 0; background: #000;}
h1 { font-size: 60px;height: 100px;line-height: 100px;color: #fff; }
p { font-size: 40px;height: 100px;line-height: 100px;color: #fff; }
{
	
}
</style>