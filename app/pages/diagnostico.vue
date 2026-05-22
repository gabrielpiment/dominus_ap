<template>
  <div class="min-h-screen bg-slate-50 flex flex-col">

    <!-- Tela de carregamento -->
    <Transition name="fade">
      <div
        v-if="carregando"
        class="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center px-8"
      >
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.05)_0%,transparent_70%)]" />

        <div class="max-w-md w-full text-center space-y-10 relative z-10">
          <!-- Spinner -->
          <div class="relative mx-auto w-24 h-24">
            <div class="absolute inset-0 rounded-full border border-slate-100" />
            <div class="absolute inset-0 rounded-full border-2 border-transparent border-t-dominus-gold animate-spin" />
            <div class="absolute inset-2 rounded-full border border-transparent border-t-dominus-gold/40 animate-spin" style="animation-duration:1.8s; animation-direction:reverse;" />
            <div class="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 36 36" fill="none" class="w-8 h-8">
                <path d="M18 2L22 10H30L24 16L26 24L18 20L10 24L12 16L6 10H14L18 2Z" fill="#C9A84C" opacity="0.9"/>
                <rect x="12" y="26" width="12" height="2" rx="1" fill="#C9A84C"/>
                <rect x="14" y="30" width="8" height="2" rx="1" fill="#C9A84C"/>
              </svg>
            </div>
          </div>

          <!-- Mensagem rotativa -->
          <div class="h-24 flex flex-col items-center justify-center">
            <Transition name="msg" mode="out-in">
              <div :key="msgAtual" class="text-center space-y-2 px-4">
                <p class="font-display text-xl font-black text-slate-900 leading-snug">
                  {{ mensagens[msgAtual]?.titulo }}
                </p>
                <p class="text-slate-500 text-sm leading-relaxed">
                  {{ mensagens[msgAtual]?.subtitulo }}
                </p>
              </div>
            </Transition>
          </div>

          <!-- Barra de progresso -->
          <div class="space-y-2">
            <div class="h-1 bg-slate-100 overflow-hidden rounded-full">
              <div
                class="h-full transition-all ease-linear"
                style="background: linear-gradient(90deg, #C9A84C, #E8CC80); transition-duration: 100ms;"
                :style="{ width: `${progressoCarregamento}%` }"
              />
            </div>
            <p class="text-[10px] font-bold tracking-[3px] uppercase text-slate-400">
              {{ progressoCarregamento.toFixed(0) }}% concluído
            </p>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Header -->
    <header class="border-b border-slate-100 px-6 py-4 bg-white/90 backdrop-blur-sm sticky top-0 z-10">
      <div class="max-w-2xl mx-auto flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-2 text-slate-500 hover:text-dominus-gold-dark text-xs font-bold tracking-[2px] uppercase transition-colors">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
          </svg>
          Voltar
        </NuxtLink>
        <span class="text-[10px] font-black tracking-[3px] uppercase text-dominus-gold-dark">Diagnóstico 360°</span>
        <span class="text-[10px] font-bold text-slate-400 tracking-wider">{{ store.stepAtual + 1 }}/{{ totalSteps }}</span>
      </div>
    </header>

    <main class="flex-1 flex items-start justify-center px-4 py-8">
      <div class="max-w-2xl w-full space-y-6">

        <ProgressBar
          :step-atual="store.stepAtual"
          :total="totalSteps"
          :progresso="store.progresso"
        />

        <Transition :name="direcao" mode="out-in">
          <div
            :key="store.stepAtual"
            class="bg-white border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] rounded-2xl p-6 sm:p-8 relative overflow-hidden"
          >
            <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dominus-gold/30 to-transparent" />
            <QuestionarioStep
              :pilar="store.pilarAtual"
              :respostas="store.respostas"
              @responder="store.responder"
            />
          </div>
        </Transition>

        <!-- Navegação -->
        <div class="flex gap-3">
          <button
            v-if="store.stepAtual > 0"
            class="flex-1 py-3.5 rounded-lg border border-slate-200 bg-white text-slate-600 text-[11px] font-black tracking-[2px] uppercase hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
            @click="anterior"
          >
            ← Anterior
          </button>
          <button
            class="flex-1 py-3.5 rounded-lg text-[11px] font-black tracking-[2px] uppercase transition-all duration-200"
            :class="store.todasRespondidas
              ? 'text-dominus-void shadow-[0_4px_14px_rgba(201,168,76,0.25)] hover:-translate-y-0.5'
              : 'bg-slate-100 text-slate-400 cursor-not-allowed'"
            :style="store.todasRespondidas ? 'background: linear-gradient(135deg, #C9A84C, #E8CC80, #C9A84C)' : ''"
            :disabled="!store.todasRespondidas"
            @click="proxima"
          >
            {{ store.stepAtual === totalSteps - 1 ? 'Ver Resultado →' : 'Próximo Pilar →' }}
          </button>
        </div>

        <p v-if="!store.todasRespondidas" class="text-center text-[10px] font-bold tracking-[2px] uppercase text-slate-400">
          Responda todas as {{ store.pilarAtual.perguntas.length }} perguntas para continuar
        </p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { PILARES } from '~/shared/types/Diagnostico'
