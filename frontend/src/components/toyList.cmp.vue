<template>
  <section style="display:flex;flex-wrap: wrap;" class="toy-list">
    <toy-Preview @deleteToy="deleteCurrToy" v-for="toy in toys" :key="toy._id" :currToy="toy"></toy-Preview>
    <br />
  </section>
</template>

<script>
import toyPreview from "../components/toyPreview.cmp.vue";
import { constants } from "crypto";
export default {
  props: ["toys"],
  methods: {
    deleteCurrToy(toy) {
      this.$emit("deleteToy", toy);
    }
  },

  components: {
    toyPreview
  }
};
</script>
