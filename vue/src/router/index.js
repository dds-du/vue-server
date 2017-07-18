import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index'
//import Person from '@/components/person'

let person = (resolve)=>{
  return import ('@/components/person')
}
let admin = (resolve)=>{
  return import ('@/components/backend')
}

Vue.use(Router)

export default new Router({
	mode:'history',
	linkActiveClass:'active',
    routes: [
      {
        path: '/',
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
      }
    ]
})
