<template>
  <section class="signup" style="margin: 0 auto;">
    <h1>Sign up</h1>
    <form @submit.prevent="signUpUser" style="margin-top: 40vh;">
      <input v-model="user.userName" type="text" placeholder="Choose username" required autofocus />
      <input
        type="password"
        v-model="user.password"
        placeholder="Choose password"
        required
        @keyup.enter="loginUser"
      />
      <br />
      <button>Sign up</button>
    </form>
  </section>
</template>

<script>
import userService from "../services/user-service.js";
import eventBus from "../eventBus.js";

export default {
  name: "signup",
  data() {
    return {
      user: {
        userName: "",
        password: ""
      }
    };
  },
  methods: {
    async signUpUser() {
      try {
        const user = await userService.signUpUser(this.user);
        eventBus.$emit("fireSwal", {
          msg: "Welcome",
          subMsg: "",
          type: "success"
        });
        this.$router.push("/home");
      } catch (err) {
        eventBus.$emit("fireSwal", {
          msg: "Sign-up Faild",
          subMsg: "Please try again later",
          type: "error"
        });
        console.log("CANNOT CONNECT");
      }
    }
  },
  components: {}
};
</script>
