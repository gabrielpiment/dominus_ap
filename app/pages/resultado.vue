<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white border-b border-gray-200 px-6 py-4 print:hidden">
      <div class="max-w-3xl mx-auto flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 text-sm font-medium transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Início
        </NuxtLink>
        <span class="text-sm font-semibold text-gray-700">Seu Resultado</span>
        <button
          class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200"
          @click="baixarPdf"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Baixar PDF
        </button>
      </div>
    </header>

    <main id="relatorio-pdf" class="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <div class="text-center space-y-1">
        <h1 class="text-2xl font-black text-gray-900">Diagnóstico Empresarial 360°</h1>
        <p class="text-gray-500 text-sm">Avaliação completa das suas alavancas comerciais</p>
      </div>

      <div class="grid grid-cols-3 gap-4">
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center">
          <p class="text-4xl font-black text-indigo-600">{{ resultado.totalScore.toFixed(1) }}</p>
          <p class="text-xs text-gray-400 mt-1">de 50 pontos</p>
        </div>
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center">
          <p class="text-4xl font-black text-indigo-600">{{ resultado.percentualGeral.toFixed(0) }}%</p>
          <p class="text-xs text-gray-400 mt-1">Grau de atendimento</p>
        </div>
        <div class="rounded-2xl p-5 text-center text-white" :class="store.infoEtapa.corBg">
          <p class="text-4xl font-black">{{ resultado.etapa }}</p>
          <p class="text-xs mt-1 opacity-80">Etapa atual</p>
        </div>
      </div>

      <EtapaCard :info="store.infoEtapa" />

      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 class="text-lg font-bold text-gray-900 mb-4 text-center">Desempenho por Área</h2>
        <ClientOnly>
          <RadarChart :scores="resultado.scoresPorSecao" />
          <template #fallback>
            <div class="h-64 flex items-center justify-center text-gray-400 text-sm">Carregando gráfico…</div>
          </template>
        </ClientOnly>
      </div>

      <div class="space-y-3">
        <h2 class="text-lg font-bold text-gray-900">Recomendações por Área</h2>
        <SecaoCard
          v-for="(secao, i) in secoes"
          :key="secao.id"
          :secao="secao"
          :score="resultado.scoresPorSecao[i] ?? 0"
        />
      </div>

      <div class="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 text-center space-y-3 print:hidden">
        <p class="text-gray-700 font-medium">Quer avançar para a próxima etapa mais rápido?</p>
        <button
          class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl transition-all duration-200"
          @click="refazer"
        >
          Refazer Diagnóstico
        </button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { SECOES } from '~/shared/types/Diagnostico'
import { useDiagnosticoStore } from '~/stores/diagnostico'

definePageMeta({ layout: false })

const store = useDiagnosticoStore()
const router = useRouter()
const { gerarPdf } = usePdf()
const secoes = SECOES
const resultado = computed(() => store.resultado)

onMounted(() => {
  if (store.totalScore === 0 && Object.keys(store.respostas).length === 0) {
    router.replace('/diagnostico')
  }
})

async function baixarPdf() {
  await gerarPdf('relatorio-pdf', 'diagnostico-empresarial-360')
}

function refazer() {
  store.resetar()
  router.push('/diagnostico')
}
</script>
