<template>
  <div class="container">
    <div class="jumbotron">
	  <h1>欢迎来到后台管理页面</h1>
	  <p>这是您的后台管理列表.</p>
	  <div class="container-fluid">
		    <!-- Brand and toggle get grouped for better mobile display -->
		    <ul class="nav nav-pills">
			  <li role="presentation"><router-link exact to="/">主页</router-link></li>
			  <li role="presentation"><router-link to="/person">个人中心</router-link></li>
			</ul>
	   	

			<transition mode="out-in">
				<router-view></router-view>
			</transition>
	
	   	</div>
	</div>
  </div>
</template>

<script>
export default {
 
}
</script>

<style>

{
	
}
</style>