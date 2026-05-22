<template>
  <div class="min-h-screen bg-dominus-void">

    <!-- ═══════════════════════════════════════════════
         Modal de Consultoria
    ════════════════════════════════════════════════ -->
    <Transition name="modal">
      <div
        v-if="modalAberto"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 print:hidden"
        @click.self="modalAberto = false"
      >
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="modalAberto = false" />

        <div class="relative bg-dominus-surface border border-dominus-border rounded-2xl shadow-2xl max-w-3xl lg:max-w-7xl w-full overflow-hidden max-h-[95vh] lg:max-h-[90vh] flex flex-col">
          <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-dominus-gold to-transparent" />

          <!-- Topo do modal -->
          <div class="px-8 pt-8 pb-6 text-center space-y-3.5 border-b border-dominus-border flex-shrink-0">
            <svg viewBox="0 0 36 36" fill="none" class="w-9 h-9 mx-auto">
              <path d="M18 2L22 10H30L24 16L26 24L18 20L10 24L12 16L6 10H14L18 2Z" fill="#C9A84C" opacity="0.9"/>
              <rect x="12" y="26" width="12" height="2" rx="1" fill="#C9A84C"/>
              <rect x="14" y="30" width="8" height="2" rx="1" fill="#C9A84C"/>
            </svg>
            <h2 class="font-display text-2xl sm:text-3xl font-black text-dominus-gold leading-tight">
              📅 Agende sua Mentoria Gratuita
            </h2>
            <p class="text-dominus-muted text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Este resultado é um <strong class="text-white">pré-diagnóstico automático</strong>. Selecione o melhor dia e horário abaixo para realizar a sua mentoria individual estratégica com um especialista.
            </p>
          </div>

          <!-- Conteúdo -->
          <div class="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              <!-- Coluna de Informações / Benefícios (3 cols) -->
              <div class="lg:col-span-3 flex flex-col justify-between gap-5 order-2 lg:order-1">
                <div class="bg-dominus-void border border-dominus-border rounded-xl p-6 flex-1 flex flex-col justify-between gap-6">
                  
                  <!-- Topo do card -->
                  <div class="space-y-3">
                    <span class="inline-block text-[9px] font-black tracking-[2px] uppercase px-3 py-1 rounded bg-dominus-gold/10 border border-dominus-gold/25 text-dominus-gold">
                      Mentoria Individual
                    </span>
                    <h3 class="text-xs sm:text-sm font-black tracking-[1.5px] uppercase text-white">
                      O que faremos na sessão:
                    </h3>
                  </div>

                  <!-- Benefícios -->
                  <ul class="space-y-4 flex-1 flex flex-col justify-center py-4">
                    <li v-for="b in beneficios" :key="b" class="flex items-center gap-3.5 text-xs sm:text-sm text-dominus-muted leading-relaxed bg-dominus-surface/30 border border-dominus-border/20 rounded-lg p-4 transition-all hover:border-dominus-gold/30">
                      <span class="w-6 h-6 rounded-full bg-dominus-gold/10 border border-dominus-gold/30 flex items-center justify-center text-dominus-gold font-black text-xs flex-shrink-0">✓</span>
                      <span class="font-medium text-slate-300">{{ b }}</span>
                    </li>
                  </ul>

                  <!-- Rodapé interno / Info adicional -->
                  <div class="text-[10px] text-dominus-subtle text-center italic border-t border-dominus-border/30 pt-4 flex-shrink-0">
                    Sessão individual de 60 minutos via videoconferência.
                  </div>

                </div>

                <button
                  class="w-full text-center text-xs text-dominus-subtle hover:text-dominus-muted tracking-widest font-black uppercase transition-colors py-4 border border-dominus-border/40 hover:border-dominus-border rounded-xl flex-shrink-0"
                  @click="modalAberto = false"
                >
                  Ver Resultado Completo
                </button>
              </div>

              <!-- Coluna do Calendar (9 cols) -->
              <div class="lg:col-span-9 order-1 lg:order-2">
                <div class="w-full h-[700px] sm:h-[600px] lg:h-[660px] overflow-hidden rounded-xl border border-dominus-border bg-dominus-void relative">
                  <div class="w-full h-full overflow-hidden" id="my-cal-inline-60min"></div>
                </div>

                <!-- Fallback de Agendamento via WhatsApp -->
                <div class="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl border border-dominus-border/30 bg-dominus-surface/30 backdrop-blur-sm mt-4">
                  <div class="text-left space-y-1">
                    <p class="text-xs font-bold text-white">Está com problemas para agendar pelo calendário?</p>
                    <p class="text-[10px] text-dominus-muted leading-relaxed">
                      Se o calendário estiver travado ou com erro, você pode falar diretamente conosco no WhatsApp com seus resultados já preenchidos.
                    </p>
                  </div>
                  <a
                    :href="whatsappLink"
                    target="_blank"
                    class="inline-flex items-center justify-center gap-2 text-xs font-black tracking-wider uppercase text-white bg-green-600/20 border border-green-500/40 hover:bg-green-600/40 px-5 py-3 rounded-lg transition-all duration-300 w-full sm:w-auto text-center cursor-pointer shadow-[0_2px_10px_rgba(34,197,94,0.05)] hover:border-green-500"
                  >
                    <svg class="w-4 h-4 text-green-500 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.017-5.114-2.872-6.973-1.857-1.859-4.335-2.88-6.97-2.882-5.437 0-9.863 4.42-9.867 9.864-.001 1.73.457 3.419 1.32 4.933l-.994 3.635 3.718-.974zm12.015-7.145c-.19-.095-1.125-.556-1.3-.62-.174-.063-.3-.095-.426.095-.126.19-.488.62-.597.746-.109.127-.218.142-.408.048-.19-.095-.803-.296-1.53-.944-.566-.505-.948-1.13-1.059-1.32-.11-.19-.012-.293.083-.388.085-.085.19-.22.285-.33.095-.11.127-.19.19-.317.063-.127.032-.238-.016-.333-.048-.095-.426-1.026-.583-1.405-.154-.37-.323-.32-.426-.326l-.364-.006c-.127 0-.332.048-.506.238-.174.19-.664.65-.664 1.585 0 .935.68 1.839.775 1.965.095.127 1.34 2.046 3.245 2.87.453.196.806.314 1.08.401.455.144.869.124 1.198.075.366-.054 1.125-.46 1.282-.905.158-.445.158-.825.11-.905-.047-.08-.174-.127-.364-.222z"/>
                    </svg>
                    Agendar via WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ═══════════════════════════════════════════════
         Header
    ════════════════════════════════════════════════ -->
    <header class="border-b border-dominus-border px-6 py-4 bg-dominus-void/90 backdrop-blur-sm sticky top-0 z-10 print:hidden">
      <div class="max-w-3xl mx-auto flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2 text-dominus-subtle hover:text-dominus-gold text-[10px] font-black tracking-[2px] uppercase transition-colors">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
          </svg>
          Início
        </NuxtLink>
        <div class="flex items-center gap-2">
          <svg viewBox="0 0 36 36" fill="none" class="w-5 h-5">
            <path d="M18 2L22 10H30L24 16L26 24L18 20L10 24L12 16L6 10H14L18 2Z" fill="#C9A84C" opacity="0.9"/>
          </svg>
          <span class="text-[10px] font-black tracking-[3px] uppercase text-dominus-gold">Dominus</span>
        </div>
        <button
          class="inline-flex items-center gap-2 text-[10px] font-black tracking-[2px] uppercase text-dominus-void px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-90"
          style="background: linear-gradient(135deg, #C9A84C, #E8CC80);"
          @click="baixarPdf"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Baixar PDF
        </button>
      </div>
    </header>

    <!-- ═══════════════════════════════════════════════
         Conteúdo principal
    ════════════════════════════════════════════════ -->
    <main id="relatorio-pdf" class="max-w-3xl mx-auto px-4 py-10 space-y-8 print:max-w-none print:w-full print:px-8 print:py-10 print:space-y-6">

      <!-- ─────────────────────────────────
           1. Hero — Pontuação + Classificação
      ────────────────────────────────── -->
      <section class="text-center space-y-6">
        <div>
          <p class="text-[10px] font-black tracking-[3px] uppercase text-dominus-subtle mb-2">Avaliação Empresarial</p>
          <h1 class="font-display text-3xl font-black text-dominus-gold">Diagnóstico de Maturidade</h1>
        </div>

        <!-- Gauge SVG -->
        <div class="flex flex-col items-center">
          <div class="relative inline-flex items-center justify-center">
            <!-- SVG circular gauge -->
            <svg width="200" height="200" viewBox="0 0 200 200" class="-rotate-90">
              <!-- Track -->
              <circle cx="100" cy="100" r="80" fill="none" stroke="#1a1a1a" stroke-width="10" />
              <!-- Progress -->
              <circle
                cx="100" cy="100" r="80"
                fill="none"
                :stroke="corNota"
                stroke-width="10"
                stroke-linecap="round"
                :stroke-dasharray="502"
                :stroke-dashoffset="502 - (502 * resultado.notaGeral / 100)"
                style="transition: stroke-dashoffset 1.2s ease-out;"
              />
            </svg>
            <!-- Texto central -->
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <span class="font-display text-5xl font-black leading-none" :style="{ color: corNota }">
                {{ resultado.notaGeral.toFixed(0) }}
              </span>
              <span class="text-dominus-subtle text-sm font-bold">/ 100</span>
            </div>
          </div>

          <!-- Badge de classificação -->
          <div
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border mt-2"
            :style="{ borderColor: `${corNota}40`, background: `${corNota}10`, color: corNota }"
          >
            <span class="font-black text-sm tracking-[2px] uppercase">{{ store.infoClassificacao.titulo }}</span>
          </div>
        </div>
      </section>

      <!-- ─────────────────────────────────
           2. Classificação geral (Página 1)
      ────────────────────────────────── -->
      <section class="print-break-inside-avoid">
        <h2 class="text-[10px] font-black tracking-[3px] uppercase text-dominus-gold mb-4">Sua Classificação</h2>
        <ClassificacaoCard :info="store.infoClassificacao" />
      </section>

      <!-- ─────────────────────────────────
           3. Notas por pilar (Página 2)
      ────────────────────────────────── -->
      <section class="print-break-before">
        <h2 class="text-[10px] font-black tracking-[3px] uppercase text-dominus-gold mb-4">Pontuação por Pilar</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <PilarCard
            v-for="r in resultado.resultadosPilares"
            :key="r.pilarId"
            :resultado="r"
            :destaque="r.pilarId === resultado.pilarMaisForte.pilarId || r.pilarId === resultado.pilarMaisFraco.pilarId"
          />
        </div>
      </section>

      <!-- ─────────────────────────────────
           4. Radar chart (Página 2)
      ────────────────────────────────── -->
      <section class="bg-dominus-surface border border-dominus-border rounded-xl p-6 relative overflow-hidden print:border print:shadow-none print-break-inside-avoid">
        <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dominus-gold/30 to-transparent" />
        <h2 class="text-[10px] font-black tracking-[3px] uppercase text-dominus-gold mb-6 text-center">Mapa de Maturidade</h2>
        <ClientOnly>
          <RadarChart :scores="resultado.resultadosPilares.map((r) => r.nota)" />
          <template #fallback>
            <div class="h-64 flex items-center justify-center text-dominus-subtle text-sm">Carregando gráfico…</div>
          </template>
        </ClientOnly>
      </section>

      <!-- ─────────────────────────────────
           5. Diagnóstico combinado (Página 3)
      ────────────────────────────────── -->
      <section v-if="resultado.diagnosticoCombinado.length > 0" class="print-break-before print-break-inside-avoid">
        <h2 class="text-[10px] font-black tracking-[3px] uppercase text-dominus-gold mb-4">Diagnóstico Estratégico</h2>
        <div class="space-y-3">
          <div
            v-for="(msg, i) in resultado.diagnosticoCombinado"
            :key="i"
            class="bg-dominus-surface border border-dominus-border rounded-xl p-5 relative overflow-hidden flex gap-4"
          >
            <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dominus-gold/20 to-transparent" />
            <span class="text-dominus-gold text-lg flex-shrink-0 mt-0.5">⚡</span>
            <p class="text-dominus-muted text-sm leading-relaxed">{{ msg }}</p>
          </div>
        </div>
      </section>

      <!-- ─────────────────────────────────
           6. Pilar mais forte / mais fraco (Página 3)
      ────────────────────────────────── -->
      <section :class="{ 'print-break-before': resultado.diagnosticoCombinado.length === 0 }" class="print-break-inside-avoid">
        <h2 class="text-[10px] font-black tracking-[3px] uppercase text-dominus-gold mb-4">Destaques</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <!-- Mais forte -->
          <div class="bg-dominus-surface border border-green-500/20 rounded-xl p-5 relative overflow-hidden">
            <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
            <div class="flex items-center gap-2 mb-3">
              <span class="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-xs">✦</span>
              <span class="text-[9px] font-black tracking-[2px] uppercase text-green-400">Ponto Forte</span>
            </div>
            <p class="text-white font-black text-sm mb-1">{{ resultado.pilarMaisForte.icone }} {{ resultado.pilarMaisForte.titulo }}</p>
            <p class="font-display text-3xl font-black text-green-400 mb-2">{{ resultado.pilarMaisForte.nota.toFixed(0) }}<span class="text-green-600 text-lg">/100</span></p>
            <p class="text-dominus-muted text-xs leading-relaxed">{{ analiseForte }}</p>
          </div>

          <!-- Mais fraco -->
          <div class="bg-dominus-surface border border-red-500/20 rounded-xl p-5 relative overflow-hidden">
            <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
            <div class="flex items-center gap-2 mb-3">
              <span class="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-xs">⚠</span>
              <span class="text-[9px] font-black tracking-[2px] uppercase text-red-400">Ponto Vulnerável</span>
            </div>
            <p class="text-white font-black text-sm mb-1">{{ resultado.pilarMaisFraco.icone }} {{ resultado.pilarMaisFraco.titulo }}</p>
            <p class="font-display text-3xl font-black text-red-400 mb-2">{{ resultado.pilarMaisFraco.nota.toFixed(0) }}<span class="text-red-600 text-lg">/100</span></p>
            <p class="text-dominus-muted text-xs leading-relaxed">{{ analiseFraco }}</p>
          </div>
        </div>
      </section>

      <!-- ─────────────────────────────────
           7. Principais riscos (Página 3)
      ────────────────────────────────── -->
      <section v-if="resultado.riscos.length > 0" class="print-break-inside-avoid">
        <h2 class="text-[10px] font-black tracking-[3px] uppercase text-dominus-gold mb-4">Principais Riscos Identificados</h2>
        <div class="bg-dominus-surface border border-dominus-border rounded-xl p-5 relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
          <ul class="space-y-3">
            <li
              v-for="(risco, i) in resultado.riscos"
              :key="i"
              class="flex items-start gap-3 text-sm text-dominus-muted"
            >
              <span class="text-red-400 flex-shrink-0 mt-0.5">▸</span>
              {{ risco }}
            </li>
          </ul>
        </div>
      </section>

      <!-- ─────────────────────────────────
           8. Próximo passo + CTA
      ────────────────────────────────── -->
      <section ref="rodape" class="bg-dominus-surface border border-dominus-border rounded-xl p-7 text-center space-y-5 relative overflow-hidden print:hidden">
        <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-dominus-gold to-transparent" />

        <div>
          <p class="text-[9px] font-black tracking-[3px] uppercase text-dominus-subtle mb-2">Próximo Passo</p>
          <h2 class="font-display text-xl font-black text-white leading-snug mb-3">
            Seu diagnóstico revelou onde<br /><span class="text-dominus-gold">sua empresa está hoje.</span>
          </h2>
          <p class="text-dominus-muted text-sm leading-relaxed max-w-sm mx-auto">
            {{ resultado.proximoPasso }}
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            class="px-6 py-3 rounded-lg border border-dominus-border text-[10px] font-black tracking-[2px] uppercase text-dominus-subtle hover:border-dominus-subtle transition-all duration-200"
            @click="refazer"
          >
            ↩ Refazer Diagnóstico
          </button>
          <button
            class="px-8 py-3.5 rounded-lg text-[11px] font-black tracking-[2px] uppercase text-dominus-void transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-lg shadow-dominus-gold/20"
            style="background: linear-gradient(135deg, #C9A84C, #E8CC80, #C9A84C);"
            @click="modalAberto = true"
          >
            📋 Agendar Análise Gratuita
          </button>
        </div>
      </section>

    </main>

    <!-- Botão Flutuante Customizado (Substitui o do Cal.com) -->
    <Transition name="fade">
      <button
        v-if="!modalAberto"
        class="fixed bottom-6 right-6 z-40 px-6 py-3 rounded-full text-xs font-black tracking-widest uppercase text-dominus-void transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-xl shadow-dominus-gold/30 flex items-center gap-2 print:hidden"
        style="background: linear-gradient(135deg, #C9A84C, #E8CC80, #C9A84C);"
        @click="modalAberto = true"
      >
        <svg class="w-4 h-4 flex-shrink-0 text-dominus-void" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <span>Agendar Mentoria Gratuita</span>
      </button>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { PILARES, INFO_CLASSIFICACOES } from '~/shared/types/Diagnostico'
