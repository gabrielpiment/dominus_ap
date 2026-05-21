<template>
  <div class="min-h-screen bg-dominus-void">

    <!-- Modal de consultoria -->
    <Transition name="modal">
      <div
        v-if="modalAberto"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 print:hidden"
        @click.self="modalAberto = false"
      >
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="modalAberto = false" />

        <div class="relative bg-dominus-surface border border-dominus-border rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dominus-gold to-transparent" />

          <!-- Topo -->
          <div class="px-7 pt-8 pb-6 text-center space-y-3 border-b border-dominus-border">
            <svg viewBox="0 0 36 36" fill="none" class="w-10 h-10 mx-auto">
              <path d="M18 2L22 10H30L24 16L26 24L18 20L10 24L12 16L6 10H14L18 2Z" fill="#C9A84C" opacity="0.9"/>
              <rect x="12" y="26" width="12" height="2" rx="1" fill="#C9A84C"/>
              <rect x="14" y="30" width="8" height="2" rx="1" fill="#C9A84C"/>
            </svg>
            <span class="inline-block text-[9px] font-black tracking-[3px] uppercase px-3 py-1 rounded-sm bg-dominus-gold/10 border border-dominus-gold/30 text-dominus-gold">
              Pré-diagnóstico concluído
            </span>
            <h2 class="font-display text-2xl font-black text-dominus-gold leading-tight">
              Seu pré-diagnóstico<br />está pronto!
            </h2>
          </div>

          <div class="px-7 py-6 space-y-5">
            <p class="text-dominus-muted text-sm leading-relaxed text-center">
              Este resultado é um <strong class="text-white">pré-diagnóstico</strong>. Para uma análise mais aprofundada, recomendamos uma consultoria
              <strong class="text-dominus-gold">100% gratuita</strong> com um dos nossos especialistas.
            </p>

            <div class="bg-dominus-void border border-dominus-border rounded-xl px-5 py-4 space-y-3">
              <p class="text-[9px] font-black tracking-[2px] uppercase text-dominus-gold">O que você vai conquistar:</p>
              <ul class="space-y-2">
                <li v-for="item in beneficios" :key="item" class="flex items-start gap-2.5 text-xs text-dominus-muted">
                  <span class="text-dominus-gold font-black mt-0.5 flex-shrink-0">✓</span>
                  {{ item }}
                </li>
              </ul>
            </div>

            <a
              :href="whatsappLink"
              target="_blank"
              class="block w-full text-center font-black text-[11px] tracking-[2px] uppercase text-dominus-void py-4 rounded-xl transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-lg shadow-dominus-gold/20"
              style="background: linear-gradient(135deg, #C9A84C, #E8CC80, #C9A84C);"
            >
              📅 Agendar consultoria gratuita
            </a>

            <button
              class="block w-full text-center text-[10px] text-dominus-subtle hover:text-dominus-muted tracking-wider transition-colors"
              @click="modalAberto = false"
            >
              Agora não, quero ver meu resultado
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Header -->
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

    <main id="relatorio-pdf" class="max-w-3xl mx-auto px-4 py-8 space-y-6 print:px-0 print:py-0">

      <!-- Título -->
      <div class="text-center space-y-2 print:mb-6">
        <p class="text-[10px] font-black tracking-[3px] uppercase text-dominus-subtle">Avaliação Empresarial</p>
        <h1 class="font-display text-3xl font-black text-dominus-gold">Diagnóstico 360°</h1>
      </div>

      <!-- Score cards -->
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-dominus-surface border border-dominus-border rounded-xl p-5 text-center relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dominus-gold/30 to-transparent" />
          <p class="font-display text-4xl font-black text-dominus-gold">{{ resultado.totalScore.toFixed(1) }}</p>
          <p class="text-[9px] font-bold tracking-[2px] uppercase text-dominus-subtle mt-1">de 50 pontos</p>
        </div>
        <div class="bg-dominus-surface border border-dominus-border rounded-xl p-5 text-center relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dominus-gold/30 to-transparent" />
          <p class="font-display text-4xl font-black text-dominus-gold">{{ resultado.percentualGeral.toFixed(0) }}%</p>
          <p class="text-[9px] font-bold tracking-[2px] uppercase text-dominus-subtle mt-1">Grau de atendimento</p>
        </div>
        <div class="rounded-xl p-5 text-center relative overflow-hidden" :style="{ backgroundColor: etapaBgColor }">
          <p class="font-display text-4xl font-black text-dominus-void">{{ resultado.etapa }}</p>
          <p class="text-[9px] font-bold tracking-[2px] uppercase mt-1" style="color:rgba(10,10,10,0.6)">Etapa atual</p>
        </div>
      </div>

      <!-- Etapa card -->
      <EtapaCard :info="store.infoEtapa" />

      <!-- Radar chart -->
      <div class="bg-dominus-surface border border-dominus-border rounded-xl p-6 relative overflow-hidden print:border print:shadow-none">
        <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dominus-gold/30 to-transparent" />
        <h2 class="text-[10px] font-black tracking-[3px] uppercase text-dominus-gold mb-6 text-center">Desempenho por Área</h2>
        <ClientOnly>
          <RadarChart :scores="resultado.scoresPorSecao" />
          <template #fallback>
            <div class="h-64 flex items-center justify-center text-dominus-subtle text-sm">Carregando gráfico…</div>
          </template>
        </ClientOnly>
      </div>

      <!-- Recomendações -->
      <div class="space-y-3 print:space-y-2">
        <h2 class="text-[10px] font-black tracking-[3px] uppercase text-dominus-gold">Recomendações por Área</h2>
        <SecaoCard
          v-for="(secao, i) in secoes"
          :key="secao.id"
          :secao="secao"
          :score="resultado.scoresPorSecao[i] ?? 0"
        />
      </div>

      <!-- CTA rodapé -->
      <div ref="rodape" class="bg-dominus-surface border border-dominus-border rounded-xl p-6 text-center space-y-4 relative overflow-hidden print:hidden">
        <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dominus-gold to-transparent" />
        <p class="text-[9px] font-black tracking-[3px] uppercase text-dominus-subtle">Próximo passo</p>
        <p class="text-dominus-muted text-sm">Quer avançar para a próxima etapa com estratégia?</p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            class="px-6 py-3 rounded-lg border border-dominus-border text-[10px] font-black tracking-[2px] uppercase text-dominus-subtle hover:border-dominus-subtle transition-all duration-200"
            @click="refazer"
          >
            ↩ Refazer Diagnóstico
          </button>
          <button
            class="px-6 py-3 rounded-lg text-[10px] font-black tracking-[2px] uppercase text-dominus-void transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-lg shadow-dominus-gold/20"
            style="background: linear-gradient(135deg, #C9A84C, #E8CC80, #C9A84C);"
            @click="modalAberto = true"
          >
            📋 Diagnóstico Completo
          </button>
        </div>
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
const modalAberto = ref(false)
const rodape = ref<HTMLElement | null>(null)

