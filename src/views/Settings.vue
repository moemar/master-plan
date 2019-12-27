<template>
  <div>
    <h1>Settings</h1>
    <v-text-field
      label="Test"
      type="number"
      v-model="test"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data: () => ({
    test: null
  })
}
</script>
