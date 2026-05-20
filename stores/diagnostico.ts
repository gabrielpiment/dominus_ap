import { defineStore } from 'pinia'
import { SECOES, INFO_ETAPAS } from '~/shared/types/Diagnostico'
import type { Etapa, Resultado } from '~/shared/types/Diagnostico'

export const useDiagnosticoStore = defineStore('diagnostico', () => {
  const respostas = ref<Record<string, boolean>>({})
  const stepAtual = ref(0)

  function responder(id: string, valor: boolean) {
    respostas.value[id] = valor
  }

  function avancar() {
    if (stepAtual.value < SECOES.length - 1) stepAtual.value++
  }

  function voltar() {
    if (stepAtual.value > 0) stepAtual.value--
  }

  function resetar() {
    respostas.value = {}
    stepAtual.value = 0
  }

  const scoresPorSecao = computed(() =>
    SECOES.map((secao) => {
      const total = secao.perguntas.length
      const sim = secao.perguntas.filter((p) => respostas.value[p.id] === true).length
      return parseFloat(((sim / total) * 10).toFixed(1))
    })
  )

  const percentuaisPorSecao = computed(() =>
    scoresPorSecao.value.map((s) => parseFloat(((s / 10) * 100).toFixed(1)))
  )

  const totalScore = computed(() =>
    parseFloat(scoresPorSecao.value.reduce((a, b) => a + b, 0).toFixed(1))
  )

  const percentualGeral = computed(() =>
    parseFloat(((totalScore.value / 50) * 100).toFixed(1))
  )

  const etapa = computed<Etapa>(() => {
    const p = percentualGeral.value
    if (p >= 90) return 'A'
    if (p >= 70) return 'B'
    if (p >= 50) return 'C'
    return 'D'
  })

  const resultado = computed<Resultado>(() => ({
    scoresPorSecao: scoresPorSecao.value,
    percentuaisPorSecao: percentuaisPorSecao.value,
    totalScore: totalScore.value,
    percentualGeral: percentualGeral.value,
    etapa: etapa.value,
  }))

  const infoEtapa = computed(() => INFO_ETAPAS[etapa.value])

  const secaoAtual = computed(() => SECOES[stepAtual.value])

  const progresso = computed(() =>
    Math.round(((stepAtual.value) / SECOES.length) * 100)
  )

  const todasRespondidas = computed(() => {
    const secao = SECOES[stepAtual.value]
    return secao?.perguntas.every((p) => respostas.value[p.id] !== undefined) ?? false
  })

  return {
    respostas,
    stepAtual,
    responder,
    avancar,
    voltar,
    resetar,
    scoresPorSecao,
    percentuaisPorSecao,
    totalScore,
    percentualGeral,
    etapa,
    resultado,
    infoEtapa,
    secaoAtual,
    progresso,
    todasRespondidas,
  }
})
