// ──────────────────────────────────────────────────────────────────────────────
// Tipos base
// ──────────────────────────────────────────────────────────────────────────────

export interface Pergunta {
  id: string
  texto: string
  /** Labels customizados para perguntas com escala contextual (não invertida matematicamente) */
  labelsCustom?: Record<number, string>
}

export interface Pilar {
  id: number
  codigo: 'P1' | 'P2' | 'P3' | 'P4'
  titulo: string
  objetivo: string
  icone: string
  perguntas: Pergunta[]
  analiseBaixa: string
  analiseMedia: string
  analiseAlta: string
}

export type Classificacao =
  | 'caos'
  | 'improviso'
  | 'parcial'
  | 'controle'
  | 'maturidade'

export interface InfoClassificacao {
  classificacao: Classificacao
  titulo: string
  intervaloMin: number
  intervaloMax: number
  leitura: string
  cor: string
  corGradient: string
}

export interface ResultadoPilar {
  pilarId: number
  codigo: string
  titulo: string
  icone: string
  nota: number
}

export type QualificacaoLead = 'quente' | 'morno' | 'frio'

export interface ResultadoGeral {
  notaGeral: number
  classificacao: Classificacao
  resultadosPilares: ResultadoPilar[]
  pilarMaisForte: ResultadoPilar
  pilarMaisFraco: ResultadoPilar
  diagnosticoCombinado: string[]
  riscos: string[]
  qualificacaoLead: QualificacaoLead
  proximoPasso: string
}

// ──────────────────────────────────────────────────────────────────────────────
// Labels padrão (1-5)
// ──────────────────────────────────────────────────────────────────────────────

export const LABELS_PADRAO: Record<number, string> = {
  1: 'Não existe',
  2: 'Existe de forma informal',
  3: 'Existe, mas é inconsistente',
  4: 'Existe e funciona razoavelmente bem',
  5: 'Existe, é documentado e acompanhado',
}

// ──────────────────────────────────────────────────────────────────────────────
// Pilares e perguntas (40 no total)
// ──────────────────────────────────────────────────────────────────────────────

