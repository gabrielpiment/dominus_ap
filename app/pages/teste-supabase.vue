<template>
  <div class="min-h-screen bg-dominus-void px-6 py-12">
    <div class="max-w-3xl mx-auto space-y-8">

      <header class="space-y-3">
        <span class="inline-block bg-dominus-gold/10 border border-dominus-gold/30 text-dominus-gold text-[10px] font-bold tracking-[3px] uppercase px-4 py-2 rounded-sm">
          Sandbox · Conexão Supabase
        </span>
        <h1 class="font-display text-3xl sm:text-4xl font-black text-dominus-gold leading-tight">
          Tabela <span class="text-white">mensagens_teste</span>
        </h1>
        <p v-if="user" class="text-dominus-muted text-sm">
          Logado como <span class="text-dominus-gold">{{ user.email }}</span>
          <button class="ml-3 text-xs text-dominus-subtle underline" @click="sair">sair</button>
        </p>
      </header>

      <section class="bg-dominus-surface border border-dominus-border rounded-lg p-6 space-y-4">
        <form class="flex gap-3" @submit.prevent="adicionar">
          <input
            v-model="novaMensagem"
            type="text"
            required
            placeholder="Digite uma mensagem…"
            class="flex-1 bg-dominus-void border border-dominus-border text-white placeholder-dominus-subtle rounded-lg px-4 py-3 focus:outline-none focus:border-dominus-gold transition-colors"
          />
          <button
            type="submit"
            :disabled="enviando"
            class="font-black text-[11px] tracking-[2px] uppercase text-dominus-void bg-gradient-to-r from-dominus-gold via-dominus-gold-light to-dominus-gold px-6 py-3 rounded-lg transition-all duration-200 hover:opacity-90 disabled:opacity-50"
          >
            {{ enviando ? 'Salvando…' : 'Salvar' }}
          </button>
        </form>

        <p v-if="erro" class="text-sm text-red-300 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
          {{ erro }}
        </p>
      </section>

      <section class="space-y-3">
        <h2 class="text-[10px] font-bold tracking-[3px] uppercase text-dominus-subtle">
          Últimas mensagens
        </h2>

        <div v-if="carregando" class="text-dominus-muted text-sm">Carregando…</div>

        <div v-else-if="mensagens.length === 0" class="text-dominus-subtle text-sm italic">
          Nenhuma mensagem ainda.
        </div>

        <ul v-else class="space-y-2">
          <li
            v-for="m in mensagens"
            :key="m.id"
            class="bg-dominus-surface border border-dominus-border rounded-lg px-4 py-3 flex justify-between items-start gap-4"
          >
            <span class="text-white text-sm">{{ m.conteudo }}</span>
            <span class="text-dominus-subtle text-[10px] tracking-[1px] uppercase whitespace-nowrap">
              {{ formatarData(m.criado_em) }}
            </span>
          </li>
        </ul>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSupabaseClient, useSupabaseUser } from '#imports'
import { useAuth } from '~/composables/useAuth'

definePageMeta({ layout: false })

interface MensagemTeste {
  id: string
  conteudo: string
  criado_em: string
}

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const { signOut } = useAuth()

const mensagens = ref<MensagemTeste[]>([])
const novaMensagem = ref('')
const carregando = ref(true)
const enviando = ref(false)
const erro = ref('')

async function carregar() {
  carregando.value = true
  erro.value = ''
  const { data, error } = await supabase
    .from('mensagens_teste')
    .select('id, conteudo, criado_em')
    .order('criado_em', { ascending: false })
    .limit(20)

  carregando.value = false
  if (error) {
    erro.value = `Erro ao carregar: ${error.message}`
    return
  }
  mensagens.value = (data ?? []) as MensagemTeste[]
}

async function adicionar() {
  enviando.value = true
  erro.value = ''
  const { error } = await supabase
    .from('mensagens_teste')
    .insert({ conteudo: novaMensagem.value })

  enviando.value = false
  if (error) {
    erro.value = `Erro ao salvar: ${error.message}`
    return
  }
  novaMensagem.value = ''
  await carregar()
}

async function sair() {
  await signOut()
}

function formatarData(iso: string): string {
  return new Date(iso).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}

onMounted(carregar)
</script>
