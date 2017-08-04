import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'

let error = (resolve)=>{
  return import ('@/components/error')
}
let saolei = (resolve)=>{
  return import ('@/components/saolei')
}
let show3d = (resolve)=>{
  return import ('@/components/3d')
}
let zuma = (resolve)=>{
  return import ('@/components/zuma')
}
let other = (resolve)=>{
  return import ('@/components/other')
}
let message = (resolve)=>{
  return import ('@/components/message')
}
let site = (resolve)=>{
  return import ('@/components/sitelist')
}

//后台加载
let admin = (resolve)=>{
  return require.ensure([],function(){
    resolve(require('@/components/admin'))
  },'admin') 
}
let control = (resolve)=>{
  return require.ensure([],()=>{
    resolve(require('@/components/admin/control'))
  },'admin') 
}
let person = (resolve)=>{
  return require.ensure([],()=>{
    resolve(require('@/components/admin/person'))
  },'admin') 
}

Vue.use(Router)

let router = new Router({
    mode:'history',
    linkActiveClass:'active',
    scrollBehavior(to,from,save){//浏览器前进或者后退的时候触发
    //to:目标页面，from:离开的页面，save:滚动距离
        if(to.hash){
            return {
                selector:to.hash
            }
        }
        return save||{x:0,y:0}
    },
    routes: [
      {
        path: '/index',
        name: 'Index',
        meta:{

        },
        component: index
      },
      {
        path:'/admin',
        name:'Admin',
        meta:{
          admin:true
        },
        component:admin,
        children:[
          {
            path:'/admin/control',
            component:control,
            name:'Control',
            meta:{
              admin:true
            },
          },
           {
            path:'/admin/person',
            component:person,
            name:'Person',
            meta:{
              admin:true
            },
          },
        ]
      },
      {
        path:'/error',
        name:'Error',
         meta:{
          title:'错误页面',
          error:true
        },
        component:error
      },
      {
        path:'/saolei',
        name:'Saolei',
        meta:{
          title:'扫雷游戏'
        },
        component:saolei
      },
      {
        path:'/3dshow',
        name:'Show3d',
        meta:{
          title:'3d酷炫图形'
        },
        component:show3d
      },
      {
        path:'/zuma',
        name:'Zuma',
        meta:{
          title:'祖玛游戏'
        },
        component:zuma
      },
      {
        path:'/message',
        name:'Message',
        meta:{
          title:'留言板'
        },
        component:message
      },
      {
        path:'/other',
        name:'Other',
        meta:{
          title:'开发中...'
        },
        component:other
      },
      {
        path:'/site',
        name:'Site',
        meta:{
          title:'个人收藏的精品网站'
        },
        component:site
      },
      {
        path:'*',
        redirect:(to)=>{
          if(to.path=='/'){
            return {
              name:'Index'
            }
          }
          return {
            name:'Error'
          }
        }
      }
    ]
})

router.afterEach((to,from,next)=>{
    window.document.title=to.meta.title||'DDS个人主页'
})
export default router