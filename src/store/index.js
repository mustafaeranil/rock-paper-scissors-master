import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0
  },
  mutations: {
    increaseScore(state) {
      state.score++
    }
  },
  actions: {
    increaseScore({ commit }) {
      commit('increaseScore')
    }
  },
  modules: {}
})
