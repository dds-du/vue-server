webpackJsonp([8],{104:function(t,e,a){function r(t){a(138)}var s=a(31)(a(114),a(150),r,null,null);t.exports=s.exports},114:function(t,e,a){"use strict";function r(){function t(){for(var t=o.children,e=0;e<t.length;e++)t[e].style.color=h[e%6]}function e(){for(var t=0,e=-1,a=0,r=4;r<12;r++)if(r*r+(r+1)*(r+1)>m.length){a=2*r-1;break}var s=m.substring(0,(r-1)*(r-1)+r*r).split("");l=Math.PI/(a-1);for(var r=0;r<a;r++){r<=(a-1)/2?e+=2:e-=2,c=2*Math.PI/e;for(var i=0;i<e;i++){var v=document.createElement("li");v.innerHTML=s[t],t++,n(v,l,c,r,i),o.appendChild(v)}}var d=o.getElementsByTagName("li");for(r=0;r<d.length;r++)d[r].style.transform="translate3d("+d[r].cirX+"px,"+d[r].cirY+"px,"+d[r].cirZ+"px) rotateX("+d[r].alf+"rad) rotateY("+d[r].beta+"rad)"}function a(){for(var t=0,e=0,a=3;a<15;a++)if(15*a>m.length){e=a-1;break}var r=m.substring(0,15*e).split("");l=2*Math.PI/e;for(var a=0;a<15;a++)for(var s=0;s<e;s++){var i=document.createElement("li");i.innerHTML=r[t],t++,n(i,l,15,a,s),o.appendChild(i)}var c=o.getElementsByTagName("li");for(a=0;a<c.length;a++)c[a].style.transform="translate3d("+c[a].colX+"px,"+c[a].colY+"px,"+c[a].colZ+"px) rotateY("+c[a].colAlf+"rad)"}function r(){for(var t=0,e=0,a=1,r=6;r<15;r++)if(r*r>m.length){t=r-1;break}for(var s=m.substring(0,t*t).split(""),r=0;r<t;r++){l=2*Math.PI/a,a+=2;for(var i=0;i<a-2;i++){var c=document.createElement("li");c.innerHTML=s[e],e++,n(c,l,t,r,i),o.appendChild(c)}}var v=o.getElementsByTagName("li");for(r=0;r<v.length;r++)v[r].style.transform="translate3d("+v[r].coneX+"px,"+v[r].coneY+"px,"+v[r].coneZ+"px) rotateY("+v[r].colAlf+"rad)  rotateX("+v[r].coneAlf+"rad)"}function s(){for(var t=0,e=0,a=3;a<15;a++)if(15*a>m.length){e=a-1;break}var r=m.substring(0,15*e).split("");l=2*Math.PI/e;for(var a=0;a<15;a++)for(var s=0;s<e;s++){var i=document.createElement("li");i.innerHTML=r[t],t++,n(i,l,15,a,s),o.appendChild(i)}var c=o.getElementsByTagName("li");for(a=0;a<c.length;a++)c[a].style.transform="translate3d("+c[a].obqX+"px,"+c[a].obqY+"px,"+c[a].obqZ+"px) rotateY("+c[a].obqAlf+"rad)"}function n(t,e,a,r,s){var n=150,i=300;t.cirX=n*Math.sin(e*r)*Math.cos(a*s)+200,t.cirY=n*Math.sin(e*r)*Math.sin(a*s)+200,t.cirZ=n*Math.cos(e*r),t.alf=e*r,t.beta=a*s+Math.PI/2,t.colX=80*Math.sin(e*s)+200,t.colY=i*r/a+40,t.colZ=80*Math.cos(e*s),t.colAlf=e*s,t.coneX=n*(r/a)*Math.sin(e*s)+200,t.coneY=i*r/a+40,t.coneZ=n*(r/a)*Math.cos(e*s),t.coneAlf=Math.atan(.5),t.obqX=80*Math.sin(e*s+Math.PI/a*r/2)+200,t.obqY=i*r/a+40,t.obqZ=80*Math.cos(e*s+Math.PI/a*r/2),t.obqAlf=e*s+Math.PI/a*r/2}var i=document.getElementById("show3D"),o=i.getElementsByClassName("word")[0],l=(i.getElementsByClassName("con")[0],0),c=0,v=1,d=0,f=0,h=["red","yellow","green","blue","pink","#514646"],u=null,m="欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 ";$(".btn .left").click(function(){$(this).addClass("active").siblings().removeClass("active"),$(".item").show(500),$(".txt").hide(500),$(".box").hide(300)}),$(".item a").click(function(){$(".item").hide(500),$(".btn .left").removeClass("active"),$(".box").show(300)}),$(".btn .right").click(function(){$(this).addClass("active").siblings().removeClass("active"),$(".txt").show(500),$(".item").hide(500)}),$(".txt .close").click(function(){$(".txt").hide(500),$(".btn .right").removeClass("active"),$(".box").show(300)}),$(".txt .btn1").click(function(){var a=$(".txt textarea");""!=a.val()?(m=a.val(),$(".item p").html(a.val()),$(".txt .close").trigger("click"),$(".word").html(""),e(),t(),$(".txt textarea").val(""),$(".word").hide(300).delay(300).show(300)):alert("请输入文字")}),$(".txt .btn2").click(function(){$(".txt textarea").val("")}),$(".table").delegate("a","click",function(){$(".table a").attr("class",""),$(this).attr("class","active");var n=$(this).parent().index();if(n!=f){switch(n){case 0:$(".word").hide(300).delay(300).show(300),setTimeout(function(){$(".word").html(""),e(),t()},300);break;case 1:$(".word").hide(300).delay(300).show(300),setTimeout(function(){$(".word").html(""),a(),t()},300);break;case 2:$(".word").hide(300).delay(300).show(300),setTimeout(function(){$(".word").html(""),r(),t()},300);break;case 3:$(".word").hide(300).delay(300).show(300),setTimeout(function(){$(".word").html(""),s(),t()},300)}f=n}}),e(),t(),$(".box").on("mousedown",function(t){var e=t.pageX,a=t.pageY,r=0,s=0,n=e,i=a,l=0,c=0;clearInterval(u),$(document).on("mousemove",function(t){return r=t.pageX-e,s=t.pageY-a,o.style.transform="rotateY("+(v+r)+"deg) rotateX("+(d-s)+"deg)",l=t.pageX-n,c=t.pageY-i,n=t.pageX,i=t.pageY,!1}),$(document).on("mouseup",function(){$(document).off(),v+=r,d-=s,u=setInterval(function(){v+=2*l,d-=2*c,o.style.transform="rotateY("+v+"deg) rotateX("+d+"deg)"},30)})}),u=setInterval(function(){v++,o.style.transform="rotateY("+v+"deg) rotateX("+d+"deg)"},30)}Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){setTimeout(r,100)}}},125:function(t,e,a){e=t.exports=a(102)(!1),e.push([t.i,"#show3D{background:repeating-linear-gradient(90deg,blue,#d4d57c 20%,green 40%,blue 60%)}",""])},138:function(t,e,a){var r=a(125);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(103)("482088c4",r,!0)},150:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main_wrap",attrs:{id:"show3D"}},[a("div",{staticClass:"since"},[a("div",{staticClass:"box"},[a("ul",{staticClass:"word"})]),t._v(" "),a("div",{staticClass:"item"},[a("p",{staticClass:"con"},[t._v("\n\t\t\t\t\t欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 欢迎来到DDS的个人空间 \n\t\t\t\t")]),t._v(" "),a("a",{attrs:{href:"javascript:;"}},[t._v("x")])])]),t._v(" "),a("ul",{staticClass:"table"},[a("li",[a("a",{staticClass:"active",attrs:{href:"javascript:;"}},[t._v("圆球")])]),t._v(" "),a("li",[a("a",{attrs:{href:"javascript:;"}},[t._v("圆柱")])]),t._v(" "),a("li",[a("a",{attrs:{href:"javascript:;"}},[t._v("圆锥")])]),t._v(" "),a("li",[a("a",{attrs:{href:"javascript:;"}},[t._v("扭曲圆柱")])])]),t._v(" "),a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"btn"},[a("a",{staticClass:"left",attrs:{href:"javascript:;"}},[t._v("展开")]),t._v(" "),a("a",{staticClass:"right",attrs:{href:"javascript:;"}},[t._v("自定义文字")])]),t._v(" "),a("div",{staticClass:"txt"},[a("p",[t._v("在下面输入自己的文字:(建议：50~250字)")]),t._v(" "),a("textarea"),t._v(" "),a("a",{staticClass:"btn1"},[t._v("提交")]),t._v(" "),a("a",{staticClass:"btn2"},[t._v("重置")]),t._v(" "),a("a",{staticClass:"close",attrs:{href:"javascript:;"}})])])}]}}});