<template>
<v-conteiner style="margin: 1000px">
  <v-card min-width="80%">
    <v-card-title> Simple Chart </v-card-title>
    <v-card-text class="chart-container">
      <Chart :chartData="chartData" :options="options" />
    </v-card-text>
  </v-card>
</v-conteiner>
</template>

<script>
import Chart from "./linechart";
export default {
  components: {
    Chart,
  },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March'],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 20, 12],
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
        },
      },
    };
  },
};
</script>