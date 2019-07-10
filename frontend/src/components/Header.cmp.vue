<template>
  <section class="app-header">
    <v-toolbar dark color="primary">
      <v-toolbar-title
        style="cursor: pointer;"
        @click="goHome"
        title="Home"
        class="white--text"
      >Toys</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon title="Home" medium @click="goHome">home</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon title="Chart" @click="goProfile">insert_chart_outlined</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon title="About" @click="goAbout">all_inclusive</v-icon>
      </v-btn>
    </v-toolbar>
  </section>
</template>

<script>
import eventBus from "../eventBus.js";
import userService from "../services/user-service.js"

export default {
  data: () => ({
    user: '',
  }),
  methods: {
    goHome() {
      this.$router.push("/home");
    },
    goAbout() {
      this.$router.push("/about");
    },
    goProfile() {
      this.$router.push("/grafs");
    },

  },
  created() {
    eventBus.$on("fireSwal", swalOpts => {
      Swal.fire(swalOpts.msg, swalOpts.subMsg, swalOpts.type);
    });
    
  }, 
  computed: { 

  }
  
};
</script>

<style>
</style>
