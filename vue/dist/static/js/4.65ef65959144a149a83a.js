webpackJsonp([4],{109:function(t,e,n){function s(t){n(143)}var a=n(31)(n(119),n(155),s,null,null);t.exports=a.exports},119:function(t,e,n){"use strict";function s(){var t={};$.ajax({url:"/api/msg",type:"POST",async:!1,dataType:"json",data:{index:"msg"},success:function(e){t=e},error:function(){alert("获取数据失败")}});for(var e=0;e<t.length;e++)$li=$("<li>").html("<h2><span>"+t[e].m_username+'</span>说</h2><div class="msg_cont"><p>'+decodeURI(t[e].m_text)+"</p><i>"+t[e].m_time+"</i></div>"),$li.prependTo($(".user_msg"));$("#btn_msg").click(function(){var t=$("#userinput").val();return""==t?void alert("请输入内容后再留言"):t.length>300?void alert("请输入少于300个字符"):void $.ajax({url:"/api/leav",type:"POST",dataType:"json",data:{index:"leav",text:t},success:function(t){alert("留言成功"),window.location.reload()},error:function(){alert("留言失败，请先登录")}})})}Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){setTimeout(s,50)}}},130:function(t,e,n){e=t.exports=n(102)(!1),e.push([t.i,"#message{background-color:#f1f1f1}",""])},143:function(t,e,n){var s=n(130);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(103)("429d7889",s,!0)},155:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main_wrap",attrs:{id:"message"}},[n("div",{attrs:{id:"txt"}},[n("div",{staticClass:"msg_head"},[n("textarea",{staticStyle:{width:"900px",height:"150px",resize:"none"},attrs:{id:"userinput"}}),t._v(" "),n("input",{attrs:{id:"btn_msg",type:"button",value:"我要留言"}})]),t._v(" "),n("ul",{staticClass:"user_msg"})])])}]}}});