import { useDiagnosticoStore } from '~/stores/diagnostico'
import { usePdf } from '~/composables/usePdf'
import { useDiagnosticoSave } from '~/composables/useDiagnosticoSave'

definePageMeta({ layout: false })

const store = useDiagnosticoStore()
const router = useRouter()
const { gerarPdf } = usePdf()
const { salvar } = useDiagnosticoSave()
const runtimeConfig = useRuntimeConfig()
const calLink = computed(() => runtimeConfig.public.calLink)

const resultado = computed(() => store.resultado)
const modalAberto = ref(false)
const rodape = ref<HTMLElement | null>(null)

// ── Cor da nota geral ──────────────────────────────────────────────
const corNota = computed(() => {
  const n = resultado.value.notaGeral
  if (n >= 90) return '#22c55e'
  if (n >= 75) return '#C9A84C'
  if (n >= 60) return '#eab308'
  if (n >= 40) return '#f97316'
  return '#ef4444'
})

// ── Textos de análise do pilar destaque ────────────────────────────
const analiseForte = computed(() => {
  const pilar = PILARES.find((p) => p.id === resultado.value.pilarMaisForte.pilarId)
  const n = resultado.value.pilarMaisForte.nota
  if (!pilar) return ''
  if (n >= 75) return pilar.analiseAlta
  if (n >= 50) return pilar.analiseMedia
  return pilar.analiseBaixa
})

