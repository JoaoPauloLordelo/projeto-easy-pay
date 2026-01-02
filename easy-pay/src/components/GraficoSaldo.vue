<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

import { Bar } from 'vue-chartjs'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
)

const chartData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  datasets: [
    {
      label: 'Vendas',
      backgroundColor: "#FF8000",
      data: [40, 20, 12, 39]
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}
</script>

<template>
  <section class="areaGrafico">
      <Bar :data="chartData" :options="chartOptions" />
  </section>
</template>

<style scoped>
    .areaGrafico{
        border: 1px solid;
        border-color: var(--cinza-mais-claro);
        border-radius: 10px;
        padding: 20px;
        width: 100%
        ;
    }
</style>
