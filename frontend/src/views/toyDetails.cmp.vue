<template>
  <section class="app-details">
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
        :src="toy.img"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{toy.name}}</h3>
            <div>{{toy.price}}$</div>
            <div>{{toy.type}}</div>
            <div>{{toy._id}}</div>
            <div>{{showTime}}</div>
             <div v-if="toy.inStock">In Stock</div>
             <div v-if="!toy.inStock">Not In Stock</div>
          </div>
        </v-card-title>

        <v-card-actions>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </section>
</template>

<script>
import eventBus from "../eventBus.js";
import toyService from "../services/toy-service.js";
const moment = require('moment')


export default {
  data: () => ({
   toy: {}
  }),
  created() {
    const id = this.$route.params.id;
    console.log(id)
      toyService.getToyById(id).then(toy => {
        this.toy = toy;
      });
  },
  methods: {
  }, 
  computed: { 
    showTime(){ 
     return moment().startOf(this.toy.time).fromNow(); 
    }
  }
};
</script>

<style>
</style>