import { useDiagnosticoStore } from '~/stores/diagnostico'

definePageMeta({ layout: false })

const store = useDiagnosticoStore()
const router = useRouter()
const totalSteps = PILARES.length
const direcao = ref<'slide-left' | 'slide-right'>('slide-left')
const carregando = ref(false)
const progressoCarregamento = ref(0)
const msgAtual = ref(0)
const DURACAO_MS = 10_000

const mensagens = [
  { titulo: 'Analisando suas respostas...', subtitulo: 'Processando cada resposta com atenção.' },
  { titulo: 'Calculando pontuação por pilar...', subtitulo: 'Avaliando os 4 pilares de maturidade comercial.' },
  { titulo: 'Identificando sua classificação...', subtitulo: 'Comparando com perfis de empresas de alto desempenho.' },
  { titulo: 'Mapeando pontos de melhoria...', subtitulo: 'Encontrando as oportunidades mais valiosas.' },
  { titulo: 'Gerando análise combinada...', subtitulo: 'Cruzando os dados dos pilares para insights estratégicos.' },
  { titulo: 'Quase lá!', subtitulo: 'Em instantes você terá seu diagnóstico completo de maturidade.' },
]

function anterior() {
  direcao.value = 'slide-right'
  store.voltar()
}

function proxima() {
  if (!store.todasRespondidas) return
  if (store.stepAtual < totalSteps - 1) {
    direcao.value = 'slide-left'
    store.avancar()
    return
  }
  iniciarCarregamento()
}

function iniciarCarregamento() {
  carregando.value = true
  progressoCarregamento.value = 0
  msgAtual.value = 0
  const intervaloMsg = DURACAO_MS / mensagens.length
  const tickMs = 100
  let elapsed = 0
  const timer = setInterval(() => {
    elapsed += tickMs
    progressoCarregamento.value = Math.min((elapsed / DURACAO_MS) * 100, 100)
    msgAtual.value = Math.min(Math.floor(elapsed / intervaloMsg), mensagens.length - 1)
    if (elapsed >= DURACAO_MS) {
      clearInterval(timer)
      carregando.value = false
      router.push('/resultado')
    }
  }, tickMs)
}
</script>

<style scoped>
.slide-left-enter-active, .slide-left-leave-active,
.slide-right-enter-active, .slide-right-leave-active { transition: all 0.25s ease; }
.slide-left-enter-from  { opacity: 0; transform: translateX(24px); }
.slide-left-leave-to    { opacity: 0; transform: translateX(-24px); }
.slide-right-enter-from { opacity: 0; transform: translateX(-24px); }
.slide-right-leave-to   { opacity: 0; transform: translateX(24px); }

.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to       { opacity: 0; }

.msg-enter-active, .msg-leave-active { transition: all 0.5s ease; }
.msg-enter-from { opacity: 0; transform: translateY(10px); }
.msg-leave-to   { opacity: 0; transform: translateY(-10px); }
</style>
