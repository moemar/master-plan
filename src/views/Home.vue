<template>
  <div class="home">
    <div v-for="item in calendar.months" v-bind:key="item.month | moment('MMYY')">
      <h2>{{ item.month | moment('MMMM') }}</h2>
      <v-expansion-panels>
        <v-expansion-panel v-for="week in item.weeks" v-bind:key="week | moment('WYY')">
          <v-expansion-panel-header>
            <template v-slot:default="{ open }">
              <v-row no-gutters>
                <v-col cols="4">Week {{ week | moment('W') }}</v-col>
                <v-col
                  cols="8"
                  class="text--secondary"
                >
                  <v-fade-transition leave-absolute>
                    <span
                      v-if="open"
                      key="0"
                    >
                      Open
                    </span>
                    <span
                      v-else
                      key="1"
                    >
                      Not open
                    </span>
                  </v-fade-transition>
                </v-col>
              </v-row>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

Vue.use(require('vue-moment'))

const moment = require('moment')

export default {
  computed: {
    ...mapState({
      startDate: state => state.settings.startDate,
      endDate: state => state.settings.endDate
    }),
    calendar: {
      get () {
        var calendar = {
          months: []
        }

        const _startDate = moment(this.startDate)
        const _endDate = moment(this.endDate)
        const iterateMonth = _startDate.clone().startOf('month')

        while (moment(iterateMonth).isBefore(_endDate)) {
          const month = iterateMonth.clone()
          const monthEnd = iterateMonth.clone().endOf('month')
          const iterateWeek = calendar.months.length === 0 ? _startDate.clone().startOf('isoWeek') : iterateMonth.clone()

          calendar.months.push(this.getMonthObject(iterateWeek, month, monthEnd))
          iterateMonth.add(1, 'months')
        }

        return calendar
      }
    }
  },
  methods: {
    getMonthObject: function (iterateWeek, month, monthEnd) {
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
      return monthObject
    }
  }
}
</script>
