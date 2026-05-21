<template>
  <div class="bg-dominus-surface border border-dominus-border rounded-xl overflow-hidden relative">
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dominus-gold to-transparent" />

    <div class="flex items-center gap-5 p-6">
      <!-- Grade letter -->
      <div
        class="w-16 h-16 rounded-xl flex items-center justify-center font-display text-3xl font-black flex-shrink-0"
        :style="{ background: `linear-gradient(135deg, ${corHex}, ${corHexLight})`, color: '#0a0a0a' }"
      >
        {{ info.etapa }}
      </div>

      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <span
            class="text-[9px] font-black tracking-[2px] uppercase px-2 py-0.5 rounded-sm border"
            :style="{ color: corHex, borderColor: `${corHex}40`, background: `${corHex}10` }"
          >
            Etapa {{ info.etapa }} · {{ info.intervalo }}
          </span>
        </div>
        <h3 class="text-white font-black text-base leading-snug">{{ info.slogan }}</h3>
      </div>
    </div>

    <div class="px-6 pb-6 border-t border-dominus-border pt-4 space-y-2">
      <p class="text-dominus-gold text-sm font-semibold">{{ info.perfil }}</p>
      <p class="text-dominus-muted text-sm leading-relaxed">{{ info.descricao }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InfoEtapa } from '~/shared/types/Diagnostico'

const props = defineProps<{ info: InfoEtapa }>()

const corMap: Record<string, [string, string]> = {
  A: ['#22c55e', '#4ade80'],
  B: ['#C9A84C', '#E8CC80'],
  C: ['#f97316', '#fb923c'],
  D: ['#ef4444', '#f87171'],
}

const corHex     = computed(() => corMap[props.info.etapa]?.[0] ?? '#C9A84C')
const corHexLight = computed(() => corMap[props.info.etapa]?.[1] ?? '#E8CC80')
</script>
