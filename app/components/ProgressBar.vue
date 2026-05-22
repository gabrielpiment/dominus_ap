<template>
  <div class="space-y-4">
    <!-- Steps dos pilares -->
    <div class="flex items-center justify-between">
      <template v-for="(pilar, i) in pilares" :key="pilar.id">
        <div class="flex flex-col items-center gap-1.5">
          <div
            class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border"
            :class="i < stepAtual
              ? 'bg-dominus-gold border-dominus-gold text-dominus-void font-black'
              : i === stepAtual
                ? 'bg-white border-2 border-dominus-gold text-dominus-gold shadow-[0_0_12px_rgba(201,168,76,0.18)] font-black'
                : 'bg-slate-50 border-slate-200 text-slate-400 font-bold'"
          >
            <svg v-if="i < stepAtual" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M5 13l4 4L19 7" />
            </svg>
            <span v-else class="text-xs font-black">{{ pilar.codigo }}</span>
          </div>
          <span
            class="hidden sm:block text-[9px] font-bold tracking-[1.2px] uppercase text-center leading-tight transition-colors duration-300"
            :class="i === stepAtual ? 'text-dominus-gold' : i < stepAtual ? 'text-slate-600' : 'text-slate-400'"
            style="max-width: 70px;"
          >
            {{ pilar.titulo.split('/')[0]?.trim() }}
          </span>
        </div>
        <!-- Conector -->
        <div v-if="i < pilares.length - 1" class="flex-1 mx-2 h-px relative">
          <div class="absolute inset-0 bg-slate-100" />
          <div
            class="absolute inset-y-0 left-0 transition-all duration-500"
            style="background: linear-gradient(90deg, #C9A84C, #E8CC80);"
            :style="{ width: i < stepAtual ? '100%' : '0%' }"
          />
        </div>
      </template>
    </div>

    <!-- Barra de progresso geral -->
    <div class="space-y-1.5">
      <div class="flex justify-between items-center">
        <span class="text-[10px] font-bold tracking-[2px] uppercase text-slate-500">
          Pilar {{ stepAtual + 1 }} de {{ total }}
        </span>
        <span class="text-[10px] font-black text-dominus-gold tracking-wider">{{ progresso }}%</span>
      </div>
      <div class="h-1 bg-slate-100 rounded-full overflow-hidden">
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
import { PILARES } from '~/shared/types/Diagnostico'

defineProps<{ stepAtual: number; total: number; progresso: number }>()

const pilares = PILARES
</script>