const analiseFraco = computed(() => {
  const pilar = PILARES.find((p) => p.id === resultado.value.pilarMaisFraco.pilarId)
  if (!pilar) return ''
  return pilar.analiseBaixa
})

// ── Benefícios do modal ────────────────────────────────────────────
const beneficios = [
  'Análise estratégica individual da sua empresa',
  'Identificação do pilar prioritário para estruturar primeiro',
  'Plano de ação claro para sair do improviso e gerar previsibilidade',
]

// ── Link WhatsApp ──────────────────────────────────────────────────
const whatsappLink = computed(() => {
  const r = resultado.value
  const info = store.infoClassificacao
  const pre = store.preQualificacao
  const pilares = r.resultadosPilares
    .map((p) => `• ${p.codigo} — ${p.titulo}: ${p.nota.toFixed(0)}/100`)
    .join('\n')

  const saudacao = pre.nome && pre.empresa
    ? `Olá! Meu nome é ${pre.nome}, da empresa ${pre.empresa}. Acabei de concluir o Diagnóstico de Maturidade Empresarial DOMINUS e gostaria de agendar minha Mentoria Gratuita.`
    : `Olá! Acabei de concluir o Diagnóstico de Maturidade Empresarial DOMINUS e gostaria de agendar minha Mentoria Gratuita.`

  const msg = [
    saudacao,
    ``,
    `📊 *Meu resultado:*`,
    `• Pontuação geral: ${r.notaGeral.toFixed(0)}/100`,
    `• Classificação: *${info.titulo}*`,
    ``,
    `*Notas por pilar:*`,
    pilares,
    ``,
    `Aguardo o contato! 🚀`,
  ].join('\n')

  return `https://wa.me/553291397104?text=${encodeURIComponent(msg)}`
})

