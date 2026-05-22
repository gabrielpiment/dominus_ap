import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { PILARES, INFO_CLASSIFICACOES } from '~/shared/types/Diagnostico'
import type {
  Classificacao,
  ResultadoPilar,
  ResultadoGeral,
  QualificacaoLead,
} from '~/shared/types/Diagnostico'

export const useDiagnosticoStore = defineStore('diagnostico', () => {
  // ────────────────────────────────────────────────────────────────
  // Estado
  // ────────────────────────────────────────────────────────────────

  /** Respostas de 1 a 5 por ID de pergunta */
  const respostas = ref<Record<string, number>>({})
  const stepAtual = ref(0)

  /** Respostas das perguntas de pré-qualificação */
  const preQualificacao = ref({
    nome: '',
    empresa: '',
    whatsapp: '',
    email: '',
    segmento: '',
    faturamento: '',
    colaboradores: '',
    frase: '',
    canal: '',
    dor: '',
    tentou: '',
    investir: ''
  })

  // ────────────────────────────────────────────────────────────────
  // Mutações
  // ────────────────────────────────────────────────────────────────

  function responder(id: string, valor: number) {
    respostas.value[id] = valor
  }

  function avancar() {
    if (stepAtual.value < PILARES.length - 1) stepAtual.value++
  }

  function voltar() {
    if (stepAtual.value > 0) stepAtual.value--
  }

  function salvarPreQualificacao(dados: Partial<typeof preQualificacao.value>) {
    preQualificacao.value = { ...preQualificacao.value, ...dados }
  }

  function resetar() {
    respostas.value = {}
    stepAtual.value = 0
    preQualificacao.value = {
      nome: '',
      empresa: '',
      whatsapp: '',
      email: '',
      segmento: '',
      faturamento: '',
      colaboradores: '',
      frase: '',
      canal: '',
      dor: '',
      tentou: '',
      investir: ''
    }
  }

  // ────────────────────────────────────────────────────────────────
  // Scores
  // ────────────────────────────────────────────────────────────────

  /**
   * Nota 0-100 por pilar.
   * Fórmula: (soma das respostas / máximo possível) × 100
   * Máximo = n° perguntas × 5
   */
  const notasPorPilar = computed<ResultadoPilar[]>(() =>
    PILARES.map((pilar) => {
      const maxPossivel = pilar.perguntas.length * 5
      const soma = pilar.perguntas.reduce(
        (acc, p) => acc + (respostas.value[p.id] ?? 0),
        0,
      )
      const nota =
        maxPossivel > 0
          ? parseFloat(((soma / maxPossivel) * 100).toFixed(1))
          : 0
      return {
        pilarId: pilar.id,
        codigo: pilar.codigo,
        titulo: pilar.titulo,
        icone: pilar.icone,
        nota,
      }
    }),
  )

  /** Nota geral: média simples das 4 notas de pilar */
  const notaGeral = computed(() => {
    const soma = notasPorPilar.value.reduce((acc, r) => acc + r.nota, 0)
    return parseFloat((soma / PILARES.length).toFixed(1))
  })

  // ────────────────────────────────────────────────────────────────
  // Classificação
  // ────────────────────────────────────────────────────────────────

  const classificacao = computed<Classificacao>(() => {
    const n = notaGeral.value
    if (n >= 90) return 'maturidade'
    if (n >= 75) return 'controle'
    if (n >= 60) return 'parcial'
    if (n >= 40) return 'improviso'
    return 'caos'
  })

  const infoClassificacao = computed(
    () => INFO_CLASSIFICACOES[classificacao.value],
  )

  // ────────────────────────────────────────────────────────────────
  // Pilares destaque
  // ────────────────────────────────────────────────────────────────

  const pilarMaisForte = computed(() =>
    notasPorPilar.value.reduce((prev, curr) =>
      curr.nota > prev.nota ? curr : prev,
    ),
  )

  const pilarMaisFraco = computed(() =>
    notasPorPilar.value.reduce((prev, curr) =>
      curr.nota < prev.nota ? curr : prev,
    ),
  )

  // ────────────────────────────────────────────────────────────────
  // Diagnóstico combinado
  // ────────────────────────────────────────────────────────────────

  const diagnosticoCombinado = computed<string[]>(() => {
    const msgs: string[] = []
    const p1 = notasPorPilar.value[0]?.nota ?? 0
    const p2 = notasPorPilar.value[1]?.nota ?? 0
    const p3 = notasPorPilar.value[2]?.nota ?? 0
    const p4 = notasPorPilar.value[3]?.nota ?? 0

    if (p2 >= 65 && p1 < 55) {
      msgs.push(
        'Sua empresa consegue gerar demanda, mas perde oportunidades no comercial. O risco está em gerar oportunidades que não são bem acompanhadas, qualificadas ou convertidas.',
      )
    } else if (p1 >= 65 && p2 < 55) {
      msgs.push(
        'Sua empresa até sabe vender, mas não possui entrada previsível de oportunidades. Sem geração de demanda constante, o crescimento ainda depende de indicação, relacionamento ou esforço pontual.',
      )
    } else if (p1 < 50 && p2 < 50) {
      msgs.push(
        'Sua empresa não possui aquisição previsível nem processo comercial estruturado. Esse é um sinal forte de empresa improviso — o crescimento depende mais de esforço e sorte do que de sistema.',
      )
    }

    if (p3 < 55) {
      msgs.push(
        'Existe dependência forte de pessoas específicas, especialmente do dono. Mesmo que sua empresa venda, ela pode estar presa em um modelo onde o crescimento aumenta o caos operacional.',
      )
    }

    if (p4 < 55) {
      msgs.push(
        'A empresa não possui controle suficiente para tomar decisões com segurança. Sem indicadores claros, fica impossível saber se o problema está na aquisição, no comercial, na equipe, no processo ou na oferta.',
      )
    }

    // Cenários genéricos quando não há combinações específicas
    if (msgs.length === 0) {
      const allHigh = p1 >= 75 && p2 >= 75 && p3 >= 75 && p4 >= 75
      const allMedium = p1 >= 50 && p2 >= 50 && p3 >= 50 && p4 >= 50
      if (allHigh) {
        msgs.push(
          'Sua empresa possui boa maturidade em todos os pilares. O próximo desafio é escala, refinamento e crescimento com mais controle.',
        )
      } else if (allMedium) {
        msgs.push(
          'Sua empresa já saiu do estágio inicial, mas ainda não atingiu previsibilidade plena. Ela funciona, mas depende de ajustes estruturais para crescer com mais segurança.',
        )
      }
    }

    return msgs
  })

  // ────────────────────────────────────────────────────────────────
  // Riscos automáticos
  // ────────────────────────────────────────────────────────────────

  const riscos = computed<string[]>(() => {
    const lista: string[] = []
    const p1 = notasPorPilar.value[0]?.nota ?? 0
    const p2 = notasPorPilar.value[1]?.nota ?? 0
    const p3 = notasPorPilar.value[2]?.nota ?? 0
    const p4 = notasPorPilar.value[3]?.nota ?? 0

    if (p1 < 65) lista.push('Perder oportunidades por falta de follow-up estruturado')
    if (p2 < 65) lista.push('Depender demais de indicação para gerar novas oportunidades')
    if (p4 < 65) lista.push('Operar sem clareza de indicadores e tomar decisões no escuro')
    if (p1 < 55 || p3 < 55) lista.push('Aumentar faturamento sem aumentar controle operacional')
    if (p3 < 55) lista.push('Sobrecarregar o dono com operações que o time deveria resolver')
    if (p1 < 55 && p2 >= 55) lista.push('Investir em tráfego ou marketing antes de estruturar o comercial')
    if (p4 < 50 && p1 < 50) lista.push('Crescer de forma desorganizada sem saber de onde vêm os resultados')

    return lista
  })

  // ────────────────────────────────────────────────────────────────
  // Qualificação do lead (oculta para o usuário)
  // ────────────────────────────────────────────────────────────────

  const qualificacaoLead = computed<QualificacaoLead>(() => {
    const n = notaGeral.value
    const p2 = notasPorPilar.value[1]?.nota ?? 0
    const p3 = notasPorPilar.value[2]?.nota ?? 0
    const p4 = notasPorPilar.value[3]?.nota ?? 0
    const algumPilarAbaixo70 = p2 < 70 || p3 < 70 || p4 < 70

    if (n >= 35 && n <= 75 && algumPilarAbaixo70) return 'quente'
    if (n >= 35 && n <= 70) return 'morno'
    return 'frio'
  })

  // ────────────────────────────────────────────────────────────────
  // Helpers de navegação
  // ────────────────────────────────────────────────────────────────

  const pilarAtual = computed(() => PILARES[stepAtual.value] ?? PILARES[0]!)

  const progresso = computed(() =>
    Math.round((stepAtual.value / PILARES.length) * 100),
  )

  const todasRespondidas = computed(() => {
    const pilar = PILARES[stepAtual.value]
    return (
      pilar?.perguntas.every((p) => respostas.value[p.id] !== undefined) ??
      false
    )
  })

  // ────────────────────────────────────────────────────────────────
  // Resultado consolidado
  // ────────────────────────────────────────────────────────────────

  const resultado = computed<ResultadoGeral>(() => ({
    notaGeral: notaGeral.value,
    classificacao: classificacao.value,
    resultadosPilares: notasPorPilar.value,
    pilarMaisForte: pilarMaisForte.value,
    pilarMaisFraco: pilarMaisFraco.value,
    diagnosticoCombinado: diagnosticoCombinado.value,
    riscos: riscos.value,
    qualificacaoLead: qualificacaoLead.value,
    proximoPasso:
      'O próximo passo mais inteligente para sua empresa é entender com profundidade qual pilar deve ser priorizado primeiro e construir um plano de estruturação antes de tentar escalar aquisição ou contratação.',
  }))

  return {
    respostas,
    stepAtual,
    responder,
    avancar,
    voltar,
    resetar,
    notasPorPilar,
    notaGeral,
    classificacao,
    infoClassificacao,
    pilarMaisForte,
    pilarMaisFraco,
    diagnosticoCombinado,
    riscos,
    qualificacaoLead,
    pilarAtual,
    progresso,
    todasRespondidas,
    resultado,
    preQualificacao,
    salvarPreQualificacao,
  }
})
