<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
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

function anterior() {
  direcao.value = 'slide-right'
  store.voltar()
}

function proxima() {
  if (!store.todasRespondidas) return
  if (store.stepAtual === totalSteps - 1) {
    router.push('/resultado')
  } else {
    direcao.value = 'slide-left'
    store.avancar()
  }
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
.slide-left-leave-to { opacity: 0; transform: translateX(-24px); }
.slide-right-enter-from { opacity: 0; transform: translateX(-24px); }
.slide-right-leave-to { opacity: 0; transform: translateX(24px); }
</style>
