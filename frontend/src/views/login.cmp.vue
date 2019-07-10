<template>
  <section class="login" style="margin: 0 auto;">
    <h1>Login</h1>
    <form @submit.prevent="loginUser" style="margin-top: 40vh;">
      <input v-model="user.userName" type="text" placeholder="enter username" required autofocus />
      <input
        type="password"
        v-model="user.password"
        placeholder="enter password"
        required
        @keyup.enter="loginUser"
      />
      <br />
      <button>Login</button>
    </form>
  </section>
</template>

<script>
import userService from "../services/user-service.js";
import eventBus from "../eventBus.js";

export default {
  name: "login",
  data() {
    return {
      user: {
        userName: "",
        password: ""
      }
    };
  },
  methods: {
    async loginUser() {
      try {
        const user = await userService.loginUser(this.user);
        eventBus.$emit("fireSwal", {
          msg: "Welcome",
          subMsg: "",
          type: "success"
        });
        this.$router.push("/home");
      } catch (err) {
        eventBus.$emit("fireSwal", {
          msg: "Login Faild",
          subMsg: "try sign-up",
          type: "warning"
        });
        this.$router.push("/signup");
      }
    }
  },
  components: {}
};
</script>


