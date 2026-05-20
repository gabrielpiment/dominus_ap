<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">

    <!-- Tela de carregamento -->
    <Transition name="fade">
      <div
        v-if="carregando"
        class="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex flex-col items-center justify-center px-8"
      >
        <div class="max-w-md w-full text-center space-y-10">
          <!-- Spinner animado -->
          <div class="relative mx-auto w-24 h-24">
            <div class="absolute inset-0 rounded-full border-4 border-indigo-500/20" />
            <div class="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-400 animate-spin" />
            <div class="absolute inset-2 rounded-full border-4 border-transparent border-t-indigo-300/50 animate-spin" style="animation-duration: 1.5s; animation-direction: reverse;" />
            <div class="absolute inset-0 flex items-center justify-center text-3xl">🔍</div>
          </div>

          <!-- Mensagem animada -->
          <div class="h-20 flex flex-col items-center justify-center">
            <Transition name="msg" mode="out-in">
              <div :key="msgAtual" class="text-center space-y-2">
                <p class="text-white text-xl font-bold leading-snug">
                  {{ mensagens[msgAtual]?.titulo }}
                </p>
                <p class="text-indigo-300 text-sm leading-relaxed">
                  {{ mensagens[msgAtual]?.subtitulo }}
                </p>
              </div>
            </Transition>
          </div>

          <!-- Barra de progresso do carregamento -->
          <div class="space-y-2">
            <div class="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
              <div
                class="bg-indigo-400 h-1.5 rounded-full transition-all ease-linear"
                :style="{ width: `${progressoCarregamento}%`, transitionDuration: '100ms' }"
              />
            </div>
            <p class="text-indigo-400 text-xs">{{ progressoCarregamento.toFixed(0) }}%</p>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Header -->
    <header class="bg-white border-b border-gray-200 px-6 py-4">
      <div class="max-w-2xl mx-auto flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-1.5 text-gray-400 hover:text-gray-700 text-sm font-medium transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Voltar
        </NuxtLink>
        <span class="text-sm font-semibold text-gray-700">Diagnóstico 360°</span>
        <span class="text-sm text-gray-400">{{ store.stepAtual + 1 }}/{{ totalSteps }}</span>
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
          <div :key="store.stepAtual" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <QuestionarioStep
              :secao="store.secaoAtual"
              :respostas="store.respostas"
              @responder="store.responder"
            />
          </div>
        </Transition>

        <div class="flex gap-3">
          <button
            v-if="store.stepAtual > 0"
            class="flex-1 py-3.5 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold hover:border-gray-300 transition-all duration-200"
            @click="anterior"
          >
            ← Anterior
          </button>
          <button
            class="flex-1 py-3.5 rounded-xl font-bold text-white transition-all duration-200"
            :class="store.todasRespondidas
              ? 'bg-indigo-600 hover:bg-indigo-700 shadow-md hover:-translate-y-0.5'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'"
            :disabled="!store.todasRespondidas"
            @click="proxima"
          >
            {{ store.stepAtual === totalSteps - 1 ? 'Ver Resultado →' : 'Próxima →' }}
          </button>
        </div>

        <p v-if="!store.todasRespondidas" class="text-center text-xs text-gray-400">
          Responda todas as perguntas desta seção para continuar.
        </p>
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
const totalSteps = SECOES.length
const direcao = ref<'slide-left' | 'slide-right'>('slide-left')

const carregando = ref(false)
const progressoCarregamento = ref(0)
const msgAtual = ref(0)

const DURACAO_MS = 10_000

const mensagens = [
  {
    titulo: 'Analisando suas respostas...',
    subtitulo: 'Estamos processando cada resposta com atenção.',
  },
  {
    titulo: 'Calculando sua pontuação...',
    subtitulo: 'Cruzando os dados das 5 alavancas comerciais.',
  },
  {
    titulo: 'Identificando sua etapa...',
    subtitulo: 'Comparando com o perfil das empresas de alto desempenho.',
  },
  {
    titulo: 'Mapeando pontos de melhoria...',
    subtitulo: 'Encontrando as oportunidades mais valiosas para o seu negócio.',
  },
  {
    titulo: 'Preparando suas recomendações...',
    subtitulo: 'Personalizando o plano de ação para a sua realidade.',
  },
  {
    titulo: 'Quase lá!',
    subtitulo: 'Em instantes você terá um diagnóstico completo da sua empresa.',
  },
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
    msgAtual.value = Math.min(
      Math.floor(elapsed / intervaloMsg),
      mensagens.length - 1,
    )

    if (elapsed >= DURACAO_MS) {
      clearInterval(timer)
      carregando.value = false
      router.push('/resultado')
    }
  }, tickMs)
}
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.25s ease;
}
.slide-left-enter-from { opacity: 0; transform: translateX(24px); }
.slide-left-leave-to   { opacity: 0; transform: translateX(-24px); }
.slide-right-enter-from { opacity: 0; transform: translateX(-24px); }
.slide-right-leave-to   { opacity: 0; transform: translateX(24px); }

.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to       { opacity: 0; }

.msg-enter-active, .msg-leave-active { transition: all 0.5s ease; }
.msg-enter-from { opacity: 0; transform: translateY(12px); }
.msg-leave-to   { opacity: 0; transform: translateY(-12px); }
</style>
