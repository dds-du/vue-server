<template>
  <div id="message">
    <div id="txt">
		<div class="msg_head">
			<textarea id="userinput" style="width: 900px;height: 150px;resize:none;"></textarea> 
			<input id="btn_msg" type="button" value="我要留言">
		</div>
		<ul class="user_msg">
			
		</ul>
	</div>
  </div>
</template>

<script>
function init(){
	var dat = {};
	$.ajax({
		url:'/api/msg',
		type:'POST',
		async:false,
		dataType:'json',
		success:function(data){
			dat=data;
		},
		error:function(){
			alert('获取数据失败');
		}
	});
	
	for(var i=0;i<dat.length;i++){
		let $li = $('<li>').html('<h2><span>'+dat[i]['m_username']+'</span>说</h2><div class="msg_cont"><p>'+decodeURI(dat[i]['m_text'])+'</p><i>'+dat[i]['m_time']+'</i></div>');
		$li.prependTo($('.user_msg'));
	}

	$('#btn_msg').click(function(){
		var msg = $('#userinput').val();
		if(msg==''){
			alert('请输入内容后再留言');
			return;
		}else if(msg.length>300){
			alert('请输入少于300个字符');
			return;
		}
		$.ajax({
			url:'/api/leav',
			type:'POST',
			dataType:'json',
			data:{'index':'leav','text':msg},
			success:function(data){
				alert('留言成功');
				window.location.reload();
			},
			error:function(){
				alert('留言失败，请先登录');
			}
		})
	});
}
export default {
 mounted(){
 	setTimeout(init,50)
 }
}
</script>

<style>
#message { background-color: #f1f1f1; }

</style>