<template>
  <div
    id="etapa-card-root"
    class="rounded-2xl overflow-hidden shadow-lg"
  >
    <div
      class="flex items-center gap-4 px-6 py-5 text-white"
      :class="bgClass"
    >
      <div class="text-6xl font-black opacity-20 select-none">{{ info.etapa }}</div>
      <div class="flex-1">
        <p class="text-xs font-semibold uppercase tracking-widest opacity-80 mb-0.5">Etapa {{ info.etapa }}</p>
        <h3 class="text-xl font-bold leading-tight">{{ info.slogan }}</h3>
        <p class="text-xs opacity-80 mt-1">{{ info.intervalo }}</p>
      </div>
      <div class="text-5xl font-black">{{ info.etapa }}</div>
    </div>
    <div class="bg-white px-6 py-5 space-y-3">
      <p class="font-semibold text-gray-800">{{ info.perfil }}</p>
      <p class="text-sm text-gray-600 leading-relaxed">{{ info.descricao }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InfoEtapa } from '~/shared/types/Diagnostico'

const props = defineProps<{
  info: InfoEtapa
}>()

const bgClass = computed(() => {
  const map: Record<string, string> = {
    A: 'bg-green-500',
    B: 'bg-yellow-400',
    C: 'bg-orange-500',
    D: 'bg-red-600',
  }
  return map[props.info.etapa]
})
</script>