const beneficios = [
  'Diagnóstico completo e personalizado da sua empresa',
  'Sair do improviso e conquistar previsibilidade',
  'Plano de ação claro para avançar de etapa',
]

onMounted(() => {
  if (store.totalScore === 0 && Object.keys(store.respostas).length === 0) {
    router.replace('/diagnostico')
    return
  }
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        setTimeout(() => { modalAberto.value = true }, 600)
        observer.disconnect()
      }
    },
    { threshold: 0.6 },
  )
  if (rodape.value) observer.observe(rodape.value)
})

const whatsappLink = computed(() => {
  const r = resultado.value
  const info = store.infoEtapa
  const msg = [
    `Olá! Acabei de fazer o Diagnóstico Empresarial 360° e gostaria de agendar minha consultoria gratuita.`,
    ``,
    `📊 *Meu resultado:*`,
    `• Pontuação: ${r.totalScore.toFixed(1)}/50`,
    `• Grau de atendimento: ${r.percentualGeral.toFixed(0)}%`,
    `• Etapa atual: *${r.etapa}* — ${info.slogan}`,
    ``,
    `${info.perfil}`,
    ``,
    `Aguardo o contato! 🚀`,
  ].join('\n')
  return `https://wa.me/553291397104?text=${encodeURIComponent(msg)}`
})

const etapaBgColor = computed(() => ({
  A: '#22c55e', B: '#C9A84C', C: '#f97316', D: '#ef4444',
}[store.infoEtapa.etapa]))

function baixarPdf() { gerarPdf() }
function refazer() { store.resetar(); router.push('/diagnostico') }
</script>

<style>
.modal-enter-active { transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1); }
.modal-leave-active { transition: all 0.2s ease; }
.modal-enter-from   { opacity: 0; transform: scale(0.9); }
.modal-leave-to     { opacity: 0; transform: scale(0.95); }

@media print {
  @page { size: A4 portrait; margin: 16mm 14mm; }
  * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  body { background: #0a0a0a !important; color: white !important; font-family: Montserrat, Arial, sans-serif; }
}
</style>
