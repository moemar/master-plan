// initial state
const state = {
  startWeight: null,
  startDate: new Date().toISOString().substr(0, 10),
  endDate: new Date().toISOString().substr(0, 10)
}

// getters
const getters = {
  getStartWeight: (state, getters) => {
    return state.startWeight
  },
  getStartDate: (state, getters) => {
    return state.startDate
  },
  getEndDate: (state, getters) => {
    return state.endDate
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
  },
  updateStartDate (state, startDate) {
    state.startDate = startDate
  },
  updateEndDate (state, endDate) {
    state.endDate = endDate
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
