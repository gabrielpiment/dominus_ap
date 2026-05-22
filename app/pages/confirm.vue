<template>
  <div class="min-h-screen bg-dominus-void flex items-center justify-center px-6">
    <div class="text-center space-y-4">
      <div class="inline-block w-10 h-10 border-2 border-dominus-gold/30 border-t-dominus-gold rounded-full animate-spin" />
      <p class="text-dominus-muted text-sm tracking-[2px] uppercase">
        Confirmando seu acesso…
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { navigateTo } from '#imports'
import { useSupabaseUser } from '#imports'

definePageMeta({ layout: false })

const user = useSupabaseUser()

watch(
  user,
  () => {
    if (user.value) {
      navigateTo('/teste-supabase')
    }
  },
  { immediate: true },
)
</script>
