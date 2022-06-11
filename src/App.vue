<template>
  <v-app>
    <MainMenu/>
    <v-main>
      <Navigation/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import MainMenu from './components/MainMenu.vue'
import Navigation from './components/Navigation.vue'

export default {
  components: { MainMenu, Navigation },
  name: 'App',

    
  data: () => ({
    //
  }),
}
</script>