export const PILARES: Pilar[] = [
  // ────────────────────────────────
  // P1 — Vendas / Comercial
  // ────────────────────────────────
  {
    id: 1,
    codigo: 'P1',
    titulo: 'Vendas / Comercial',
    objetivo: 'Medir se a empresa possui um processo comercial previsível ou se ainda vende no improviso.',
    icone: '💰',
    perguntas: [
      {
        id: 'p1_q1',
        texto: 'Sua empresa possui um processo comercial claro, com etapas definidas do primeiro contato até o fechamento?',
      },
      {
        id: 'p1_q2',
        texto: 'Todo lead que chega é registrado em algum CRM, planilha ou sistema de acompanhamento?',
      },
      {
        id: 'p1_q3',
        texto: 'Sua empresa sabe exatamente quantos leads entraram nos últimos 30 dias?',
      },
      {
        id: 'p1_q4',
        texto: 'Sua equipe sabe exatamente o que fazer quando um novo lead chega?',
      },
      {
        id: 'p1_q5',
        texto: 'Existe um roteiro ou método definido para conduzir uma conversa comercial?',
      },
      {
        id: 'p1_q6',
        texto: 'Sua empresa possui critérios claros para classificar leads bons, ruins e prioritários?',
      },
      {
        id: 'p1_q7',
        texto: 'Existe um processo estruturado de follow-up para leads que não compram no primeiro contato?',
      },
      {
        id: 'p1_q8',
        texto: 'Você sabe quantas propostas foram enviadas no último mês?',
      },
      {
        id: 'p1_q9',
        texto: 'Você sabe sua taxa média de conversão de lead em cliente?',
      },
      {
        id: 'p1_q10',
        texto: 'O comercial da sua empresa funciona mesmo quando o dono não está diretamente envolvido?',
      },
    ],
    analiseBaixa:
      'Sua empresa pode estar perdendo oportunidades por falta de processo comercial. O problema talvez não seja falta de demanda, mas falta de organização para transformar interessados em clientes.',
    analiseMedia:
      'Sua empresa já possui alguma estrutura comercial, mas ainda existe inconsistência. Isso significa que alguns leads são bem conduzidos, enquanto outros podem se perder no caminho.',
    analiseAlta:
      'Sua empresa possui boa base comercial. O próximo passo é otimizar conversão, previsibilidade e independência do dono no processo de vendas.',
  },

  // ────────────────────────────────
  // P2 — Marketing / Geração de Demanda
  // ────────────────────────────────
  {
    id: 2,
    codigo: 'P2',
    titulo: 'Marketing / Demanda',
    objetivo:
      'Medir se a empresa possui canais consistentes de geração de oportunidades ou se ainda depende de indicação, sorte e ações isoladas.',
    icone: '📣',
    perguntas: [
      {
        id: 'p2_q1',
        texto: 'Sua empresa possui uma estratégia clara para atrair novos clientes todos os meses?',
      },
      {
        id: 'p2_q2',
        texto: 'Hoje você sabe exatamente de onde vêm seus clientes?',
      },
      {
        id: 'p2_q3',
        texto: 'Como sua empresa se posiciona em relação à dependência de indicação para vender?',
        labelsCustom: {
          1: 'Depende totalmente de indicação',
          2: 'Depende muito de indicação',
          3: 'Depende parcialmente',
          4: 'Tem outros canais relevantes',
          5: 'Indicação é apenas bônus, não dependência',
        },
      },
      {
        id: 'p2_q4',
        texto: 'Sua empresa produz conteúdo com objetivo comercial claro?',
      },
      {
        id: 'p2_q5',
        texto: 'Seu perfil, site ou página comunica com clareza quem você ajuda e qual problema resolve?',
      },
      {
        id: 'p2_q6',
        texto: 'Sua empresa possui uma oferta clara para transformar interessados em leads?',
      },
      {
        id: 'p2_q7',
        texto: 'Existe algum canal ativo de aquisição além de indicação?',
      },
      {
        id: 'p2_q8',
        texto: 'Sua empresa já tentou tráfego, conteúdo, prospecção ou parcerias de forma estruturada?',
      },
      {
        id: 'p2_q9',
        texto: 'Quando uma ação de marketing é feita, os resultados são acompanhados?',
      },
      {
        id: 'p2_q10',
        texto: 'Sua empresa possui uma rotina semanal de geração de demanda?',
      },
    ],
    analiseBaixa:
      'Sua empresa provavelmente depende demais de indicação, ações pontuais ou esforço do dono para gerar oportunidades. Isso torna o crescimento instável.',
    analiseMedia:
      'Sua empresa já possui algumas iniciativas de aquisição, mas ainda não existe consistência suficiente para gerar previsibilidade.',
    analiseAlta:
      'Sua empresa já possui bons canais de geração de demanda. O próximo passo é conectar melhor marketing, comercial e indicadores para transformar demanda em crescimento previsível.',
  },

  // ────────────────────────────────
  // P3 — Pessoas / Processos Comerciais
  // ────────────────────────────────
  {
    id: 3,
    codigo: 'P3',
    titulo: 'Pessoas / Processos',
    objetivo:
      'Medir se a empresa possui pessoas, responsabilidades e rotinas claras ou se ainda depende demais do dono e de improviso operacional.',
    icone: '👥',
    perguntas: [
      {
        id: 'p3_q1',
        texto: 'As responsabilidades comerciais da empresa estão claramente definidas?',
      },
      {
        id: 'p3_q2',
        texto: 'Existe uma pessoa responsável por acompanhar novos leads diariamente?',
      },
      {
        id: 'p3_q3',
        texto: 'Existe alguém responsável por atualizar CRM, planilha ou pipeline?',
      },
      {
        id: 'p3_q4',
        texto: 'Sua empresa possui uma rotina comercial diária ou semanal?',
      },
      {
        id: 'p3_q5',
        texto: 'A equipe recebe treinamento ou orientação comercial com frequência?',
      },
      {
        id: 'p3_q6',
        texto: 'Existem padrões definidos para atendimento, diagnóstico, proposta e follow-up?',
      },
      {
        id: 'p3_q7',
        texto: 'Quando uma venda é perdida, sua empresa registra ou analisa o motivo?',
      },
      {
        id: 'p3_q8',
        texto: 'Qual é o nível de dependência do dono nas negociações para que a venda aconteça?',
        labelsCustom: {
          1: 'O dono fecha tudo — sem ele não há venda',
          2: 'O dono participa da maioria das negociações',
          3: 'O dono participa em parte das negociações',
          4: 'O time conduz a maior parte sem o dono',
          5: 'O processo funciona de forma independente do dono',
        },
      },
      {
        id: 'p3_q9',
        texto: 'A empresa consegue manter o processo comercial funcionando mesmo em semanas de alta demanda?',
      },
      {
        id: 'p3_q10',
        texto: 'Existe clareza sobre quem deve fazer cada ação depois que um lead entra?',
      },
    ],
    analiseBaixa:
      'Sua empresa depende muito de pessoas específicas, principalmente do dono. Isso limita o crescimento e aumenta o risco de gargalos.',
    analiseMedia:
      'Sua empresa já possui algumas funções e rotinas, mas ainda falta padronização para que o processo funcione com consistência.',
    analiseAlta:
      'Sua empresa possui boa clareza de pessoas e processos. O próximo passo é melhorar autonomia, performance e controle por indicadores.',
  },

  // ────────────────────────────────
  // P4 — Indicadores / Controle
  // ────────────────────────────────
  {
    id: 4,
    codigo: 'P4',
    titulo: 'Indicadores / Controle',
    objetivo: 'Medir se a empresa toma decisões com dados reais ou se ainda opera no escuro.',
    icone: '📊',
    perguntas: [
      {
        id: 'p4_q1',
        texto: 'Você acompanha semanalmente os principais números da empresa?',
      },
      {
        id: 'p4_q2',
        texto: 'Você sabe quantos leads entraram no último mês?',
      },
      {
        id: 'p4_q3',
        texto: 'Você sabe quantas reuniões comerciais foram realizadas no último mês?',
      },
      {
        id: 'p4_q4',
        texto: 'Você sabe quantas propostas foram enviadas no último mês?',
      },
      {
        id: 'p4_q5',
        texto: 'Você sabe quantos clientes foram fechados no último mês?',
      },
      {
        id: 'p4_q6',
        texto: 'Você sabe sua taxa de conversão comercial?',
      },
      {
        id: 'p4_q7',
        texto: 'Você sabe o ticket médio dos seus clientes?',
      },
      {
        id: 'p4_q8',
        texto: 'Você sabe quais canais geram os clientes mais lucrativos?',
      },
      {
        id: 'p4_q9',
        texto: 'Você sabe quais são os principais gargalos que impedem sua empresa de crescer hoje?',
      },
      {
        id: 'p4_q10',
        texto: 'Existe uma rotina mensal de análise e tomada de decisão baseada em dados?',
      },
    ],
    analiseBaixa:
      'Sua empresa está operando no escuro. Mesmo que exista faturamento, ainda falta controle para entender o que está funcionando, o que está travando e o que precisa ser priorizado.',
    analiseMedia:
      'Sua empresa acompanha alguns números, mas ainda não possui clareza suficiente para prever crescimento e tomar decisões com segurança.',
    analiseAlta:
      'Sua empresa possui uma boa base de indicadores. O próximo passo é transformar esses dados em previsibilidade, decisões mais rápidas e crescimento controlado.',
  },
]

