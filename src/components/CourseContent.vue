<template>
      <v-card max-width="1000" :disabled="item.disabled" class="ma-2">
      
       <v-row >
          <v-col align="center" cols="11">
            <v-card-title class="text-primary">{{item.title}}</v-card-title>
            <v-card-subtitle align="left" class="text-primary">{{subtitle()}}</v-card-subtitle>
          </v-col>
     <v-col>
     <v-btn
        icon="mdi-dots-horizontal"
        class="text-secondary"
        :to="'/files/'+item.file" target="_blank"
        v-show="item.id"
      ></v-btn>
     </v-col>
       </v-row>

         <v-row>
          <v-col align="center" cols="2">
            <v-icon  size="64" center class="text-secondary">
              {{"mdi-"+item.icon}}
            </v-icon>
          </v-col>
          <v-col align="left" cols="10">
            <v-card-text class="subtitle-1">
              <p class="mb-1"
                v-for="(str,text_index) in item.text" 
                :key="text_index">
                  {{str}}
              </p>
            </v-card-text>

          </v-col>
        </v-row>
        
      </v-card>
</template>

<script>
export default {
  name: 'CourseContent',
    data(){
    
    const subtitle=()=>{
      if (this.item.subtitle){return this.item.subtitle}
      const arr=["Начальный", "Средний", "Продвинутый"]
      return this.item.duration+"ч. Уровень: "+arr[this.item.level]
    }
    
    return {
      headerClass: this.item.disabled ? "text-secondary" : "text-primary",
      subtitle
    }
  },
  props:['item']
}
</script>

