<template>
  <div>
    <h1>Settings</h1>
    <v-text-field
      label="Start Weight"
      type="number"
      :value="startWeight"
      @input="updateStartWeight"
    ></v-text-field>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: mapState({
    startWeight: state => state.settings.startWeight
  }),
  methods: {
    ...mapMutations({
      updateStartWeight: 'settings/updateStartWeight'
    })
  }
}
</script>
