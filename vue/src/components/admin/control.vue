<template>
  <div>
   <h1 class="text-center">登录信息</h1>
   <div class="container">
   	<div class="row">
   		<div class="col col-lg-10 col-lg-offset-1">
   			<table class="table table-bordered table-striped" data-toggle="table">
   				<tbody>
   					<tr>
				   		<th width="100">序号</th>
				   		<th width="400">用户配置信息</th>
				   		<th width="100">用户ip</th>
				   		<th width="120">时间</th>
				   		<th width="100">操作</th>
				   	</tr>
				   	<tr v-for="item of userInfo">
				   		<th>{{item.i_id}}</th>
				   		<th>{{item.i_useragent}}</th>
				   		<th>{{item.i_ip}}</th>
				   		<th>{{item.i_time}}</th>
				   		<th><a href="javascript:;">删除</a></th>
				   	</tr>
   				</tbody>
				   	
		   </table>
   		</div>
   	</div>
   </div>
		   
  </div>
</template>

<script>
let moment = require('moment')
export default {
	data(){
		return {
			userInfo:[]
		}
	},
	created(){
		$.ajax({
			type:'GET',
			url:'/api/user',
			dataType:'json',
			success:(data)=>{
				this.userInfo=data
				
				for (let item of this.userInfo){
					item.i_time = item.i_time.replace(/T|\.000Z/g,' ')
				}
			}
		})
	}
}
</script>

<style>
table * {text-align: center;}
{
	
}
</style>