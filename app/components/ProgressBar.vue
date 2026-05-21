<template>
  <div class="space-y-4">
    <!-- Steps -->
    <div class="flex items-center justify-between">
      <template v-for="(secao, i) in secoes" :key="secao.id">
        <div class="flex flex-col items-center gap-1.5">
          <div
            class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 border"
            :class="i < stepAtual
              ? 'bg-dominus-gold border-dominus-gold text-dominus-void'
              : i === stepAtual
                ? 'bg-dominus-void border-dominus-gold text-dominus-gold shadow-[0_0_12px_rgba(201,168,76,0.3)]'
                : 'bg-dominus-elevated border-dominus-border text-dominus-subtle'"
          >
            <svg v-if="i < stepAtual" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
            </svg>
            <span v-else>{{ i + 1 }}</span>
          </div>
          <span class="hidden sm:block text-[9px] font-bold tracking-[1px] uppercase text-center leading-tight"
            :class="i <= stepAtual ? 'text-dominus-gold' : 'text-dominus-subtle'"
            style="max-width: 60px;">
            {{ secao.titulo.split(' ')[0] }}
          </span>
        </div>
        <!-- Conector -->
        <div v-if="i < secoes.length - 1" class="flex-1 mx-2 h-px relative">
          <div class="absolute inset-0 bg-dominus-border" />
          <div
            class="absolute inset-y-0 left-0 bg-gradient-to-r from-dominus-gold to-dominus-gold-light transition-all duration-500"
            :style="{ width: i < stepAtual ? '100%' : '0%' }"
          />
        </div>
      </template>
    </div>

    <!-- Barra + label -->
    <div class="space-y-1.5">
      <div class="flex justify-between items-center">
        <span class="text-[10px] font-bold tracking-[2px] uppercase text-dominus-subtle">
          Seção {{ stepAtual + 1 }} de {{ total }}
        </span>
        <span class="text-[10px] font-black text-dominus-gold tracking-wider">{{ progresso }}%</span>
      </div>
      <div class="h-1 bg-dominus-elevated rounded-full overflow-hidden">
        <div
          class="h-full rounded-full transition-all duration-500 ease-out"
          style="background: linear-gradient(90deg, #C9A84C, #E8CC80);"
          :style="{ width: `${progresso}%` }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SECOES } from '~/shared/types/Diagnostico'

defineProps<{ stepAtual: number; total: number; progresso: number }>()
const secoes = SECOES
</script>
