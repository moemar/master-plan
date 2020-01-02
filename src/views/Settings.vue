<template>
  <div>
    <h1>Settings</h1>
    <v-row>
      <v-col
        cols="6"
        sm="6"
      >
        <v-dialog
            ref="dialogStartDate"
            v-model="modalStartDate"
            :return-value.sync="startDate"
            persistent
            width="290px"
          >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="startDate"
              label="Start Date"
              prepend-icon="mdi-calendar-today"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="startDate" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modalStartDate = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.dialogStartDate.save(startDate)">OK</v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
      <v-col
        cols="6"
        sm="6"
      >
        <v-dialog
            ref="dialogEndDate"
            v-model="modalEndDate"
            :return-value.sync="endDate"
            persistent
            width="290px"
          >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="endDate"
              label="End Date"
              prepend-icon="mdi-calendar"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="endDate" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modalEndDate = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.dialogEndDate.save(endDate)">OK</v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="6"
        sm="6"
      >
      <v-text-field
        label="Start Weight"
        type="number"
        :value="startWeight"
        @input="updateStartWeight">
      </v-text-field>
      </v-col>
      <v-col
        cols="6"
        sm="6"
      >
        <v-text-field
          label="End Weight"
          type="number"
          :value="endWeight"
          @input="updateEndWeight">
        </v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
const moment = require('moment')
export default {
  data: () => ({
    modalStartDate: false,
    modalEndDate: false
  }),
  computed: {
    ...mapState({
      startWeight: state => state.settings.startWeight,
      endWeight: state => state.settings.endWeight
    }),
    startDate: {
      get () {
        return this.$store.state.settings.startDate.format('YYYY-MM-DD')
      },
      set (newValue) {
        return this.$store.commit('settings/updateStartDate', moment(newValue))
      }
    },
    endDate: {
      get () {
        return this.$store.state.settings.endDate.format('YYYY-MM-DD')
      },
      set (newValue) {
        return this.$store.commit('settings/updateEndDate', moment(newValue))
      }
    }
  },
  methods: {
    ...mapMutations({
      updateStartWeight: 'settings/updateStartWeight',
      updateEndWeight: 'settings/updateEndWeight'
    })
  }
}
</script>
