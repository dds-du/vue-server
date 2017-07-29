<template>
  <div>
   		<h1 class="text-center">登录信息</h1>
   		<dds-table :info="userInfo" :header="header"></dds-table>
   </div>
		   
</template>
<script>
let headInfo = [
				{
					title:'序号',
					wid:100
				},
				{
					title:'用户信息',
					wid:400
				},
				{
					title:'用户ip',
					wid:100
				},
				{
					title:'时间',
					wid:120
				},
				{
					title:'操作',
					wid:100
				}
			]
export default {
	data(){
		return {
			userInfo:[],
			header:headInfo
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

{
	
}
</style>