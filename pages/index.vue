<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
    <div class="max-w-2xl w-full text-center space-y-6">
      <h1 class="text-5xl font-bold text-gray-900">
        Dominus AP
      </h1>
      <p class="text-xl text-gray-500">
        Projeto iniciado com Nuxt 4 + Tailwind CSS
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
        <div class="bg-white rounded-2xl shadow p-6 flex flex-col items-center gap-2">
          <span class="text-3xl">⚡</span>
          <h2 class="font-semibold text-gray-800">Nuxt 4</h2>
          <p class="text-sm text-gray-500 text-center">Framework full-stack com roteamento automático</p>
        </div>
        <div class="bg-white rounded-2xl shadow p-6 flex flex-col items-center gap-2">
          <span class="text-3xl">🎨</span>
          <h2 class="font-semibold text-gray-800">Tailwind CSS</h2>
          <p class="text-sm text-gray-500 text-center">Estilização utility-first sem sair do template</p>
        </div>
        <div class="bg-white rounded-2xl shadow p-6 flex flex-col items-center gap-2">
          <span class="text-3xl">🚀</span>
          <h2 class="font-semibold text-gray-800">Pronto</h2>
          <p class="text-sm text-gray-500 text-center">Base configurada, é só começar a construir</p>
        </div>
      </div>

      <p class="text-sm text-gray-400 mt-8">
        Ambiente: <span class="font-mono bg-gray-100 px-2 py-0.5 rounded">{{ isDev ? 'development' : 'production' }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const isDev = import.meta.dev
</script>
