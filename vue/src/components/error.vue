<template>
  <div id="error">
    <h1>404 not found!</h1>
    <h1>您所请求的页面未找到</h1>
    <h2 style="text-align:center"><span id="time" style="color:red;">5</span>秒后将返回主页</h2>
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
#error h1 {color:red;text-align: center;margin: 50px 0;}

</style>