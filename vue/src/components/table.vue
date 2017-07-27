<template>
  <div class="container">
   	<div class="row">
   		<div class="col col-lg-10 col-lg-offset-1">
   			<table class="table table-bordered table-striped" data-toggle="table">
   				<tbody>
   					<tr>
   						<th :width="item.wid" v-for="item of header">{{item.title}}</th>
				   	</tr>
				   	<tr v-for="item,index of data">
				   		<th v-for="(val,key) of item">{{val}}</th>
				   		<th><a @click="del(item.i_id,index)" href="javascript:;">删除</a></th>
				   	</tr>
   				</tbody>
				   	
		   </table>
   		</div>
  	</div>

  	<nav class="text-center" style="padding-bottom:50px;" aria-label="Page navigation">
	  <ul class="pagination">
	    <li>
	      <a @click="prev" href="javascript:;" aria-label="Previous">
	        <span aria-hidden="true">&laquo;</span>
	      </a>
	    </li>

	    <li :class="[item==pageNow?'active':'']" v-for="item of page"><a @click="changePage(item)" href="javascript:;">{{item}}</a></li>
	   
	    <li>
	      <a @click="next" href="javascript:;" aria-label="Next">
	        <span aria-hidden="true">&raquo;</span>
	      </a>
	    </li>
	  </ul>
	</nav>
  </div>
</template>

<script>
export default {
	data(){
		return {
			pageNum:12,
			pageNow:1
		}
	},
 	props:{
 		header:{
 			type:Array,
 			default(){
 				return []
 			}
 		},
 		userInfo:{
 			type:Array,
 			default(){
 				return []
 			}
 		}
 	},
 	computed:{
 		data(){
 			let start = (this.pageNow-1)*this.pageNum
 			let over = start+this.pageNum
 			over=Math.min(this.userInfo.length,over)
 			let arr = []
 			for (let i=start;i<over;i++){
 				arr.push(this.userInfo[i])
 			}
 			return arr
 		},
 		page(){
 			let total = Math.ceil(this.userInfo.length/this.pageNum)

 			let arr = []
 			for(let i=0;i<total;i++){
 				arr.push(i+1)
 			}

 			return arr
 		}
 	},
 	methods:{
 		changePage(page){
 			this.pageNow = page
 		},
 		prev(){
 			if(this.pageNow==1)return
 			this.pageNow--
 		},
 		next(){
 			if (this.pageNow==Math.ceil(this.userInfo.length/this.pageNum))return
 			this.pageNow++
 		},
 		del(id,index){
 			let _this=this
 			if(confirm('确定要删除此数据?')){
 				$.ajax({
 					type:'POST',
 					url:'/api/del',
 					data:{id:id},
 					success:function(){
 						_this.userInfo.splice(index,1)
 					}
 				})
 			}
 		}
 	}
}
</script>

<style>
table * {text-align: center;}
{
	
}
</style>