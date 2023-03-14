import { createStore } from 'vuex'
import api from '../api/networkRequest'

export default createStore({
  state: {
    
  },
  getters: {

  },
  mutations: {
  },
  actions: {
    asyncGetVerification({ commit }){
      api.getVerificationCode()
      .then(res =>{
        commit("addCounter",res.msg)
      })
     }
  },
  modules: {
  }
})
