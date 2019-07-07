<template>
  <section class="toy-home">
    <!-- <img v-if="isLoading" src="../../img/loading.gif" /> -->
    <toy-filter @filterData="filterToys"></toy-filter>
    <toy-list
      @addToy="addNewToy"
      @deleteToy="deleteCurrToy"
      :toys="getToys"
    >
    </toy-list>
  </section>
</template>

<script>
import toyList from "../components/toyList.cmp.vue";
import toyFilter from "../components/toyFilter.cmp.vue"
import eventBus from '../eventBus.js'

export default {
    data() {
        return {
            filterBy: '',
            // isLoading: true,

        }
    },
     created() {
        this.$store.dispatch({ type: 'loadToys' })
    },
  components: {
    toyList,
    toyFilter
  },
      computed: {
        getToys() {
            return this.$store.getters.getToys
        },

    },
  methods: {
        filterToys(filter) {
            this.filterBy = filter
            this.$store.commit('setFilter', this.filterBy)
        },
        deleteCurrToy(toy) {
            this.$store.dispatch({ type: 'deleteToy', toy })
                .then(() => {
                    eventBus.$emit('fireSwal', { msg: 'Good job', subMsg: 'Toy delated', type: 'success' })
                })
                .catch(err => {
                    eventBus.$emit('fireSwal', { msg: 'Not good', subMsg: 'Toy not deleted!', type: 'error' })
                })

        },
        addNewToy(newToy) {
            this.$store.dispatch({ type: 'saveToy', 'toy': newToy })
                .then(() => {
                    eventBus.$emit('fireSwal', { msg: 'Good job', subMsg: 'Toy added', type: 'success' })
                })
                .catch(err => {
                    eventBus.$emit('fireSwal', { msg: 'Not good', subMsg: 'Toy not added', type: 'error' })
                })

        }

    },
};
</script>
