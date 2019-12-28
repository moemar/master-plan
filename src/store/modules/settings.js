// initial state
const state = {
  startWeight: null
}

// getters
const getters = {
  getStartWeight: (state, getters) => {
    return state.startWeight
  }
}

// actions
const actions = {
  //
}

// mutations
const mutations = {
  updateStartWeight (state, startWeight) {
    state.startWeight = startWeight
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
