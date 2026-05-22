<template>
  <div class="space-y-6">
    <!-- Cabeçalho do pilar -->
    <div>
      <div class="flex items-center gap-3 mb-2">
        <span class="text-2xl">{{ pilar.icone }}</span>
        <span class="text-[10px] font-black tracking-[3px] uppercase text-dominus-gold-dark">
          {{ pilar.codigo }} — Pilar {{ pilar.id }} de 4
        </span>
      </div>
      <h2 class="font-display text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-1">
        {{ pilar.titulo }}
      </h2>
      <p class="text-slate-500 text-sm leading-relaxed">{{ pilar.objetivo }}</p>
    </div>

    <!-- Perguntas -->
    <div class="space-y-4">
      <div
        v-for="(pergunta, qi) in pilar.perguntas"
        :key="pergunta.id"
        class="bg-slate-50/40 border rounded-xl p-5 relative overflow-hidden transition-all duration-200"
        :class="respostas[pergunta.id] !== undefined
          ? 'border-dominus-gold/30 bg-white shadow-[0_4px_16px_rgba(201,168,76,0.05)]'
          : 'border-slate-100'"
      >
        <!-- Linha topo animada -->
        <div
          class="absolute top-0 left-0 right-0 h-px transition-all duration-300"
          :class="respostas[pergunta.id] !== undefined
            ? 'bg-gradient-to-r from-transparent via-dominus-gold/40 to-transparent'
            : 'bg-slate-200/40'"
        />

        <!-- Texto da pergunta -->
        <p class="text-slate-800 text-sm font-semibold leading-relaxed mb-4">
          <span class="text-dominus-gold text-xs font-black mr-2">{{ qi + 1 }}.</span>
          {{ pergunta.texto }}
        </p>

        <!-- Escala 1-5 -->
        <div class="grid grid-cols-5 gap-1.5">
          <button
            v-for="valor in [1, 2, 3, 4, 5]"
            :key="valor"
            type="button"
            class="group flex flex-col items-center gap-1.5 py-2.5 px-1 rounded-lg border transition-all duration-200 cursor-pointer bg-white"
            :class="respostas[pergunta.id] === valor
              ? 'border-dominus-gold bg-dominus-gold/10 shadow-[0_2px_10px_rgba(201,168,76,0.12)]'
              : 'border-slate-200 hover:border-dominus-gold/40 hover:bg-dominus-gold/5'"
            @click="emit('responder', pergunta.id, valor)"
          >
            <!-- Número -->
            <span
              class="text-base font-black transition-all duration-200 leading-none"
              :class="respostas[pergunta.id] === valor
                ? 'text-dominus-gold'
                : 'text-slate-400 group-hover:text-dominus-gold-dark'"
            >
              {{ valor }}
            </span>
            <!-- Bolinha indicadora -->
            <span
              class="w-1.5 h-1.5 rounded-full transition-all duration-200"
              :class="respostas[pergunta.id] === valor
                ? 'bg-dominus-gold'
                : 'bg-slate-100 group-hover:bg-slate-300'"
            />
          </button>
        </div>

        <!-- Label da opção selecionada -->
        <Transition name="label-fade">
          <p
            v-if="respostas[pergunta.id] !== undefined"
            class="mt-3 text-[11px] text-dominus-gold-dark font-bold tracking-wide"
          >
            {{ getLabel(pergunta, respostas[pergunta.id]!) }}
          </p>
        </Transition>
      </div>
    </div>

    <!-- Legenda da escala -->
    <div class="flex items-center justify-between text-[10px] text-slate-400 font-semibold tracking-wide px-1">
      <span>1 — Não existe</span>
      <div class="flex-1 mx-3 h-px bg-slate-100" />
      <span>5 — Documentado e acompanhado</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LABELS_PADRAO } from '~/shared/types/Diagnostico'
import type { Pilar, Pergunta } from '~/shared/types/Diagnostico'

defineProps<{
  pilar: Pilar
  respostas: Record<string, number>
}>()

const emit = defineEmits<{ responder: [id: string, valor: number] }>()

function getLabel(pergunta: Pergunta, valor: number): string {
  return pergunta.labelsCustom?.[valor] ?? LABELS_PADRAO[valor] ?? ''
}
</script>

<style scoped>
.label-fade-enter-active { transition: all 0.25s ease; }
.label-fade-leave-active { transition: all 0.15s ease; }
.label-fade-enter-from   { opacity: 0; transform: translateY(4px); }
.label-fade-leave-to     { opacity: 0; transform: translateY(-4px); }
</style>
