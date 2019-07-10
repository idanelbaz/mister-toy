<template>
  <section style="display: flex;justify-content: space-evenly;" class="toy-filter">
          <v-btn v-if="currUserAdmin"  icon>
        <v-icon title="Add toy" @click="addTodo">add</v-icon>
        Add Toy
      </v-btn>
            <v-btn @click="logOut"  icon>
        <v-icon title="LogOut" >all_out</v-icon>
        LogOut
      </v-btn>
    <v-flex style="display: flex;" xs12 sm6 md3>
      <v-text-field
        type="text"
        v-model="filterBy.txt"
        autofocus
        @input="filterToys"
        label="Search a Toy"
        box
        style="min-width:200px;"
      ></v-text-field>
       <v-flex  xs12 sm6 md3 d-flex>
      <v-select style="margin-left: 30px;flex-grow: 1;max-width:100px; " v-model="filterBy.type" @change="filterToys" :items="items" label="type"></v-select>
    </v-flex>
      <v-flex  xs12 sm6 md3 d-flex>
      <v-select style="margin-left: 30px;flex-grow: 1;max-width:100px;
    margin-left: 24px;"  v-model="filterBy.inStock" @change="filterToys" :items="itemsStock" label="inStock"></v-select>
    </v-flex>
    </v-flex>
  </section>
</template>

<script>
import userService from "../services/user-service.js"

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
    },
        addTodo() {
      this.$router.push("/add");
    },
     logOut(){ 
     userService.logOut()
     .then(()=> { 
       this.$store.state.user = '';
       this.$router.push("/");
     })
    }
  },
  components: {},
  computed: { 
    currUserAdmin() {
      var user = userService.getLoggedinUser();
      if (!user) return '';
      if(user[0].isAdmin) return true
      return false
    }
  }
};
</script>
