<template>
  <v-app>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer style="position: fixed;bottom: 0;background-color: #b3d4fc;width: 100%;display: flex;
    justify-content: space-evenly;"></app-footer>
  </v-app>
</template>

<script>
import appHeader from "../src/components/Header.cmp.vue";
import appFooter from "../src/components/footer.cmp.vue";
export default {
  name: "App",
  components: {
    appHeader,
    appFooter
  },
  data() {
    return {
      //
    };
  }
};
</script>
