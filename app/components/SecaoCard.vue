<template>
  <div class="bg-dominus-surface border border-dominus-border rounded-xl p-5 relative overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dominus-gold/30 to-transparent" />

    <div class="flex items-start justify-between gap-4 mb-3">
      <div class="flex-1 min-w-0">
        <p class="text-[9px] font-black tracking-[2px] uppercase text-dominus-subtle mb-1">{{ secao.icone }} {{ secao.foco }}</p>
        <h4 class="font-black text-white text-sm">{{ secao.titulo }}</h4>
      </div>
      <div class="text-right flex-shrink-0">
        <span class="font-display text-2xl font-black" :style="{ color: corScore }">
          {{ score.toFixed(1) }}
        </span>
        <span class="text-dominus-subtle text-xs">/10</span>
      </div>
    </div>

    <div class="h-1 bg-dominus-elevated rounded-full overflow-hidden mb-4">
      <div
        class="h-full rounded-full transition-all duration-700"
        :style="{ width: `${(score / 10) * 100}%`, background: corScore }"
      />
    </div>

    <p class="text-dominus-muted text-xs leading-relaxed">{{ secao.recomendacao }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Secao } from '~/shared/types/Diagnostico'

const props = defineProps<{ secao: Secao; score: number }>()

const corScore = computed(() => {
  if (props.score >= 8) return '#22c55e'
  if (props.score >= 5) return '#C9A84C'
  return '#ef4444'
})
</script>
