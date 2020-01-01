import Vue from 'vue'
import Vuex from 'vuex'
import settings from './modules/settings'

Vue.use(Vuex)

// plugins
const myPlugin = store => {
  console.log('store', store)
  // called when the store is initialized
  store.subscribe((mutation, state) => {
    console.log('mutation', mutation)
    console.log('state', state)
    // called after every mutation.
    // The mutation comes in the format of `{ type, payload }`.
  })
}

export default new Vuex.Store({
  modules: {
    settings
  },
  plugins: [myPlugin]
})
