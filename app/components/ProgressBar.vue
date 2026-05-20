<template>
  <div id="progress-bar-root">
    <div class="flex items-center justify-between mb-2">
      <span class="text-sm font-medium text-gray-500">
        Seção {{ stepAtual + 1 }} de {{ total }}
      </span>
      <span class="text-sm font-semibold text-indigo-600">{{ progresso }}%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2.5">
      <div
        class="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
        :style="{ width: `${progresso}%` }"
      />
    </div>
    <div class="flex justify-between mt-3">
      <div
        v-for="(secao, i) in secoes"
        :key="secao.id"
        class="flex flex-col items-center gap-1"
      >
        <div
          class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
          :class="i < stepAtual
            ? 'bg-indigo-600 text-white'
            : i === stepAtual
              ? 'bg-indigo-100 text-indigo-700 ring-2 ring-indigo-600'
              : 'bg-gray-100 text-gray-400'"
        >
          <span v-if="i < stepAtual">✓</span>
          <span v-else>{{ i + 1 }}</span>
        </div>
        <span class="hidden sm:block text-[10px] text-gray-400 max-w-[64px] text-center leading-tight">
          {{ secao.titulo.split(' ')[0] }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SECOES } from '~/shared/types/Diagnostico'

const props = defineProps<{
  stepAtual: number
  total: number
  progresso: number
}>()

const secoes = SECOES
</script>
