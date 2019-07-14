<template>
  <section class="app-chat">
    <h1>{{currToy.name}} chat</h1>
    <h1>{{currUser[0].userName}}</h1>
    <ul id="messages">
      <li>{{msgUserTyping}}</li>
      <li v-for="messege in messages" :key="messege.id">{{messege}}</li>
    </ul>
    <form @submit.prevent="sendMsg">
      <input v-model="msgTxt" id="txt" @input="userStartTyping" autocomplete="off" />
      <button>Send</button>
    </form>
  </section>
</template>

<script>
import userService from "../services/user-service.js";

import io from "socket.io-client";

const socket = io();
// "http://localhost:3000"
export default {
  props: ["currToy"],
  created() {
    var timeOut = false;
    this.currUser = userService.getLoggedinUser();
    socket.on("chat history", msgs => {
      this.messages = msgs;
    });
    socket.on("chat newMsg", msg => {
      this.messages.push(msg);
    });
    socket.on("chat userTyping", msg => {
      if (timeOut) clearTimeout(timeOut);
      this.msgUserTyping = msg;
      timeOut = setTimeout(() => {
        this.msgUserTyping = "";
      }, 2500);
    });
    const toyId = this.$route.params.id;
    socket.emit("chat join", toyId, this.currUser[0].userName);
  },
  destroyed() {
    socket.removeListener("chat newMsg");
    socket.removeListener("chat history");
    socket.removeListener("chat userTyping");
  },
  data() {
    return {
      msgTxt: "",
      messages: [],
      msgUserTyping: "",
      currUser: null
    };
  },
  methods: {
    sendMsg() {
      const msg = { txt: this.currUser[0].userName + ": " + this.msgTxt };
      const toyId = this.$route.params.id;
      socket.emit("chat msg", msg, toyId);
      this.msgTxt = "";
    },
    userStartTyping() {
      //   setTimeout(() => {
      //     socket.emit("userTyping", this.$route.params.id);
      //   }, 2000);
      //   this.msgUserTyping = "user is typing..."
      socket.emit(
        "userTyping",
        this.$route.params.id,
        this.currUser[0].userName
      );
    }
    // userStopTyping() {
    //   // setTimeout(() => {
    //   //   this.msgUserTyping = "";
    //   // }, 2500);
    //   // // this.msgUserTyping = "";
    // }
  }
};
</script>


<style scoped>
form {
  background: rgb(130, 224, 255);
  padding: 3px;
  position: relative;
  bottom: 0;
  width: 100%;
  margin-bottom: 40px;
}

form input {
  border: 0;
  padding: 10px;
  width: 90%;
  margin-right: 0.5%;
}

form button {
  width: 9%;
  background: rgb(130, 224, 255);
  border: none;
  padding: 10px;
}

#messages {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-bottom: 30px;
}

#messages li {
  padding: 5px 10px;
}

#messages li:nth-child(odd) {
  background: #eee;
}
</style>
