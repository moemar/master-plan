<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link
          to="/"
          tag="span"
        >
          {{title}}
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn to="/settings" icon>
        <v-icon>mdi-settings-outline</v-icon>
      </v-btn>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'AppBar',
  props: ['title']
}
</script>
