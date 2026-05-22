<template>
  <div class="min-h-screen bg-dominus-void flex items-center justify-center px-6">
    <div class="w-full max-w-md space-y-8">

      <div class="text-center space-y-3">
        <span class="inline-block bg-dominus-gold/10 border border-dominus-gold/30 text-dominus-gold text-[10px] font-bold tracking-[3px] uppercase px-4 py-2 rounded-sm">
          Acesso Restrito
        </span>
        <h1 class="font-display text-3xl sm:text-4xl font-black text-dominus-gold leading-tight">
          Entre na sua conta
        </h1>
        <p class="text-dominus-muted text-sm">
          Enviaremos um link mágico pro seu email.
        </p>
      </div>

      <form class="space-y-4" @submit.prevent="enviar">
        <div>
          <label for="email" class="block text-[10px] font-bold tracking-[2px] uppercase text-dominus-subtle mb-2">
            Email
          </label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            autocomplete="email"
            placeholder="voce@empresa.com"
            class="w-full bg-dominus-surface border border-dominus-border text-white placeholder-dominus-subtle rounded-lg px-4 py-3 focus:outline-none focus:border-dominus-gold transition-colors"
          />
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full inline-flex items-center justify-center gap-2 font-black text-[11px] tracking-[2px] uppercase text-dominus-void bg-gradient-to-r from-dominus-gold via-dominus-gold-light to-dominus-gold px-8 py-4 rounded-lg transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-dominus-gold/20"
        >
          {{ loading ? 'Enviando…' : 'Enviar Link Mágico' }}
        </button>
      </form>

      <p
        v-if="mensagem"
        class="text-center text-sm rounded-lg px-4 py-3"
        :class="erro
          ? 'bg-red-500/10 border border-red-500/30 text-red-300'
          : 'bg-dominus-gold/10 border border-dominus-gold/30 text-dominus-gold'"
      >
        {{ mensagem }}
      </p>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '~/composables/useAuth'

definePageMeta({ layout: false })

const { signInWithOtp } = useAuth()
const email = ref('')
const loading = ref(false)
const mensagem = ref('')
const erro = ref(false)

async function enviar() {
  loading.value = true
  mensagem.value = ''
  erro.value = false

  const { error } = await signInWithOtp(email.value)

  loading.value = false
  if (error) {
    erro.value = true
    mensagem.value = error.message
    return
  }

  mensagem.value = 'Link enviado! Verifique sua caixa de entrada.'
}
</script>
