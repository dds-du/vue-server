import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		number:1
	},
	getters:{
		filNum(state){
			return state.number>5?5:state.number
		}
	},
	//commit
	mutations:{

	},
	//dispatch
	actions:{
		
	}
})