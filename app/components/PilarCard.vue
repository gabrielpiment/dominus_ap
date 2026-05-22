<template>
  <div
    class="bg-dominus-surface border rounded-xl p-5 relative overflow-hidden transition-all duration-200 hover:border-dominus-gold/20 print-break-inside-avoid"
    :class="destaque ? 'border-dominus-gold/40 shadow-[0_0_24px_rgba(201,168,76,0.08)]' : 'border-dominus-border'"
  >
    <!-- Linha topo -->
    <div
      class="absolute top-0 left-0 right-0 h-px"
      :style="{ background: `linear-gradient(90deg, transparent, ${cor}60, transparent)` }"
    />

    <!-- Header -->
    <div class="flex items-start justify-between gap-3 mb-3">
      <div class="flex items-center gap-2.5">
        <span class="text-xl">{{ resultado.icone }}</span>
        <div>
          <span
            class="text-[9px] font-black tracking-[2px] uppercase px-2 py-0.5 rounded-sm border"
            :style="{ color: cor, borderColor: `${cor}30`, background: `${cor}0d` }"
          >
            {{ resultado.codigo }}
          </span>
          <p class="text-white font-black text-sm mt-0.5 leading-tight">{{ resultado.titulo }}</p>
        </div>
      </div>

      <!-- Score -->
      <div class="text-right flex-shrink-0">
        <span class="font-display text-3xl font-black leading-none" :style="{ color: cor }">
          {{ resultado.nota.toFixed(0) }}
        </span>
        <span class="text-dominus-subtle text-xs">/100</span>
      </div>
    </div>

    <!-- Barra de progresso -->
    <div class="h-1.5 bg-dominus-elevated rounded-full overflow-hidden mb-3">
      <div
        class="h-full rounded-full transition-all duration-700 ease-out"
        :style="{ width: `${resultado.nota}%`, background: cor }"
      />
    </div>

    <!-- Análise textual -->
    <p class="text-dominus-muted text-xs leading-relaxed">{{ analise }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { PILARES } from '~/shared/types/Diagnostico'
import type { ResultadoPilar } from '~/shared/types/Diagnostico'

const props = defineProps<{
  resultado: ResultadoPilar
  destaque?: boolean
}>()

const cor = computed(() => {
  const n = props.resultado.nota
  if (n >= 75) return '#22c55e'
  if (n >= 60) return '#C9A84C'
  if (n >= 40) return '#f97316'
  return '#ef4444'
})

const analise = computed(() => {
  const pilar = PILARES.find((p) => p.id === props.resultado.pilarId)
  if (!pilar) return ''
  const n = props.resultado.nota
  if (n >= 75) return pilar.analiseAlta
  if (n >= 50) return pilar.analiseMedia
  return pilar.analiseBaixa
})
</script>
