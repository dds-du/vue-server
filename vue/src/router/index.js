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

Vue.use(Router)

export default new Router({
	mode:'history',
	linkActiveClass:'active',
    routes: [
      {
        path: '/index',
        name: 'Index',
        component: Index
      },
      {
      	path:'/person',
      	name:'Person',
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
          error:true
        },
        component:error
      },
      {
        path:'/saolei',
        name:'Saolei',
        component:saolei
      },
      {
        path:'/3dshow',
        name:'Show3d',
        component:show3d
      },
      {
        path:'/zuma',
        name:'Zuma',
        component:zuma
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