// ── Limpeza do Cal.com (Evitar duplicidade com HMR / Cache) ───────────
function limparCalcomLeftovers() {
  if (typeof document === 'undefined') return
  // Remove botões flutuantes injetados pelo script nativo do Cal.com
  document.querySelectorAll('.__cal-floating-button, [class*="floating-button"], [id*="floating-button"]').forEach(el => el.remove())
  // Remove iframes de pop-up flutuantes do Cal.com (mantém apenas o inline dentro do nosso modal)
  document.querySelectorAll('iframe[src*="cal.com"]').forEach(el => {
    const inlineContainer = document.getElementById('my-cal-inline-60min')
    if (inlineContainer && !inlineContainer.contains(el)) {
      el.remove()
    }
  })
}

// ── Ações ──────────────────────────────────────────────────────────
function baixarPdf() { gerarPdf() }

function refazer() {
  store.resetar()
  router.push('/diagnostico')
}

// ── Lifecycle ──────────────────────────────────────────────────────
onMounted(async () => {
  limparCalcomLeftovers()

  // Redireciona se não há respostas
  if (Object.keys(store.respostas).length === 0) {
    router.replace('/diagnostico')
    return
  }

  // Salva no Supabase silenciosamente
  await salvar(resultado.value, store.respostas)

  // Abre modal quando o rodapé aparece
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        setTimeout(() => { modalAberto.value = true }, 800)
        observer.disconnect()
      }
    },
    { threshold: 0.5 },
  )
  if (rodape.value) observer.observe(rodape.value)

  // Inicializa o Cal.com
  const C = window as any
  if (!C.Cal) {
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || function () {
        const cal = C.Cal;
        const ar = arguments as any;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); } as any;
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window as any, "https://app.cal.com/embed/embed.js", "init");
  }

  C.Cal("init", "60min", { origin: "https://app.cal.com" });

  C.Cal.ns["60min"]("ui", {
    theme: "dark",
    hideEventTypeDetails: false,
    layout: "month_view"
  });
})

