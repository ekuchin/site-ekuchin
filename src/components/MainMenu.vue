<template>
  <v-app-bar fixed>
  
       <v-btn
        large left
        icon="mdi-home"
        color="primary"
        :to="{path: '/'}"
      ></v-btn>

  <v-toolbar-title class="primary--text"></v-toolbar-title>
  <v-spacer></v-spacer>               

      <v-btn
        large left
        icon="mdi-instagram"
        color="primary"
        href="https://www.instagram.com/eugene.kuchin" target="_blank"
      ></v-btn>

      <v-btn
        large left
        icon="mdi-github"
        color="primary"
        href="https://github.com/ekuchin" target="_blank"
      ></v-btn>
 
  </v-app-bar>
</template>

<script>
//import mainmenu from "@/config/mainmenu"
export default {
  data(){
    return {
      //mainmenu
    }
  }
}
</script>