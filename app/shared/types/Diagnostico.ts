export interface Pergunta {
  id: string
  texto: string
}

export interface Secao {
  id: number
  titulo: string
  foco: string
  icone: string
  perguntas: Pergunta[]
  recomendacao: string
}

export type Etapa = 'A' | 'B' | 'C' | 'D'

export interface InfoEtapa {
  etapa: Etapa
  intervalo: string
  cor: string
  corBg: string
  corTexto: string
  perfil: string
  slogan: string
  descricao: string
}

export interface Resultado {
  scoresPorSecao: number[]
  percentuaisPorSecao: number[]
  totalScore: number
  percentualGeral: number
  etapa: Etapa
}

export const SECOES: Secao[] = [
  {
    id: 1,
    titulo: 'Conversão de Vendas',
    foco: 'Fazer quem chega em vendas comprar',
    icone: '💰',
    perguntas: [
      { id: 'q1_1', texto: 'Tem um CRM dentro da sua operação comercial?' },
      { id: 'q1_2', texto: 'Possui pelo menos 2 pessoas no comercial?' },
      { id: 'q1_3', texto: 'Já usa automação de WhatsApp?' },
      { id: 'q1_4', texto: 'Sabe exatamente as métricas de conversão de Lead → Oportunidade → Fechamento?' },
    ],
    recomendacao: 'Implante um CRM, estruture seu time comercial com pelo menos 2 pessoas, automatize o WhatsApp e monitore suas métricas de conversão em cada etapa do funil.',
  },
  {
    id: 2,
    titulo: 'Marketing e Geração de Demanda',
    foco: 'Ter volume de leads',
    icone: '📣',
    perguntas: [
      { id: 'q2_1', texto: 'Recebe pelo menos 20 leads por dia?' },
      { id: 'q2_2', texto: 'Tem demanda chegando por mais de 2 canais?' },
    ],
    recomendacao: 'Diversifique seus canais de aquisição e trabalhe para atingir um volume mínimo de 20 leads por dia, garantindo previsibilidade no pipeline comercial.',
  },
  {
    id: 3,
    titulo: 'Gestão de Processos Comerciais',
    foco: 'Ter um comercial eficiente e metricado',
    icone: '⚙️',
    perguntas: [
      { id: 'q3_1', texto: 'Tem seus processos comerciais desenhados?' },
      { id: 'q3_2', texto: 'Tem um manual de quebra de objeções?' },
      { id: 'q3_3', texto: 'Faz uso de ferramentas de automação comercial?' },
      { id: 'q3_4', texto: 'Já realizou alguma ação de re-compra?' },
    ],
    recomendacao: 'Documente seus processos, crie um manual de objeções, adote ferramentas de automação e implemente estratégias de recompra para maximizar o LTV dos clientes.',
  },
  {
    id: 4,
    titulo: 'Gestão de Pessoas e Liderança',
    foco: 'Treinar e dar maturidade ao time de vendas',
    icone: '👥',
    perguntas: [
      { id: 'q4_1', texto: 'Possui um líder comercial para gestão de vendas?' },
      { id: 'q4_2', texto: 'Fez algum treinamento comercial nos últimos 30 dias?' },
    ],
    recomendacao: 'Invista em um líder comercial dedicado e mantenha a equipe em constante capacitação com treinamentos mensais para aumentar a maturidade do time.',
  },
  {
    id: 5,
    titulo: 'Escala',
    foco: 'Crescer com lucro e liberdade',
    icone: '🚀',
    perguntas: [
      { id: 'q5_1', texto: 'Sua empresa consegue hoje investir R$50 mil em marketing e sabe dizer qual seria o retorno?' },
    ],
    recomendacao: 'Construa uma operação previsível onde você consiga calcular o ROI de cada real investido em marketing, permitindo escalar com segurança e controle.',
  },
]

export const INFO_ETAPAS: Record<Etapa, InfoEtapa> = {
  A: {
    etapa: 'A',
    intervalo: '90 – 100%',
    cor: 'green',
    corBg: 'bg-green-500',
    corTexto: 'text-green-700',
    perfil: 'Sua empresa é madura em vendas e está pronta para dobrar de tamanho.',
    slogan: 'Domino tudo, quero resultados extraordinários',
    descricao: 'Você já possui as ferramentas e as executa bem. Agora é hora de expandir e buscar crescimento acelerado com previsibilidade.',
  },
  B: {
    etapa: 'B',
    intervalo: '70 – 89%',
    cor: 'yellow',
    corBg: 'bg-yellow-400',
    corTexto: 'text-yellow-700',
    perfil: 'Sua situação é neutra. Tudo parece bem, mas existem oportunidades inexploradas.',
    slogan: 'Tenho tudo, mas preciso fazer funcionar',
    descricao: 'Você já possui as ferramentas certas, mas ainda não sabe executar os processos com consistência. O foco agora é operacionalizar o que você tem.',
  },
  C: {
    etapa: 'C',
    intervalo: '50 – 69%',
    cor: 'orange',
    corBg: 'bg-orange-500',
    corTexto: 'text-orange-700',
    perfil: 'Situação quase crítica! Comercial desalinhado e não preparado para o marketing.',
    slogan: 'Sei o que preciso, mas não tenho',
    descricao: 'Você sabe o que precisa, mas ainda não implementou. O risco de desmoronamento é alto. Priorize estruturar o comercial antes de investir mais em marketing.',
  },
  D: {
    etapa: 'D',
    intervalo: 'Abaixo de 50%',
    cor: 'red',
    corBg: 'bg-red-600',
    corTexto: 'text-red-700',
    perfil: 'Situação crítica! Qualquer ação de marketing que você fizer será ineficiente.',
    slogan: 'Não sei o que eu preciso saber',
    descricao: 'Você tem dúvidas de onde começar e como identificar prioridades. Sua empresa é um balde furado — invista primeiro em estrutura antes de qualquer tração.',
  },
}
