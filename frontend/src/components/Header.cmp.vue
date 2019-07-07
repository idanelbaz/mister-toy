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
      <v-btn icon>
        <v-icon title="Add toy" @click="addTodo">add</v-icon>
      </v-btn>
    </v-toolbar>
  </section>
</template>

<script>
import eventBus from "../eventBus.js";

export default {
  data: () => ({}),
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goAbout() {
      this.$router.push("/about");
    },
    goProfile() {
      this.$router.push("/grafs");
    },
    addTodo() {
      this.$router.push("/add");
    }
  },
  created() {
    eventBus.$on("fireSwal", swalOpts => {
      Swal.fire(swalOpts.msg, swalOpts.subMsg, swalOpts.type);
    });
  }
};
</script>

<style>
</style>
