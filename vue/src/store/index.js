require('native-promise-only')

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		number:1,
		showBack:false
	},
	getters:{
		filNum(state){
			return state.number>5?5:state.number
		}
	},
	//commit
	mutations:{
		addNum(state){
			
		},
		showBtn(state){
			state.showBack=true
		},
		hideBtn(state){
			state.showBack=false
		}
	},
	//dispatch
	actions:{
		
	}
})