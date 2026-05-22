<template>
  <div class="relative w-full max-w-md mx-auto">
    <Radar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
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
import { PILARES } from '~/shared/types/Diagnostico'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

const props = defineProps<{ scores: number[] }>()

const chartData = computed(() => ({
  labels: PILARES.map((p) => p.titulo),
  datasets: [
    {
      label: 'Sua empresa',
      data: props.scores,
      backgroundColor: 'rgba(201,168,76,0.12)',
      borderColor: '#C9A84C',
      borderWidth: 2,
      pointBackgroundColor: '#C9A84C',
      pointBorderColor: '#0a0a0a',
      pointBorderWidth: 2,
      pointRadius: 5,
    },
  ],
}))

const chartOptions = {
  responsive: true,
  layout: {
    padding: {
      left: 45,
      right: 45,
      top: 15,
      bottom: 15
    }
  },
  scales: {
    r: {
      min: 0,
      max: 100,
      ticks: {
        stepSize: 25,
        font: { size: 10, family: 'Montserrat' },
        color: '#444',
        backdropColor: 'transparent',
        callback: (value: string | number) => `${value}`,
      },
      pointLabels: {
        font: { size: 11, family: 'Montserrat', weight: 700 as const },
        color: '#aaa',
      },
      grid: { color: '#1e1e1e' },
      angleLines: { color: '#1e1e1e' },
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: '#111',
      borderColor: '#1e1e1e',
      borderWidth: 1,
      titleColor: '#C9A84C',
      bodyColor: '#aaa',
      callbacks: { label: (ctx: any) => ` ${ctx.raw}/100` },
    },
  },
}
</script>