// ──────────────────────────────────────────────────────────────────────────────
// Classificações (5 níveis)
// ──────────────────────────────────────────────────────────────────────────────

export const INFO_CLASSIFICACOES: Record<Classificacao, InfoClassificacao> = {
  caos: {
    classificacao: 'caos',
    titulo: 'Caos Operacional',
    intervaloMin: 0,
    intervaloMax: 39,
    leitura:
      'A empresa depende fortemente de improviso, esforço manual e decisões reativas. Existe alto risco de perda de oportunidades, crescimento desorganizado e dependência excessiva do dono.',
    cor: '#ef4444',
    corGradient: 'linear-gradient(135deg, #ef4444, #f87171)',
  },
  improviso: {
    classificacao: 'improviso',
    titulo: 'Improviso Funcional',
    intervaloMin: 40,
    intervaloMax: 59,
    leitura:
      'A empresa funciona, vende e talvez até fature bem, mas ainda depende de esforço, indicação e pessoas específicas. Existe movimento, mas ainda não existe previsibilidade real.',
    cor: '#f97316',
    corGradient: 'linear-gradient(135deg, #f97316, #fb923c)',
  },
  parcial: {
    classificacao: 'parcial',
    titulo: 'Estrutura Parcial',
    intervaloMin: 60,
    intervaloMax: 74,
    leitura:
      'A empresa já possui alguns processos, mas ainda existem lacunas importantes que impedem crescimento previsível. A base existe, mas ainda falta controle, padronização e consistência.',
    cor: '#eab308',
    corGradient: 'linear-gradient(135deg, #eab308, #facc15)',
  },
  controle: {
    classificacao: 'controle',
    titulo: 'Empresa em Controle',
    intervaloMin: 75,
    intervaloMax: 89,
    leitura:
      'A empresa já tem boa estrutura, mas ainda pode otimizar aquisição, comercial, pessoas, processos e indicadores. Existe maturidade, mas ainda há espaço para crescimento mais seguro e previsível.',
    cor: '#C9A84C',
    corGradient: 'linear-gradient(135deg, #C9A84C, #E8CC80)',
  },
  maturidade: {
    classificacao: 'maturidade',
    titulo: 'Maturidade Avançada',
    intervaloMin: 90,
    intervaloMax: 100,
    leitura:
      'A empresa possui processos claros, indicadores acompanhados e operação mais previsível. O foco agora é escalar com controle e proteger a estrutura contra gargalos futuros.',
    cor: '#22c55e',
    corGradient: 'linear-gradient(135deg, #22c55e, #4ade80)',
  },
}
