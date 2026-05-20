<template>
  <div id="questionario-step-root" class="space-y-6">
    <div class="flex items-start gap-4">
      <span class="text-4xl">{{ secao.icone }}</span>
      <div>
        <h2 class="text-2xl font-bold text-gray-900">{{ secao.titulo }}</h2>
        <p class="text-sm text-indigo-600 font-medium mt-0.5">{{ secao.foco }}</p>
      </div>
    </div>

    <div class="space-y-4">
      <div
        v-for="pergunta in secao.perguntas"
        :key="pergunta.id"
        class="bg-gray-50 rounded-xl p-4 border border-gray-100"
      >
        <p class="text-gray-800 font-medium mb-3">{{ pergunta.texto }}</p>
        <div class="flex gap-3">
          <button
            class="flex-1 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 border-2"
            :class="respostas[pergunta.id] === true
              ? 'bg-green-500 border-green-500 text-white shadow-sm'
              : 'bg-white border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-700'"
            @click="emit('responder', pergunta.id, true)"
          >
            ✓ Sim
          </button>
          <button
            class="flex-1 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 border-2"
            :class="respostas[pergunta.id] === false
              ? 'bg-red-500 border-red-500 text-white shadow-sm'
              : 'bg-white border-gray-200 text-gray-600 hover:border-red-300 hover:text-red-700'"
            @click="emit('responder', pergunta.id, false)"
          >
            ✗ Não
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Secao } from '~/shared/types/Diagnostico'

defineProps<{
  secao: Secao
  respostas: Record<string, boolean>
}>()

const emit = defineEmits<{
  responder: [id: string, valor: boolean]
}>()
</script>
