const moment = require('moment')

// initial state
const state = {
  startDate: moment(),
  endDate: moment(),
  startWeight: 75,
  endWeight: 65
}

// getters
const getters = {
  getStartDate: (state, getters) => {
    return state.startDate
  },
  getEndDate: (state, getters) => {
    return state.endDate
  },
  getStartWeight: (state, getters) => {
    return state.startWeight
  },
  getEndWeight: (state, getters) => {
    return state.endWeight
  },
  getWeeks: (state, getters) => {
    let weeks = []
    const iterateWeek = state.startDate.clone().startOf('isoWeek')

    while (iterateWeek.isBefore(state.endDate)) {
      const week = iterateWeek.clone()
      weeks.push(week)
      iterateWeek.add(1, 'weeks')
    }

    return weeks
  },
  getCalendar: (state, getters) => {
    var calendar = {
      months: []
    }

    const startDate = moment(state.startDate)
    const endDate = moment(state.endDate)
    const iterateMonth = startDate.clone().startOf('month')

    while (moment(iterateMonth).isBefore(endDate)) {
      const month = iterateMonth.clone()
      const monthEnd = iterateMonth.clone().endOf('month')
      const iterateWeek = calendar.months.length === 0 ? startDate.clone().startOf('isoWeek') : iterateMonth.clone()

      var monthObject = {
        month: null,
        weeks: []
      }

      while (moment(iterateWeek).isBefore(monthEnd)) {
        const week = iterateWeek.clone()
        monthObject.weeks.push(week)
        iterateWeek.add(1, 'weeks')
      }

      monthObject.month = month

      calendar.months.push(monthObject)
      iterateMonth.add(1, 'months')
    }

    return calendar
  },
  getWeeklyWeightLoss: (state, getters) => {
    const calendar = getters.getCalendar
    // console.log(calendar)
    const weightLoss = state.startWeight - state.endWeight
    // console.log(weightLoss)
    let weekCount = 0
    // console.log(weekCount)

    calendar.months.forEach(month => {
      month.weeks.forEach(week => {
        weekCount++
      })
    })
    // console.log(weekCount)
    // console.log(weightLoss / weekCount)
    return weightLoss / weekCount
  }
}

// actions
const actions = {
  //
}

// mutations
const mutations = {
  updateStartDate (state, startDate) {
    state.startDate = startDate
  },
  updateEndDate (state, endDate) {
    state.endDate = endDate
  },
  updateStartWeight (state, startWeight) {
    state.startWeight = startWeight
  },
  updateEndWeight (state, endWeight) {
    state.endWeight = endWeight
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
