import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    privateKey: null,
    publicAddress: null,
    smartContractAddress: null,
    smartContractAbi: ""
  }
})
