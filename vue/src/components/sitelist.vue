<template>
  <div id="site" class="main_wrap">
    <h2>私人收藏的前端站点</h2>
    <ul class="list">
    	<li v-for="item,index of siteList">
    		<a @dblclick="dbl($event,item.s_id)" v-show="item.s_id!=edSite" :href="item.s_url" target="blank">{{item.s_title}}</a>
    		<input @keyup.enter="changeCont" @blur="changeCont" v-show="item.s_id==edSite" type="text" v-model="item.s_title">
    		<button @click="del(item.s_id,index)">删除</button>
    		<p v-show="item.s_id!=edSite">{{item.s_text}}<span class="trangle"></span></p>
    	</li>
    </ul>
    <button @click.stop="add" id="s_add">添加一条</button>
    <transition model="out-in">
    	<div @click.stop="preDe" v-show="addShow" class="mask">
	    	<form id="form1">
	    		<label ref="title" for="s_title">网站标题:</label><input id="s_title" name="s_title" type="text">
	    		<label for="s_title">网站地址:</label><input id="s_url" name="s_url" type="text">
	    		<label for="s_title">网站说明:</label><input id="s_text" name="s_text" type="text">
	    		<input @click="sub" id="s_sub" type="button" value="提交">
	    	</form>
	    </div>
    </transition>
	    
  </div>
</template>

<script>
export default {
	data(){
		return {
			siteList:[],
			addShow:false,
			edSite:0
		}
	},
	created(){
		let _this = this
		$.ajax({
			url:'/api/siteList',
			type:'POST',
			dataType:'json',
			success:function(data){
				_this.siteList=data
			}
		})
	},
	mounted(){
		let _this = this
		window.document.onclick=function(){
			_this.addShow=false
		}
	},
	computed:{

	},
	methods:{
		dbl(ev,id){
			console.log(ev.target.parentNode.children[1])
			setTimeout(()=>{ev.target.parentNode.children[1].focus()},50)
			this.edSite=id
		},
		add(){
			this.addShow=true
			setTimeout(()=>{this.$refs.title.focus()},50)
		},
		del(id,index){
			let _this = this
			$.ajax({
				url:'/api/siteDel',
				type:'POST',
				data:{id:id},
				success:function(data){
					console.log(data)
					if(data=='1'){
						alert('删除成功')
						_this.siteList.splice(index,1)
					}else{
						alert('对不起，只有管理员可以修改此选项')
					}
				}
			})
		},
		sub(){
			let _this = this
			let s_title = $('#s_title').val()
			let s_url = $('#s_url').val()==''?'javascript:;':$('#s_url').val()
			let s_text = $('#s_text').val()
			console.log(s_title)
			if (s_title==''||s_text==''){
				alert('请输入内容后再提交')
				return
			}
			$.ajax({
				url:'/api/siteAdd',
				type:'POST',
				data:{s_title,s_url,s_text},
				success:function(data){
					if(data=='y'){
						alert('添加成功')
						window.location.reload()
					}else{
						alert('对不起，只有管理员可以修改此选项')
					}
				}
			})
			this.addShow=false
		},
		preDe(){
			
		},
		changeCont(val){
			this.edSite=0
		}
	}
}
</script>

<style>
#site {background-color: #eee;}
{
	
}
</style>