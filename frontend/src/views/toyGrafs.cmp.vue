<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    this.renderChart({
      labels: ["Nice", "Smart", "Baby", "Funny"],
      datasets: [
        {
          label: "Total price per Toy Type",
          backgroundColor: "#f87979",
          data: [this.nice, this.smart, this.baby, this.funny]
        }
      ]
    });
  },
  created() {
    this.$store.dispatch({ type: "loadToys" });
    this.nice = this.$store.getters.getToyNicePrice;
    this.funny = this.$store.getters.getToyFunnyPrice;
    this.smart = this.$store.getters.getToySmartPrice;
    this.baby = this.$store.getters.getToyBabyPrice;
  },
  data: () => ({
    nice: 0,
    funny: 0,
    smart: 0,
    baby: 0
  })
};
</script>
<style>
.chartjs-render-monitor {
  max-width: 700px;
  max-height: 640px;
  margin: 0 auto;
  font-size: 30px;
}
</style>