onUnmounted(() => {
  document.body.classList.remove('modal-aberto-cal')
  limparCalcomLeftovers()
})

// ── Watcher para inicializar Cal.com quando o modal abrir ───────────
watch(modalAberto, (isOpen) => {
  if (isOpen) {
    document.body.classList.add('modal-aberto-cal')
    nextTick(() => {
      const C = window as any
      C.Cal("init", "60min", { origin: "https://app.cal.com" });

      C.Cal.ns["60min"]("inline", {
        elementOrSelector: "#my-cal-inline-60min",
        config: {
          layout: "month_view",
          useSlotsViewOnSmallScreen: "true",
          theme: "dark",
          name: store.preQualificacao.nome || "",
          email: store.preQualificacao.email || ""
        },
        calLink: calLink.value,
      });

      C.Cal.ns["60min"]("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })
  } else {
    document.body.classList.remove('modal-aberto-cal')
    limparCalcomLeftovers()
  }
})
</script>

<style>
.modal-enter-active { transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1); }
.modal-leave-active { transition: all 0.2s ease; }
.modal-enter-from   { opacity: 0; transform: scale(0.9); }
.modal-leave-to     { opacity: 0; transform: scale(0.95); }

/* Transição do botão flutuante */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Esconde o botão flutuante enquanto o modal de agendamento está ativo */
body.modal-aberto-cal .__cal-floating-button,
body.modal-aberto-cal [class*="floating-button"],
body.modal-aberto-cal [id*="floating-button"] {
  display: none !important;
}

@media print {
  @page { size: A4 portrait; margin: 12mm 12mm; }
  * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  body { background: #0a0a0a !important; color: white !important; font-family: Montserrat, Arial, sans-serif; }

  .print-break-before {
    break-before: page !important;
    page-break-before: always !important;
  }
  .print-break-inside-avoid {
    break-inside: avoid !important;
    page-break-inside: avoid !important;
  }

  /* Keep the background dark grey and borders readable when printing */
  .bg-dominus-surface {
    background-color: #111111 !important;
  }
  .border-dominus-border {
    border-color: #2d2d2d !important;
  }
}
</style>
