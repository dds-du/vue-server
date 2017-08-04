<template>
  <div class="container-fluid">
    <div class="jumbotron">
	  <h1>欢迎来到后台管理页面</h1>
	  <h3>这是您的后台管理列表.</h3>
		</div>
			<div class="container-fluid">
			<!-- Brand and toggle get grouped for better mobile display -->
			<ul class="nav nav-pills">
			  <li role="presentation"><router-link exact to="/admin/control">登录信息管理</router-link></li>
			  <li role="presentation"><router-link to="/admin/person">用户信息管理</router-link></li>
			</ul>
			<transition mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
require('jquery')
require('@lib/js/bootstrap.min.js')
export default {
 
}
</script>
<style>
	@import url(./../libs/css/bootstrap.min.css);
	@import url(./../libs/css/bootstrap-theme.min.css);
</style>

