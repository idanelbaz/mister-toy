<template>
  <section style="text-align: -webkit-center;" class="toy-filter">
    <v-flex style="display: flex;" xs12 sm6 md3>
      <v-text-field
        type="text"
        v-model="filterBy.txt"
        autofocus
        @input="filterToys"
        label="Search a Toy"
        box
      ></v-text-field>
       <v-flex style="margin-left: 20px;" xs12 sm6 md3 d-flex>
      <v-select v-model="filterBy.type" @change="filterToys" :items="items" label="type"></v-select>
    </v-flex>
      <v-flex style="margin-left: 20px;" xs12 sm6 md3 d-flex>
      <v-select v-model="filterBy.inStock" @change="filterToys" :items="itemsStock" label="inStock"></v-select>
    </v-flex>
    </v-flex>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        txt: '',
        type:'',
        inStock:'', 
      },
       items: ["Nice", "Funny", "Smart", "Baby"],
       itemsStock: [true, false]
    };
  },

  methods: {
    filterToys() {
      var copy = JSON.parse(JSON.stringify(this.filterBy))
      this.$emit("filterData", copy);
    }
  },
  components: {}
};
</script>
