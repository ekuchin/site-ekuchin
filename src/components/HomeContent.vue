<template>
<v-container>
  
  <v-row class="px-8">
    <v-col 
      v-for="(item,index) in contentData" 
      :key="index"
      class="primary--text"
      md="12"
      cols="12"
      align="center"
    >
      <v-card max-width="1000" :disabled="item.disabled">
        <v-card-title class="text-primary">{{item.title}}</v-card-title>
         <v-card-subtitle align="left" class="text-secondary">{{item.subtitle}}</v-card-subtitle>
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
    </v-col>
  </v-row>
  
</v-container>    
</template>

<script>
export default {
  name: 'HomeContent',
    data(){
    return {
    }
  },
  props:['contentData']
}
</script>

