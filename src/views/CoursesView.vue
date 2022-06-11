<template>
  <div class="about">
      <v-container>
      <v-row class="mx-8">
    <v-col 
      v-for="(item,index) in courseList" 
      :key="index"
      class="text-primary"
      md="12"
      cols="12"
      align="center"
    >
      <CourseContent :item="item"/>
      </v-col>
  </v-row>
  </v-container>
  </div>
</template>

<script>
import courses from "@/config/courses"
import CourseContent from '../components/CourseContent.vue';
export default {
  components: { CourseContent },
  computed: {
    currentRoute() {
        return this.$route.path.substring(1);
    },
    courseList(){
      return courses.filter(course=>course.category==this.currentRoute)
    }
  }  
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
