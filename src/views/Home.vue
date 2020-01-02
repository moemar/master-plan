<template>
  <div class="home">
    <div v-if="Object.keys(weeks).length != 0">
      <div v-if="Object.keys(months).length != 0">
        <div v-for="(month, index) in months" v-bind:key="index">
          <h3 class="mb-1">{{ month | moment('MMMM YYYY') }}</h3>
          <v-expansion-panels class="mb-5">
            <v-expansion-panel v-for="(week, index) in getWeeksByMonth(month.format('MMYYYY'))" v-bind:key="index">
              <v-expansion-panel-header>
                <template v-slot:default="{ open }">
                  <v-row no-gutters>
                    <v-col cols="4">
                      Week {{ week | moment('W') }}
                    </v-col>
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
      <div v-else>
        <v-skeleton-loader
            height="94"
            type="list-item-two-line"
          >
        </v-skeleton-loader>
      </div>
    </div>
    <div v-else>
      <v-alert
      border="right"
      colored-border
      type="error"
      elevation="2"
      >
        No weeks defined, please set start and end date.
      </v-alert>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'

Vue.use(require('vue-moment'))

export default {
  data () {
    return {
      // months: []
    }
  },
  computed: {
    ...mapState({
      startWeight: state => state.settings.startWeight
    }),
    ...mapGetters({
      weeks: 'settings/getWeeks'
    }),
    months () {
      return this.removeDuplicates(this.weeks, 'MMYYYY')
    }
  },
  methods: {
    removeDuplicates (myArr, dateFormat) {
      return myArr.filter((obj, pos, arr) => {
        return arr.map(this.getFormattedDate(dateFormat)).indexOf(obj.format(dateFormat)) === pos
      })
    },
    getFormattedDate: function (dateFormat) {
      return function (date) { return date.format(dateFormat) }
    },
    getWeeksByMonth (month) {
      return this.weeks.filter(week => {
        if (week.format('MMYYYY') === month) {
          return week
        }
      })
    }
  },
  created () {
    // this.months = this.removeDuplicates(this.weeks, 'MMYYYY')
  }
}
</script>
