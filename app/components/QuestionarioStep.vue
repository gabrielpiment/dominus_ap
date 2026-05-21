<template>
  <div class="space-y-7">
    <!-- Cabeçalho da seção -->
    <div>
      <div class="flex items-center gap-3 mb-1">
        <span class="text-[10px] font-black tracking-[3px] uppercase text-dominus-gold/60">Alavanca {{ secao.id }}</span>
      </div>
      <h2 class="font-display text-2xl sm:text-3xl font-black text-dominus-gold leading-tight">
        {{ secao.titulo }}
      </h2>
      <p class="text-dominus-muted text-sm mt-1 tracking-wide">{{ secao.foco }}</p>
    </div>

    <!-- Perguntas -->
    <div class="space-y-3">
      <div
        v-for="pergunta in secao.perguntas"
        :key="pergunta.id"
        class="bg-dominus-void border border-dominus-border rounded-lg p-4 relative overflow-hidden transition-all duration-200"
        :class="respostas[pergunta.id] !== undefined ? 'border-dominus-gold/30' : ''"
      >
        <div
          class="absolute top-0 left-0 right-0 h-px transition-all duration-300"
          :class="respostas[pergunta.id] !== undefined
            ? 'bg-gradient-to-r from-transparent via-dominus-gold to-transparent'
            : 'bg-dominus-border'"
        />

        <p class="text-white text-sm font-medium mb-4 leading-relaxed">{{ pergunta.texto }}</p>

        <div class="flex gap-3">
          <button
            class="flex-1 py-2.5 px-4 rounded-lg text-[11px] font-black tracking-[2px] uppercase transition-all duration-200 border"
            :class="respostas[pergunta.id] === true
              ? 'bg-gradient-to-r from-dominus-gold to-dominus-gold-light text-dominus-void border-transparent shadow-[0_0_16px_rgba(201,168,76,0.25)]'
              : 'bg-transparent border-dominus-border text-dominus-subtle hover:border-dominus-gold/50 hover:text-dominus-gold'"
            @click="emit('responder', pergunta.id, true)"
          >
            ✓ Sim
          </button>
          <button
            class="flex-1 py-2.5 px-4 rounded-lg text-[11px] font-black tracking-[2px] uppercase transition-all duration-200 border"
            :class="respostas[pergunta.id] === false
              ? 'bg-dominus-elevated text-white border-dominus-subtle'
              : 'bg-transparent border-dominus-border text-dominus-subtle hover:border-dominus-subtle/80 hover:text-white'"
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

defineProps<{ secao: Secao; respostas: Record<string, boolean> }>()
const emit = defineEmits<{ responder: [id: string, valor: boolean] }>()
</script>
