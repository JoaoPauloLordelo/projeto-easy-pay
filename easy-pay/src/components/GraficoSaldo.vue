<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';
import BotaoPequeno from './BotaoPequeno.vue';
import { Bar, Line, Pie } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  LineElement,
  PointElement
} from 'chart.js'
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
)
const chartData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  datasets: [
    {
      label: 'Saldo',
      backgroundColor: "#FF8000",
      data: [40, 20, 12, 39, 50, 60, 100]
    },
    {
      label: 'Gasto',
      backgroundColor: "#BD702D",
      data: [20, 10, 6, 19, 25, 30, 50]
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
}

const listaGraficos : string[] = ["pie", "line", "bar"]
const listaImagemGraficos : string[]= ["orange_chart-pie.png", "orange_grafico-de-linha.png","orange_grafico-de-barras.png"]

const graficoAtual : Ref<string>= ref("bar")

const componenteGrafico = computed(() => {
  switch (graficoAtual.value) {
    case "bar":
      return Bar;
    case "line":
      return Line;
    case "pie":
      return Pie;
  }
})


</script>

<template>
  <section class="areaGrafico">
    
    <div class="grafico">
      //PENSAR SE VOU USAR V-IF OU NAO NESSE GRAFICO
      <component :is="componenteGrafico" :data="chartData" :options="chartOptions"/>
    </div>
    <div class="defineGrafico">
      <BotaoPequeno v-for="grafico in listaGraficos" :image="`/icons/graficos/${listaImagemGraficos[listaGraficos.indexOf(grafico)]}`" @click="graficoAtual = grafico"/>
    </div>
  </section>
</template>

<style scoped>
    .areaGrafico{
      display: flex;
        border: 1px solid;
        border-color: var(--cinza-mais-claro);
        border-radius: 10px;
        padding: 20px;
        width: 100%;
    }


    .defineGrafico{
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 30px;
    }

    .grafico{
      width: 350px;
      height: 200px;
      margin: auto;

    }
</style>
