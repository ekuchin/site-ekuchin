<template>  
  <home-content :contentData="content"/>
</template>

<script>
// @ is an alias to /src
import content from "@/config/home"
import HomeContent from '../components/HomeContent.vue'
//import HomeContent from "@/components/HomeContent"

export default {
  components: { HomeContent },
  name: 'HomeView',
    data(){
    return {
      content
    }
  },
  //components:{HomeContent}
}
//<HomeContent :contentData="content"/>
</script>
