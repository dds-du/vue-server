import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index'
//import error from '@/components/error'
//import Person from '@/components/person'

let person = (resolve)=>{
  return import ('@/components/person')
}
let admin = (resolve)=>{
  return import ('@/components/backend')
}
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

Vue.use(Router)


let router = new Router({
	mode:'history',
	linkActiveClass:'active',
    routes: [
      {
        path: '/index',
        name: 'Index',
        meta:{

        },
        component: Index
      },
      {
      	path:'/person',
      	name:'Person',
        meta:{
          title:'个人主页'
        },
      	component:person
      },
      {
        path:'/admin',
        name:'Admin',

        component:admin
      },
      {
        path:'/error',
        name:'Error',
        meta:{
          title:'错误页面'
        },
         meta:{
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
        component:other
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