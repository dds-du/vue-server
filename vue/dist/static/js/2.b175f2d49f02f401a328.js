webpackJsonp([2],{111:function(t,e,n){function a(t){n(136)}var r=n(31)(n(121),n(148),a,null,null);t.exports=r.exports},121:function(t,e,n){"use strict";function a(){function t(t,r){s.style.width=50*t+"px",k="";for(var i=0;i<t*t;i++)k+='<li><a href="javascript:;"></a><p></p></li>';for(s.innerHTML=k,y=s.getElementsByTagName("li"),E=s.getElementsByTagName("p"),b=o(t*t,Math.ceil(t*r)),b.sort(),i=0;i<b.length;i++){var l=document.createElement("span");y[b[i]].appendChild(l),y[b[i]].mark="true"}for(i=0;i<y.length;i++)y[i].onoff=!0,y[i].index=i,y[i].aMark=!0;for(i=0;i<y.length;i++)y[i].addEventListener("click",a,!1),y[i].addEventListener("click",e,!1),y[i].oncontextmenu=n}function e(){c.currentTime=0,c.play()}function n(t){var t=t||event;t.preventDefault(),this.aMark?this.children[0].innerHTML="!":this.children[0].innerHTML="",this.aMark=!this.aMark}function a(){this.onoff=!1,this.children[0].style.display="none",this.mark&&(l.currentTime=0,l.play(),v.children[0].style.color="red",v.children[0].innerHTML="Game Over!",u.style.height=M+"px",u.addEventListener("transitionend",r,!1));var t=this.offsetLeft,e=this.offsetTop,n=[],i=0;for(c=0;c<y.length;c++){var o=y[c].offsetLeft,s=y[c].offsetTop;(Math.abs(o-t)<50||50==Math.abs(o-t))&&(Math.abs(s-e)<50||50==Math.abs(s-e))&&(o!=t||s!=e)&&n.push(c)}for(var c=0;c<n.length;c++)y[n[c]].mark&&i++;if(0!=i&&(this.children[1].innerHTML=i),0==i)for(var c=0;c<n.length;c++)y[n[c]].onoff&&!this.mark&&a.call(y[n[c]]);var m=!0;for(c=0;c<y.length;c++)!y[c].mark&&y[c].onoff&&(m=!1);m&&(d.currentTime=0,d.play(),v.children[0].style.color="green",v.children[0].innerHTML="恭喜您，过关啦！",u.style.height="100%",u.addEventListener("transitionend",r,!1))}function r(){u.removeEventListener("transitionend",r,!1),v.style.transform="none"}function i(){v.removeEventListener("transitionend",i,!1),u.style.height="0px"}function o(t,e){for(var n=[],a=[],r=0;r<t;r++)n.push(r);for(r=0;r<e;r++)a.push(n.splice(Math.floor(Math.random()*n.length),1));return a}var s=document.getElementById("wrap"),l=document.getElementById("boom"),c=document.getElementById("click"),d=document.getElementById("win"),u=document.getElementById("bg"),v=document.getElementById("shadow"),m=document.getElementById("start"),p=document.getElementById("choice"),h=v.getElementsByTagName("a")[0],f=p.getElementsByTagName("a")[0],_=10,g=2,y=null,E=null,b=0,k="",M=document.documentElement.clientHeight;l.volume=.6,d.volume=.6,f.onclick=function(){_=Number(p.children[1].value),g=_*Number(p.children[3].value),t(_,g)},t(_,g),h.onclick=function(){v.style.transform="translate3d(0,-1000px,0px) scale(.01) rotateX(1080deg)",v.addEventListener("transitionend",i,!1);for(var t=0;t<y.length;t++)y[t].children[0].style.display="none"},m.onclick=function(){_=Number(p.children[1].value),g=_*Number(p.children[3].value),t(_,g)}}Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){setTimeout(a,50)}}},123:function(t,e,n){e=t.exports=n(102)(!1),e.push([t.i,"#saolei_wrap{background:url(/static/img/boom.jpg)}",""])},136:function(t,e,n){var a=n(123);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(103)("1a3b89dc",a,!0)},148:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main_wrap",attrs:{id:"saolei_wrap"}},[n("div",{attrs:{id:"bg"}}),t._v(" "),n("div",{attrs:{id:"choice"}},[n("p",[t._v("请选择每行的格子数量")]),t._v(" "),n("select",{attrs:{id:"num"}},[n("option",{attrs:{value:"8"}},[t._v("8")]),t._v(" "),n("option",{attrs:{value:"9"}},[t._v("9")]),t._v(" "),n("option",{attrs:{selected:"true",value:"10"}},[t._v("10")]),t._v(" "),n("option",{attrs:{value:"11"}},[t._v("11")]),t._v(" "),n("option",{attrs:{value:"12"}},[t._v("12")]),t._v(" "),n("option",{attrs:{value:"13"}},[t._v("13")]),t._v(" "),n("option",{attrs:{value:"14"}},[t._v("14")]),t._v(" "),n("option",{attrs:{value:"15"}},[t._v("15")])]),t._v(" "),n("p",[t._v("请选择难度")]),t._v(" "),n("select",{attrs:{id:"dif"}},[n("option",{attrs:{value:"0.1"}},[t._v("简单")]),t._v(" "),n("option",{attrs:{selected:"selected",value:"0.2"}},[t._v("一般")]),t._v(" "),n("option",{attrs:{value:"0.3"}},[t._v("困难")])]),t._v(" "),n("a",{attrs:{href:"javascript:;"}},[t._v("确定")])]),t._v(" "),n("div",{attrs:{id:"start"}},[t._v("游戏开始")]),t._v(" "),n("div",{attrs:{id:"head1"}},[t._v("扫雷游戏")]),t._v(" "),n("ul",{attrs:{id:"wrap"}}),t._v(" "),n("div",{attrs:{id:"shadow"}},[n("p",[t._v("Game Over!")]),t._v(" "),n("a",{attrs:{href:"javascript:;"}},[t._v("确定")])]),t._v(" "),n("audio",{attrs:{id:"1234",src:"/static/media/boom.mp3"}}),t._v(" "),n("audio",{attrs:{id:"boom",preload:"auto"}},[n("source",{attrs:{src:"/static/media/boom.ogg",type:"audio/ogg"}}),t._v(" "),n("source",{attrs:{src:"/static/media/boom.mp3",type:"audio/mp3"}})]),t._v(" "),n("audio",{attrs:{id:"click",preload:"auto"}},[n("source",{attrs:{src:"/static/media/7571.ogg",type:"audio/ogg"}}),t._v(" "),n("source",{attrs:{src:"/static/media/7571.mp3",type:"audio/mp3"}})]),t._v(" "),n("audio",{attrs:{id:"win",preload:"auto"}},[n("source",{attrs:{src:"/static/media/win.ogg",type:"audio/ogg"}}),t._v(" "),n("source",{attrs:{src:"/static/media/win.mp3",type:"audio/mp3"}})])])}]}}});