<template>
  <div class="min-h-screen bg-dominus-void flex flex-col">

    <!-- Header -->
    <header class="px-6 py-5 flex items-center justify-between max-w-5xl mx-auto w-full border-b border-dominus-border">
      <div class="flex items-center gap-3">
        <svg viewBox="0 0 36 36" fill="none" class="w-8 h-8">
          <path d="M18 2L22 10H30L24 16L26 24L18 20L10 24L12 16L6 10H14L18 2Z" fill="#C9A84C" opacity="0.9"/>
          <rect x="12" y="26" width="12" height="2" rx="1" fill="#C9A84C"/>
          <rect x="14" y="30" width="8" height="2" rx="1" fill="#C9A84C"/>
        </svg>
        <span class="font-sans text-lg font-black tracking-[4px] text-dominus-gold">DOMINUS</span>
      </div>
    </header>

    <!-- Hero -->
    <main class="flex-1 flex items-center justify-center px-6 py-16">
      <div class="max-w-3xl w-full text-center space-y-10">

        <div class="space-y-5">
          <span class="inline-block bg-dominus-gold/10 border border-dominus-gold/30 text-dominus-gold text-[10px] font-bold tracking-[3px] uppercase px-4 py-2 rounded-sm">
            Avaliação Empresarial 360 Graus
          </span>

          <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-dominus-gold leading-tight">
            Descubra em que etapa<br />
            <span class="text-white">está sua empresa.</span>
          </h1>

          <p class="text-dominus-muted text-base leading-relaxed max-w-xl mx-auto">
            Em menos de 5 minutos, avaliamos 5 alavancas comerciais críticas e entregamos um diagnóstico completo com recomendações para o seu negócio.
          </p>
        </div>

        <!-- Alavancas -->
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-2xl mx-auto">
          <div
            v-for="secao in secoes"
            :key="secao.id"
            class="bg-dominus-surface border border-dominus-border rounded-lg p-3 text-center relative overflow-hidden"
          >
            <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dominus-gold/40 to-transparent" />
            <span class="text-xl block mb-1">{{ secao.icone }}</span>
            <span class="text-[10px] text-dominus-subtle leading-tight block">{{ secao.titulo }}</span>
          </div>
        </div>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink
            to="/diagnostico"
            class="inline-flex items-center gap-2 font-black text-[11px] tracking-[2px] uppercase text-dominus-void bg-gradient-to-r from-dominus-gold via-dominus-gold-light to-dominus-gold px-8 py-4 rounded-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-lg shadow-dominus-gold/20"
          >
            Iniciar Diagnóstico
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
          <p class="text-dominus-subtle text-xs tracking-widest uppercase">Gratuito · Sem cadastro · ~5 min</p>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-6 max-w-sm mx-auto pt-6 border-t border-dominus-border">
          <div class="text-center">
            <p class="font-display text-2xl font-black text-dominus-gold">5</p>
            <p class="text-[10px] text-dominus-subtle tracking-[2px] uppercase mt-1">Alavancas</p>
          </div>
          <div class="text-center">
            <p class="font-display text-2xl font-black text-dominus-gold">4</p>
            <p class="text-[10px] text-dominus-subtle tracking-[2px] uppercase mt-1">Etapas</p>
          </div>
          <div class="text-center">
            <p class="font-display text-2xl font-black text-dominus-gold">360°</p>
            <p class="text-[10px] text-dominus-subtle tracking-[2px] uppercase mt-1">Diagnóstico</p>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { SECOES } from '~/shared/types/Diagnostico'
definePageMeta({ layout: false })
const secoes = SECOES
</script>
