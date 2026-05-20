<template>
  <div id="radar-chart-root" class="relative w-full max-w-md mx-auto">
    <Radar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { Radar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { SECOES } from '~/shared/types/Diagnostico'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const props = defineProps<{
  scores: number[]
}>()

const labels = SECOES.map((s) => s.titulo)

const chartData = computed(() => ({
  labels,
  datasets: [
    {
      label: 'Sua empresa',
      data: props.scores,
      backgroundColor: 'rgba(99, 102, 241, 0.2)',
      borderColor: 'rgba(99, 102, 241, 0.9)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(99, 102, 241, 1)',
      pointRadius: 5,
    },
  ],
}))

const chartOptions = {
  responsive: true,
  scales: {
    r: {
      min: 0,
      max: 10,
      ticks: { stepSize: 2, font: { size: 11 } },
      pointLabels: { font: { size: 12 }, color: '#374151' },
      grid: { color: 'rgba(0,0,0,0.08)' },
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx: any) => ` ${ctx.raw}/10`,
      },
    },
  },
}
</script>
