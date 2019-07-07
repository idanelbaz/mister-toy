<template>
  <v-app>
    <app-header></app-header>
    <router-view></router-view>
  </v-app>

</template>

<script>
 import appHeader from '../src/components/Header.cmp.vue'

export default {
 
  name: 'App',
  components: {
appHeader
  },
  data () {
    return {
      //
    }
  }
}
</script>
