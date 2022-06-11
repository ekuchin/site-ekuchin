<template>
    <v-navigation-drawer :width="282">

        <v-list nav class="text-primary">
            <v-list-item
                v-for="item in navigation"
                :key="item.path"
                :prepend-icon="'mdi-'+item.icon"
                :title="item.title"
                :to="item.path"
                :value="item.path"
            />
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import navigation from "@/config/navigation"
export default {
data(){
    return {
      navigation
    }
  }
}
</script>

<style>

</style>