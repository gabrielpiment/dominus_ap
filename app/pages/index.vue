<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex flex-col">
    <header class="px-6 py-5 flex items-center justify-between max-w-5xl mx-auto w-full">
      <div class="flex items-center gap-2">
        <span class="text-2xl font-black text-white">Dominus</span>
        <span class="text-2xl font-black text-indigo-400">AP</span>
      </div>
    </header>

    <main class="flex-1 flex items-center justify-center px-6 py-12">
      <div class="max-w-3xl w-full text-center space-y-8">
        <div class="space-y-4">
          <span class="inline-block bg-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-indigo-500/30">
            Avaliação Empresarial 360°
          </span>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Descubra em que <br />
            <span class="text-indigo-400">etapa está sua empresa</span>
          </h1>
          <p class="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Em menos de 5 minutos, avalie 5 alavancas comerciais críticas e receba um diagnóstico completo com recomendações personalizadas.
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-2xl mx-auto">
          <div
            v-for="secao in secoes"
            :key="secao.id"
            class="bg-white/5 border border-white/10 rounded-xl p-3 text-center"
          >
            <span class="text-2xl block mb-1">{{ secao.icone }}</span>
            <span class="text-[11px] text-slate-400 leading-tight block">{{ secao.titulo }}</span>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink
            to="/diagnostico"
            class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-200 shadow-lg shadow-indigo-900/50 hover:shadow-indigo-700/50 hover:-translate-y-0.5"
          >
            Iniciar Diagnóstico
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
          <p class="text-slate-500 text-sm">Gratuito · Sem cadastro · ~5 min</p>
        </div>

        <div class="grid grid-cols-3 gap-6 max-w-sm mx-auto pt-4 border-t border-white/10">
          <div class="text-center">
            <p class="text-2xl font-black text-white">5</p>
            <p class="text-xs text-slate-500">Alavancas</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-black text-white">4</p>
            <p class="text-xs text-slate-500">Etapas</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-black text-white">360°</p>
            <p class="text-xs text-slate-500">Diagnóstico</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { SECOES } from '~/shared/types/Diagnostico'

const secoes = SECOES

definePageMeta({ layout: false })
</script>
