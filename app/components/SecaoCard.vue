<template>
  <div id="secao-card-root" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
    <div class="flex items-center gap-3 mb-3">
      <span class="text-2xl">{{ secao.icone }}</span>
      <div class="flex-1 min-w-0">
        <h4 class="font-bold text-gray-900 text-sm truncate">{{ secao.titulo }}</h4>
        <p class="text-xs text-gray-400">{{ secao.foco }}</p>
      </div>
      <div class="text-right shrink-0">
        <span class="text-2xl font-black" :class="scoreColor">{{ score.toFixed(1) }}</span>
        <span class="text-xs text-gray-400">/10</span>
      </div>
    </div>

    <div class="w-full bg-gray-100 rounded-full h-1.5 mb-3">
      <div
        class="h-1.5 rounded-full transition-all duration-700"
        :class="barColor"
        :style="{ width: `${(score / 10) * 100}%` }"
      />
    </div>

    <p class="text-xs text-gray-600 leading-relaxed">{{ secao.recomendacao }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Secao } from '~/shared/types/Diagnostico'

const props = defineProps<{
  secao: Secao
  score: number
}>()

const scoreColor = computed(() => {
  if (props.score >= 8) return 'text-green-600'
  if (props.score >= 5) return 'text-yellow-500'
  return 'text-red-500'
})

const barColor = computed(() => {
  if (props.score >= 8) return 'bg-green-500'
  if (props.score >= 5) return 'bg-yellow-400'
  return 'bg-red-500'
})
</script>
