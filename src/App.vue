<template>
  <v-app>
    <AppBar title="Master Plan" />
    <v-container class="grey lighten-5">
      <router-view></router-view>
    </v-container>
    <BottomNavigation />
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'
import BottomNavigation from './components/BottomNavigation'

export default {
  name: 'App',
  components: {
    AppBar,
    BottomNavigation
  },
  data: () => ({
    //
  })
}
</script>
