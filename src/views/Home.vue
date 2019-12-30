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
                      SW: {{ startWeight }}
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
import { mapState, mapGetters } from 'vuex'

Vue.use(require('vue-moment'))

export default {
  computed: {
    ...mapState({
      startWeight: state => state.settings.startWeight
    }),
    ...mapGetters({
      calendar: 'settings/getCalendar',
      weeklyWeightLoss: 'settings/getWeeklyWeightLoss'
    })
  }
}
</script>
