<template>
  <section class="toy-list">
    <v-layout style="margin: 20px;">
      <v-flex xs12 sm6 offset-sm3 style="max-width: 50rem;">
        <v-card>
          <v-img style="padding: 100px;" :src="currToy.img" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{currToy.name}}</h3>
              <h3 class="headline mb-0">{{currToy.price}}$</h3>
              <h3 class="headline mb-0">{{showTime}}</h3>
              <h3 v-if="currToy.inStock" class="headline mb-0">In Stock</h3>
              <h3 v-else class="headline mb-0">Not in Stock</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange" @click="goToEdit">Edit</v-btn>
            <v-btn flat color="orange" @click="deleteToy">Delete</v-btn>
            <v-btn flat color="orange" @click="goToDetails">Details</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
const moment = require('moment')
export default {
  props: ["currToy"],

  methods: {
    goToDetails() {
      this.$router.push(`toy/${this.currToy._id}`);
    },
    goToEdit() {
      this.$router.push(`edit/${this.currToy._id}`);
    },
    deleteToy() {
      var copy = JSON.parse(JSON.stringify(this.currToy));
      this.$emit("deleteToy", copy);
      copy = {};
    }
  },
  computed: {
     showTime(){ 
     return moment().startOf(this.currToy.time).fromNow(Date.now()); 
    }
  },
  components: {}
};
</script>
