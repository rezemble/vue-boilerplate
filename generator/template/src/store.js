import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: require('./store/state'),
  getters: require('./store/getters'),
  mutations: require('./store/mutations'),
  actions: require('./store/actions'),
})
