<template>
  <section class="app-add">
    <h1 v-if="!isEdit">Edit The Toy</h1>
    <h1 v-else>Add A Toy</h1>

    <v-flex v-if="isImgOn" xs12 sm6 md3>
      <v-text-field v-model="newToy.name" label="Toy name"></v-text-field>
    </v-flex>
    <v-flex v-if="isImgOn" xs12 sm6 md3>
      <v-text-field v-model="newToy.price" label="Price"></v-text-field>
    </v-flex>
    <v-flex v-if="isImgOn" xs12 sm6 md3 d-flex>
      <v-select v-model="newToy.type" :items="items" label="type"></v-select>
    </v-flex>
    <label style="cursor: pointer;" v-if="isImgOn">
      Upload Toy Image
      <input @change="handleUploadImage" hidden type="file" />
    </label>

    <v-btn v-if="isImgOn" @click="addToy" color="success">Save</v-btn>
    <img v-if="!isImgOn" src="../assets/img/Spin.gif" alt />
  </section>
</template>

<script>
import eventBus from "../eventBus.js";
import toyService from "../services/toy-service.js";
export default {
  data: () => ({
    newToy: {
      name: "",
      price: "",
      type: "",
      inStock: true,
      img: ""
    },
    isImgOn: true,
    items: ["Nice", "Funny", "Smart", "Baby"],
    isEdit: true
  }),
  created() {
    const id = this.$route.params.id;
    if (id)
      toyService.getToyById(id).then(toy => {
        this.newToy = toy;
        this.isEdit = false;
      });
  },
  methods: {
    addToy() {
      console.log(this.newToy);
      this.$store
        .dispatch({ type: "saveToy", toy: this.newToy })
        .then(() => {
          eventBus.$emit("fireSwal", {
            msg: "Good job",
            subMsg: "Toy Saved",
            type: "success"
          });
        })
        .catch(err => {
          eventBus.$emit("fireSwal", {
            msg: "Not good",
            subMsg: "Toy not added",
            type: "error"
          });
        });

      this.newToy = {
        name: "",
        price: "",
        type: ""
      };
      this.$router.push(`/`);
    },
    handleUploadImage(ev) {
      this.isImgOn = false;
      const CLOUD_NAME = "dorjyx9ru";
      const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

      const formData = new FormData();
      formData.append("file", ev.target.files[0]);
      formData.append("upload_preset", "smaub6df");

      return fetch(UPLOAD_URL, {
        method: "POST",
        body: formData
      })
        .then(res => res.json())
        .then(res => {
          this.newToy.img = res.url;
          console.log(res);
          this.isImgOn = true;
          return res;
        })
        .catch(err => console.error(error));
    }
  }
};
</script>

<style>
</style>
