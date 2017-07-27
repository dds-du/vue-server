<template>
  <div>
   <h1 class="text-center">用户信息</h1> 
   <dds-table :userInfo="data" :header="headInfo"></dds-table>
  </div>
</template>

<script>
let headInfo = [
				{
					title:'序号',
					wid:100
				},
				{
					title:'用户名',
					wid:100
				},
				
				{
					title:'邮箱',
					wid:200
				},
				{
					title:'性别',
					wid:100
				},
				{
					title:'注册时间',
					wid:150
				},
				{
					title:'最后登录时间',
					wid:150
				},
				{
					title:'最后登录IP',
					wid:100
				},
				{
					title:'权限',
					wid:100
				},
				{
					title:'操作',
					wid:100
				}
			]
export default {
	data(){
		return {
			data:[],
			headInfo
		}
	},
	created(){
		$.ajax({
			type:'POST',
			url:'/api/userlist',
			dataType:'json',
			success:(data)=>{
				this.data=data
				for (let item of this.data){
					item.u_birth = item.u_birth.replace(/T|\.000Z/g,' ')
					item.u_lasttime = item.u_lasttime.replace(/T|\.000Z/g,' ')
					item.u_sex = item.u_sex==1?'男':'女'
				}
			}
		})
	}
}
</script>

<style>
{
	
}
</style>