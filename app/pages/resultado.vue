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

    <main class="max-w-3xl mx-auto px-4 py-8 space-y-6 print:px-0 print:py-0 print:space-y-4 print:max-w-none">
      <div class="text-center space-y-1 print:mb-4">
        <h1 class="text-2xl font-black text-gray-900">Diagnóstico Empresarial 360°</h1>
        <p class="text-gray-500 text-sm">Avaliação completa das suas alavancas comerciais</p>
      </div>

      <!-- Scores resumo -->
      <div class="print-scores">
        <div class="print-score-card">
          <p class="score-number text-indigo-600">{{ resultado.totalScore.toFixed(1) }}</p>
          <p class="score-label">de 50 pontos</p>
        </div>
        <div class="print-score-card">
          <p class="score-number text-indigo-600">{{ resultado.percentualGeral.toFixed(0) }}%</p>
          <p class="score-label">Grau de atendimento</p>
        </div>
        <div class="print-score-card" :class="etapaBgClass">
          <p class="score-number text-white">{{ resultado.etapa }}</p>
          <p class="score-label text-white opacity-80">Etapa atual</p>
        </div>
      </div>

      <!-- Etapa card -->
      <div class="print-etapa-card" :class="etapaBorderClass">
        <div class="print-etapa-header" :class="etapaBgClass">
          <div>
            <p class="print-etapa-label">Etapa {{ store.infoEtapa.etapa }} · {{ store.infoEtapa.intervalo }}</p>
            <h3 class="print-etapa-slogan">{{ store.infoEtapa.slogan }}</h3>
          </div>
          <div class="print-etapa-letter">{{ store.infoEtapa.etapa }}</div>
        </div>
        <div class="print-etapa-body">
          <p class="print-etapa-perfil">{{ store.infoEtapa.perfil }}</p>
          <p class="print-etapa-desc">{{ store.infoEtapa.descricao }}</p>
        </div>
      </div>

      <!-- Gráfico -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 print:border print:shadow-none">
        <h2 class="text-lg font-bold text-gray-900 mb-4 text-center">Desempenho por Área</h2>
        <ClientOnly>
          <RadarChart :scores="resultado.scoresPorSecao" />
          <template #fallback>
            <div class="h-64 flex items-center justify-center text-gray-400 text-sm">Carregando gráfico…</div>
          </template>
        </ClientOnly>
      </div>

      <!-- Recomendações -->
      <div class="space-y-3 print:space-y-2">
        <h2 class="text-lg font-bold text-gray-900">Recomendações por Área</h2>
        <div
          v-for="(secao, i) in secoes"
          :key="secao.id"
          class="print-secao-card"
        >
          <div class="print-secao-header">
            <div class="print-secao-info">
              <p class="print-secao-titulo">{{ secao.titulo }}</p>
              <p class="print-secao-foco">{{ secao.foco }}</p>
            </div>
            <div class="print-secao-score" :class="scoreColorClass(resultado.scoresPorSecao[i] ?? 0)">
              {{ (resultado.scoresPorSecao[i] ?? 0).toFixed(1) }}<span class="print-secao-max">/10</span>
            </div>
          </div>
          <div class="print-secao-bar-bg">
            <div
              class="print-secao-bar"
              :class="barColorClass(resultado.scoresPorSecao[i] ?? 0)"
              :style="{ width: `${((resultado.scoresPorSecao[i] ?? 0) / 10) * 100}%` }"
            />
          </div>
          <p class="print-secao-rec">{{ secao.recomendacao }}</p>
        </div>
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

const etapaBgClass = computed(() => ({
  A: 'bg-green-500',
  B: 'bg-yellow-400',
  C: 'bg-orange-500',
  D: 'bg-red-600',
}[store.infoEtapa.etapa]))

const etapaBorderClass = computed(() => ({
  A: 'border-green-300',
  B: 'border-yellow-300',
  C: 'border-orange-300',
  D: 'border-red-300',
}[store.infoEtapa.etapa]))

function scoreColorClass(score: number) {
  if (score >= 8) return 'text-green-600'
  if (score >= 5) return 'text-yellow-500'
  return 'text-red-500'
}

function barColorClass(score: number) {
  if (score >= 8) return 'bg-green-500'
  if (score >= 5) return 'bg-yellow-400'
  return 'bg-red-500'
}

function baixarPdf() {
  gerarPdf()
}

function refazer() {
  store.resetar()
  router.push('/diagnostico')
}
</script>

<style>
/* ── Print / PDF styles ── */
@media print {
  @page {
    size: A4 portrait;
    margin: 16mm 14mm;
  }

  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  body {
    background: white !important;
    font-family: Inter, Arial, sans-serif;
    font-size: 11pt;
    color: #111;
  }
}

/* Score cards row */
.print-scores {
  display: flex;
  gap: 12px;
}
.print-score-card {
  flex: 1;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
}
.score-number {
  font-size: 2rem;
  font-weight: 900;
  line-height: 1;
  margin: 0;
}
.score-label {
  font-size: 0.7rem;
  color: #9ca3af;
  margin-top: 4px;
}

/* Etapa card */
.print-etapa-card {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  page-break-inside: avoid;
}
.print-etapa-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  color: white;
}
.print-etapa-label {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.85;
  margin: 0 0 4px;
}
.print-etapa-slogan {
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
}
.print-etapa-letter {
  font-size: 3rem;
  font-weight: 900;
  opacity: 0.25;
  line-height: 1;
}
.print-etapa-body {
  background: white;
  padding: 16px 20px;
}
.print-etapa-perfil {
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 6px;
  font-size: 0.9rem;
}
.print-etapa-desc {
  font-size: 0.82rem;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;
}

/* Seção cards */
.print-secao-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 14px 16px;
  page-break-inside: avoid;
  margin-bottom: 8px;
}
.print-secao-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
}
.print-secao-info {
  flex: 1;
  min-width: 0;
}
.print-secao-titulo {
  font-weight: 700;
  font-size: 0.9rem;
  color: #111827;
  margin: 0 0 2px;
}
.print-secao-foco {
  font-size: 0.72rem;
  color: #9ca3af;
  margin: 0;
}
.print-secao-score {
  font-size: 1.4rem;
  font-weight: 900;
  white-space: nowrap;
  flex-shrink: 0;
}
.print-secao-max {
  font-size: 0.7rem;
  font-weight: 400;
  color: #9ca3af;
}
.print-secao-bar-bg {
  background: #f3f4f6;
  border-radius: 9999px;
  height: 6px;
  margin-bottom: 8px;
  overflow: hidden;
}
.print-secao-bar {
  height: 6px;
  border-radius: 9999px;
}
.print-secao-rec {
  font-size: 0.78rem;
  color: #4b5563;
  line-height: 1.5;
  margin: 0;
}
</style>
