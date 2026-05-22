<template>
  <div class="bg-dominus-surface border border-dominus-border rounded-xl overflow-hidden relative print-break-inside-avoid">
    <!-- Linha topo com cor da classificação -->
    <div
      class="absolute top-0 left-0 right-0 h-0.5"
      :style="{ background: info.corGradient }"
    />

    <div class="flex items-center gap-5 p-6">
      <!-- Badge de nível -->
      <div
        class="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 relative"
        :style="{ background: info.corGradient }"
      >
        <span class="text-2xl font-black text-dominus-void">{{ nivel }}</span>
      </div>

      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <span
            class="text-[9px] font-black tracking-[2px] uppercase px-2 py-0.5 rounded-sm border"
            :style="{ color: info.cor, borderColor: `${info.cor}40`, background: `${info.cor}10` }"
          >
            {{ info.intervaloMin }} – {{ info.intervaloMax }} pontos
          </span>
        </div>
        <h3 class="text-white font-black text-lg leading-snug">{{ info.titulo }}</h3>
      </div>
    </div>

    <div class="px-6 pb-6 border-t border-dominus-border pt-4">
      <p class="text-dominus-muted text-sm leading-relaxed">{{ info.leitura }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { InfoClassificacao } from '~/shared/types/Diagnostico'

const props = defineProps<{ info: InfoClassificacao }>()

const nivelMap: Record<string, string> = {
  caos: '⚠',
  improviso: '≈',
  parcial: '◑',
  controle: '✦',
  maturidade: '★',
}

const nivel = computed(() => nivelMap[props.info.classificacao] ?? '?')
</script>
