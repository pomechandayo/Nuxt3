<template>
  <Bubble :data="chartData" />
  <!-- <Bar :data="chartData" /> -->
</template>

<script>
// DataPage.vue
// import { Bar } from 'vue-chartjs'
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  PointElement,
  LinearScale
} from 'chart.js'
import { Bubble } from 'vue-chartjs'

// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
ChartJS.register(LinearScale, PointElement, Tooltip, Legend)

export default {
//   components: { Bar },
  components: { Bubble },
  props: {
    chartData: {
        type: Object,
        default: null,
        required: true
    }
  }
}
</script>