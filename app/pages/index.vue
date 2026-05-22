<template>
  <div class="min-h-screen bg-dominus-void flex flex-col relative overflow-hidden">
    <!-- Glow effects background -->
    <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-dominus-gold/5 blur-[120px] pointer-events-none z-0" />
    <div class="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-dominus-gold/5 blur-[150px] pointer-events-none z-0" />
    <div class="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-dominus-gold/3 blur-[140px] pointer-events-none z-0" />
    
    <!-- SVG Grid Overlay -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(201,168,76,0.12),rgba(255,255,255,0))] pointer-events-none z-0" />
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none z-0" />

    <!-- Sticky Header -->
    <header class="sticky top-0 z-45 w-full border-b border-dominus-border/40 backdrop-blur-md bg-dominus-void/80 transition-all duration-300">
      <div class="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between max-w-5xl mx-auto w-full">
        <div class="flex items-center gap-2 sm:gap-3 group cursor-pointer" @click="router.push('/')">
          <div class="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-dominus-gold/20 to-dominus-gold/5 border border-dominus-gold/30 group-hover:border-dominus-gold/60 transition-all duration-300 shadow-[0_0_15px_rgba(201,168,76,0.1)]">
            <svg viewBox="0 0 36 36" fill="none" class="w-[18px] h-[18px] sm:w-5 sm:h-5 transition-transform duration-500 group-hover:rotate-12">
              <path d="M18 2L22 10H30L24 16L26 24L18 20L10 24L12 16L6 10H14L18 2Z" fill="#C9A84C" opacity="0.9"/>
              <rect x="12" y="26" width="12" height="2" rx="1" fill="#C9A84C"/>
              <rect x="14" y="30" width="8" height="2" rx="1" fill="#C9A84C"/>
            </svg>
            <div class="absolute inset-0 rounded-xl bg-dominus-gold/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
          </div>
          <span class="font-sans text-base sm:text-lg font-black tracking-[2px] sm:tracking-[4px] text-white group-hover:text-dominus-gold transition-colors duration-300">DOMINUS</span>
        </div>
        
        <div class="flex items-center gap-3 sm:gap-4">
          <span class="hidden sm:inline-flex text-[9px] font-black tracking-[2px] uppercase text-dominus-gold border border-dominus-gold/30 px-3 py-1.5 rounded-full bg-dominus-gold/5 backdrop-blur-sm">
            MÉTODO DOMINUS
          </span>
          <button 
            @click="abrirModal"
            class="text-[9px] font-black tracking-[1px] sm:tracking-[1.5px] uppercase text-dominus-void bg-gradient-to-r from-dominus-gold via-dominus-gold-light to-dominus-gold hover:opacity-95 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 shadow-[0_4px_12px_rgba(201,168,76,0.15)] hover:-translate-y-0.5"
          >
            Iniciar Diagnóstico
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 flex items-center justify-center px-4 sm:px-6 py-12 relative z-10">
      <div class="max-w-5xl w-full space-y-16">
        
        <!-- Hero section -->
        <div class="text-center space-y-8 max-w-4xl mx-auto">
          <!-- Small glowing top badge -->
          <div class="inline-flex items-center gap-2 bg-dominus-gold/10 border border-dominus-gold/25 backdrop-blur-md px-4 py-2 rounded-full animate-float shadow-[0_2px_10px_rgba(201,168,76,0.05)]">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-dominus-gold opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-dominus-gold"></span>
            </span>
            <span class="text-dominus-gold text-[9px] font-black tracking-[2.5px] uppercase">
              Diagnóstico de Maturidade Empresarial
            </span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] max-w-4xl mx-auto tracking-tight">
            Sua empresa está crescendo com <span class="bg-clip-text text-transparent bg-gradient-to-r from-dominus-gold via-dominus-gold-light to-dominus-gold">estrutura</span> ou apenas sobrevivendo no <span class="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-amber-400 to-red-400">improviso</span>?
          </h1>

          <div class="max-w-2xl mx-auto space-y-6">
            <p class="text-dominus-muted text-base md:text-lg font-light leading-relaxed">
              Muitas empresas prestadoras de serviço já vendem, já têm clientes e até faturam bem. Mas poucas têm previsibilidade real do negócio.
            </p>
            
            <!-- Blockquote style callout -->
            <div class="relative py-4 px-6 md:px-12 max-w-xl mx-auto">
              <span class="absolute -top-2 left-2 text-6xl text-dominus-gold/10 font-serif leading-none select-none">“</span>
              <p class="text-dominus-gold text-lg md:text-xl font-bold tracking-wide italic leading-normal relative z-10 text-center">
                Você consegue prever e controlar o crescimento da sua empresa?
              </p>
              <span class="absolute -bottom-6 right-2 text-6xl text-dominus-gold/10 font-serif leading-none select-none">”</span>
            </div>
            
            <p class="text-dominus-muted/80 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              Se a resposta não for clara, talvez sua empresa ainda esteja dependendo mais de indicação, esforço e sorte do que de processo, indicadores e estrutura.
            </p>
          </div>
        </div>

        <!-- Box de Contexto -->
        <div class="bg-gradient-to-b from-dominus-surface/90 to-dominus-void/90 border border-dominus-border rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto relative overflow-hidden backdrop-blur-md shadow-2xl">
          <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-dominus-gold/30 to-transparent" />
          <p class="text-white text-sm md:text-base leading-relaxed text-center font-medium">
            O <span class="text-dominus-gold font-bold">Diagnóstico de Maturidade Empresarial DOMINUS</span> foi criado para ajudar você a enxergar, com clareza, em qual estágio sua empresa está hoje. Em poucos minutos, você vai avaliar sua empresa em 4 pilares essenciais:
          </p>
        </div>

        <!-- 4 Pilares -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto w-full">
          <div
            v-for="(pilar, idx) in pilaresComInfo"
            :key="pilar.id"
            class="bg-gradient-to-b from-dominus-surface/90 to-dominus-void/90 border border-dominus-border/80 rounded-2xl p-6 relative overflow-hidden group hover:border-dominus-gold/40 hover:bg-dominus-surface transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_30px_rgba(201,168,76,0.08)] hover:-translate-y-2"
          >
            <!-- Accent border top gradient -->
            <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dominus-gold/20 to-transparent" />
            <div class="absolute inset-0 bg-gradient-to-b from-dominus-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <!-- Watermark large number -->
            <div class="absolute bottom-1 right-2 text-7xl font-display font-black text-dominus-border/10 select-none group-hover:text-dominus-gold/5 transition-colors duration-500 pointer-events-none">
              0{{ idx + 1 }}
            </div>

            <!-- Top Row -->
            <div class="flex items-center justify-between mb-6 relative z-10">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-dominus-gold/15 to-dominus-gold/5 border border-dominus-gold/30 flex items-center justify-center text-2xl group-hover:from-dominus-gold/25 group-hover:to-dominus-gold/10 transition-all duration-300">
                <span class="transform group-hover:scale-110 transition-transform duration-300">{{ pilar.icone }}</span>
              </div>
              <span
                class="text-[8px] font-black tracking-[2px] uppercase px-2.5 py-1 rounded-full border border-dominus-gold/20 bg-dominus-gold/5 text-dominus-gold"
              >
                {{ pilar.codigo }}
              </span>
            </div>
            
            <h3 class="text-white font-bold text-base mb-3 group-hover:text-dominus-gold transition-colors duration-300 relative z-10">
              {{ pilar.titulo }}
            </h3>
            <p class="text-dominus-muted text-[11px] leading-relaxed group-hover:text-white/80 transition-colors duration-300 relative z-10">
              {{ pilar.descricao }}
            </p>
          </div>
        </div>

        <!-- O que você vai receber & Mockup Dashboard -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto w-full items-center pt-10 border-t border-dominus-border/40">
          <!-- Left Column: Value Prop -->
          <div class="lg:col-span-6 space-y-6">
            <span class="text-[8px] font-black tracking-[3px] uppercase text-dominus-gold bg-dominus-gold/10 border border-dominus-gold/25 px-3 py-1.5 rounded-full inline-block">
              O que você vai receber
            </span>
            <h2 class="font-display text-2xl sm:text-3xl font-black text-white leading-tight">
              Uma radiografia completa da maturidade da sua empresa
            </h2>
            <p class="text-dominus-muted text-sm sm:text-base leading-relaxed">
              Ao responder às perguntas de diagnóstico, nosso algoritmo mapeia o seu nível operacional e financeiro, gerando instantaneamente um relatório estratégico exclusivo.
            </p>
            
            <!-- Custom bullet items -->
            <ul class="space-y-4 pt-2">
              <li v-for="(item, i) in itensLeitura" :key="i" class="flex items-start gap-3 group animate-float" :style="{ animationDelay: `${i * 0.2}s` }">
                <div class="w-5 h-5 rounded-full bg-dominus-gold/10 border border-dominus-gold/30 flex items-center justify-center text-[10px] text-dominus-gold mt-0.5 group-hover:bg-dominus-gold group-hover:text-dominus-void transition-all duration-300">
                  ✓
                </div>
                <span class="text-xs sm:text-sm text-dominus-muted group-hover:text-white transition-colors duration-300">
                  {{ item }}
                </span>
              </li>
            </ul>
          </div>

          <!-- Right Column: Interactive Report Mockup -->
          <div class="lg:col-span-6 flex justify-center w-full">
            <div class="relative w-full max-w-md bg-gradient-to-br from-[#121212] to-[#0d0d0d] border border-dominus-border/80 rounded-2xl p-6 shadow-2xl overflow-hidden group">
              <!-- Glow card overlay -->
              <div class="absolute -top-20 -right-20 w-40 h-40 bg-dominus-gold/10 rounded-full blur-[40px] pointer-events-none" />
              
              <!-- Header of the report mockup -->
              <div class="flex items-center justify-between border-b border-dominus-border pb-4 mb-4">
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 rounded-full bg-red-500/80" />
                  <div class="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <div class="w-2 h-2 rounded-full bg-green-500/80" />
                  <span class="text-[9px] font-mono text-dominus-muted/50 ml-1.5">relatorio_dominus_v2.pdf</span>
                </div>
                <!-- Real-time analysis status tag -->
                <div class="flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 px-2 py-0.5 rounded-full">
                  <span class="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <span class="text-[7px] font-black text-green-400 uppercase tracking-widest">Análise Ativa</span>
                </div>
              </div>

              <!-- Dashboard Metrics Grid -->
              <div class="space-y-4">
                <!-- Radial Gauge score -->
                <div class="bg-dominus-void/60 border border-dominus-border p-4 rounded-xl flex items-center justify-between gap-4">
                  <div class="space-y-1">
                    <span class="text-[8px] font-black uppercase tracking-widest text-dominus-muted">ÍNDICE DE MATURIDADE</span>
                    <h4 class="text-sm font-black text-white leading-tight">Maturidade Intermediária</h4>
                    <p class="text-[9px] text-dominus-gold font-medium">Sua empresa sobrevive, mas há gargalos.</p>
                  </div>
                  
                  <!-- Circular progress -->
                  <div class="relative w-14 h-14 flex items-center justify-center rounded-full bg-dominus-surface border border-dominus-border/40 shadow-inner">
                    <svg class="w-12 h-12 transform -rotate-90">
                      <circle cx="24" cy="24" r="18" stroke="rgba(30, 30, 30, 0.6)" stroke-width="3" fill="transparent" />
                      <circle cx="24" cy="24" r="18" stroke="#C9A84C" stroke-width="3" fill="transparent" stroke-dasharray="113" stroke-dashoffset="36" class="transition-all duration-1000" />
                    </svg>
                    <span class="absolute text-[11px] font-black text-white">68%</span>
                  </div>
                </div>

                <!-- Pillar Bar charts -->
                <div class="space-y-2.5">
                  <span class="text-[7px] font-black uppercase tracking-widest text-dominus-muted block">SCORES POR PILAR</span>
                  
                  <!-- Pillar 1 -->
                  <div class="space-y-1">
                    <div class="flex items-center justify-between text-[9px] font-medium">
                      <span class="text-white/80">Comercial & Vendas</span>
                      <span class="text-dominus-gold">75%</span>
                    </div>
                    <div class="h-1 bg-dominus-void rounded-full overflow-hidden">
                      <div class="h-full bg-gradient-to-r from-dominus-gold-dark to-dominus-gold rounded-full" style="width: 75%" />
                    </div>
                  </div>

                  <!-- Pillar 2 -->
                  <div class="space-y-1">
                    <div class="flex items-center justify-between text-[9px] font-medium">
                      <span class="text-white/80">Marketing & Demanda</span>
                      <span class="text-red-400">35%</span>
                    </div>
                    <div class="h-1 bg-dominus-void rounded-full overflow-hidden">
                      <div class="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full" style="width: 35%" />
                    </div>
                  </div>

                  <!-- Pillar 3 -->
                  <div class="space-y-1">
                    <div class="flex items-center justify-between text-[9px] font-medium">
                      <span class="text-white/80">Pessoas & Processos</span>
                      <span class="text-dominus-gold">50%</span>
                    </div>
                    <div class="h-1 bg-dominus-void rounded-full overflow-hidden">
                      <div class="h-full bg-gradient-to-r from-dominus-gold-dark to-dominus-gold rounded-full" style="width: 50%" />
                    </div>
                  </div>

                  <!-- Pillar 4 -->
                  <div class="space-y-1">
                    <div class="flex items-center justify-between text-[9px] font-medium">
                      <span class="text-white/80">Controle & Indicadores</span>
                      <span class="text-dominus-gold">60%</span>
                    </div>
                    <div class="h-1 bg-dominus-void rounded-full overflow-hidden">
                      <div class="h-full bg-gradient-to-r from-dominus-gold-dark to-dominus-gold rounded-full" style="width: 60%" />
                    </div>
                  </div>
                </div>

                <!-- Alert Box Mockup -->
                <div class="bg-red-950/20 border border-red-900/30 p-3 rounded-xl flex gap-2.5 items-start mt-2">
                  <span class="text-red-400 text-xs mt-0.5">⚠️</span>
                  <div class="space-y-0.5">
                    <h5 class="text-[9px] font-bold text-red-400 uppercase tracking-wider">Aviso de Risco</h5>
                    <p class="text-[8px] text-white/70 leading-normal">
                      Sua operação depende 100% de você. Se você parar de trabalhar por 15 dias, a empresa para de faturar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Principal Card -->
        <div class="max-w-4xl mx-auto w-full pt-6 pb-6">
          <div class="relative bg-gradient-to-r from-dominus-surface via-[#171717] to-dominus-surface border border-dominus-gold/20 rounded-3xl p-8 sm:p-12 text-center overflow-hidden shadow-2xl">
            <!-- Glow behind card -->
            <div class="absolute -bottom-20 left-1/2 -translate-x-1/2 w-80 h-32 bg-dominus-gold/10 rounded-full blur-[50px] pointer-events-none" />
            
            <!-- Styled background border line -->
            <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-dominus-gold/40 to-transparent" />
            
            <div class="max-w-2xl mx-auto space-y-6 relative z-10">
              <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
                Descubra os números e gargalos reais da sua empresa hoje
              </h2>
              <p class="text-dominus-muted text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                Clique no botão abaixo para iniciar o Diagnóstico de Maturidade. Ao preencher, nosso sistema processará as respostas e indicará em qual estágio você está.
              </p>
              
              <div class="pt-4 space-y-4">
                <!-- The CTA button with sheen effect -->
                <button
                  @click="abrirModal"
                  class="relative overflow-hidden inline-flex items-center justify-center gap-2 font-black text-xs sm:text-sm tracking-[2.5px] uppercase text-dominus-void bg-gradient-to-r from-dominus-gold via-dominus-gold-light to-dominus-gold px-12 py-5 rounded-xl transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-dominus-gold/25 group/btn"
                >
                  <!-- The shimmer layer -->
                  <div class="sheen-effect" />
                  
                  <span>Iniciar Diagnóstico Grátis</span>
                  <svg class="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                
                <!-- Trust badges -->
                <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-dominus-muted text-[10px] tracking-wider uppercase font-semibold">
                  <span class="flex items-center gap-1.5">
                    <span class="text-dominus-gold">✦</span> 100% Gratuito
                  </span>
                  <span class="flex items-center gap-1.5">
                    <span class="text-dominus-gold">✦</span> Resultado Imediato
                  </span>
                  <span class="flex items-center gap-1.5">
                    <span class="text-dominus-gold">✦</span> Leva 5 minutos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Rodapé Final -->
        <div class="max-w-xl mx-auto pt-8 border-t border-dominus-border/40 text-center">
          <p class="text-dominus-subtle text-xs leading-relaxed italic">
            Este não é um teste genérico. É um pré-diagnóstico estratégico para empresários que já faturam, mas querem sair do improviso e construir uma empresa mais previsível, estruturada e sob controle.
          </p>
        </div>

      </div>
    </main>

    <!-- ═══════════════════════════════════════════════
         MODAL DE PRÉ-QUALIFICAÇÃO (12 ETAPAS)
         Note: mantido idêntico em funcionamento lógico.
    ════════════════════════════════════════════════ -->
    <Transition name="fade">
      <div v-if="modalAberto" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/95 backdrop-blur-md" @click="fecharModal" />

        <!-- Modal Box -->
        <div class="relative bg-gradient-to-b from-dominus-surface to-dominus-void border border-dominus-border/80 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden flex flex-col min-h-[460px] max-h-[90vh] z-10">
          <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-dominus-gold to-transparent" />

          <!-- Top Progress and Navigation -->
          <div class="px-6 pt-5 pb-3 flex items-center justify-between border-b border-dominus-border/60">
            <!-- Voltar Button -->
            <button
              v-if="modalStep > 0"
              @click="anteriorStep"
              class="flex items-center gap-1 text-[10px] font-black tracking-[1.5px] uppercase text-dominus-muted hover:text-dominus-gold transition-colors"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
              </svg>
              Voltar
            </button>
            <div v-else class="w-10" />

            <!-- Progress Label -->
            <span class="text-[9px] font-black tracking-[2px] uppercase text-dominus-gold" v-if="modalStep > 0 && modalStep < 13">
              Pergunta {{ modalStep }} de 12
            </span>
            <span class="text-[9px] font-black tracking-[2px] uppercase text-dominus-gold" v-else>
              Introdução
            </span>

            <!-- Close Button -->
            <button
              @click="fecharModal"
              class="text-dominus-muted hover:text-white transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Progress Bar inside Modal -->
          <div class="h-1 bg-dominus-void w-full overflow-hidden" v-if="modalStep > 0 && modalStep < 13">
            <div
              class="h-full bg-gradient-to-r from-dominus-gold to-dominus-gold-light transition-all duration-300"
              :style="{ width: `${(modalStep / 12) * 100}%` }"
            />
          </div>

          <!-- Modal Body Content -->
          <div class="flex-1 p-6 overflow-y-auto flex flex-col justify-center">
            
            <!-- Step 0: Intro -->
            <div v-if="modalStep === 0" class="space-y-6 text-center">
              <div class="w-12 h-12 rounded-xl bg-dominus-gold/10 border border-dominus-gold/25 flex items-center justify-center mx-auto text-2xl">
                📋
              </div>
              <h2 class="font-display text-2xl font-black text-white leading-snug">
                Antes de iniciar o diagnóstico...
              </h2>
              <p class="text-dominus-muted text-sm leading-relaxed max-w-sm mx-auto">
                Precisamos de algumas informações rápidas sobre você e sua empresa para gerar uma análise precisa e personalizada ao final.
              </p>
              <div class="pt-4">
                <button
                  @click="proximoStep"
                  class="w-full sm:w-auto px-10 py-3.5 rounded-lg text-xs font-black tracking-[2px] uppercase text-dominus-void bg-gradient-to-r from-dominus-gold to-dominus-gold-light hover:opacity-90 transition-all duration-200"
                >
                  Começar
                </button>
              </div>
            </div>

            <!-- Step 1: Nome -->
            <div v-else-if="modalStep === 1" class="space-y-6">
              <div class="space-y-2">
                <label class="text-[9px] font-black tracking-[2.5px] uppercase text-dominus-gold block">
                  Pergunta 1
                </label>
                <h3 class="text-lg font-black text-white">Qual o seu nome?</h3>
              </div>
              <div class="space-y-3">
                <input
                  v-model="dadosForm.nome"
                  type="text"
                  placeholder="Seu nome completo"
                  class="w-full bg-dominus-void border border-dominus-border/80 focus:border-dominus-gold text-white text-sm rounded-xl p-4 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] focus:bg-[#0f0f0f]"
                  @keyup.enter="proximoStep"
                  ref="nomeInputRef"
                />
                <p v-if="erroMsg" class="text-red-400 text-xs flex items-center gap-1.5 animate-shake">
                  <span>⚠</span> {{ erroMsg }}
                </p>
              </div>
              <div class="pt-2">
                <button
                  @click="proximoStep"
                  class="w-full py-3.5 rounded-lg text-xs font-black tracking-[2px] uppercase text-dominus-void bg-gradient-to-r from-dominus-gold to-dominus-gold-light hover:opacity-90 transition-all duration-200"
                >
                  Continuar
                </button>
              </div>
            </div>

            <!-- Step 2: Empresa -->
            <div v-else-if="modalStep === 2" class="space-y-6">
              <div class="space-y-2">
                <label class="text-[9px] font-black tracking-[2.5px] uppercase text-dominus-gold block">
                  Pergunta 2
                </label>
                <h3 class="text-lg font-black text-white">Qual o nome da sua empresa?</h3>
              </div>
              <div class="space-y-3">
                <input
                  v-model="dadosForm.empresa"
                  type="text"
                  placeholder="Nome fantasia ou razão social"
                  class="w-full bg-dominus-void border border-dominus-border/80 focus:border-dominus-gold text-white text-sm rounded-xl p-4 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] focus:bg-[#0f0f0f]"
                  @keyup.enter="proximoStep"
                  ref="empresaInputRef"
                />
                <p v-if="erroMsg" class="text-red-400 text-xs flex items-center gap-1.5 animate-shake">
                  <span>⚠</span> {{ erroMsg }}
                </p>
              </div>
              <div class="pt-2">
                <button
                  @click="proximoStep"
                  class="w-full py-3.5 rounded-lg text-xs font-black tracking-[2px] uppercase text-dominus-void bg-gradient-to-r from-dominus-gold to-dominus-gold-light hover:opacity-90 transition-all duration-200"
                >
                  Continuar
                </button>
              </div>
            </div>

            <!-- Step 3: WhatsApp -->
            <div v-else-if="modalStep === 3" class="space-y-6">
              <div class="space-y-2">
                <label class="text-[9px] font-black tracking-[2.5px] uppercase text-dominus-gold block">
                  Pergunta 3
                </label>
                <h3 class="text-lg font-black text-white">Qual o seu WhatsApp?</h3>
              </div>
              <div class="space-y-3">
                <input
                  :value="dadosForm.whatsapp"
                  @input="onWhatsappInput"
                  type="text"
                  placeholder="(00) 00000-0000"
                  class="w-full bg-dominus-void border border-dominus-border/80 focus:border-dominus-gold text-white text-sm rounded-xl p-4 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] focus:bg-[#0f0f0f]"
                  @keyup.enter="proximoStep"
                  ref="whatsappInputRef"
                />
                <p v-if="erroMsg" class="text-red-400 text-xs flex items-center gap-1.5 animate-shake">
                  <span>⚠</span> {{ erroMsg }}
                </p>
              </div>
              <div class="pt-2">
                <button
                  @click="proximoStep"
                  class="w-full py-3.5 rounded-lg text-xs font-black tracking-[2px] uppercase text-dominus-void bg-gradient-to-r from-dominus-gold to-dominus-gold-light hover:opacity-90 transition-all duration-200"
                >
                  Continuar
                </button>
              </div>
            </div>

            <!-- Step 4: Email -->
            <div v-else-if="modalStep === 4" class="space-y-6">
              <div class="space-y-2">
                <label class="text-[9px] font-black tracking-[2.5px] uppercase text-dominus-gold block">
                  Pergunta 4
                </label>
                <h3 class="text-lg font-black text-white">Qual o seu E-mail?</h3>
              </div>
              <div class="space-y-3">
                <input
                  v-model="dadosForm.email"
                  type="email"
                  placeholder="exemplo@empresa.com.br"
                  class="w-full bg-dominus-void border border-dominus-border/80 focus:border-dominus-gold text-white text-sm rounded-xl p-4 outline-none transition-all duration-300 focus:shadow-[0_0_15px_rgba(201,168,76,0.1)] focus:bg-[#0f0f0f]"
                  @keyup.enter="proximoStep"
                  ref="emailInputRef"
                />
                <p v-if="erroMsg" class="text-red-400 text-xs flex items-center gap-1.5 animate-shake">
                  <span>⚠</span> {{ erroMsg }}
                </p>
              </div>
              <div class="pt-2">
                <button
                  @click="proximoStep"
                  class="w-full py-3.5 rounded-lg text-xs font-black tracking-[2px] uppercase text-dominus-void bg-gradient-to-r from-dominus-gold to-dominus-gold-light hover:opacity-90 transition-all duration-200"
                >
                  Continuar
                </button>
              </div>
            </div>

            <!-- Steps 5 a 12: Perguntas com opções -->
            <div v-else-if="modalStep >= 5 && modalStep <= 12" class="space-y-5">
              <div class="space-y-2">
                <label class="text-[9px] font-black tracking-[2.5px] uppercase text-dominus-gold block">
                  Pergunta {{ modalStep }}
                </label>
                <h3 class="text-base sm:text-lg font-black text-white leading-snug">
                  {{ perguntaAtual.titulo }}
                </h3>
              </div>
              
              <!-- Options Grid/List -->
              <div class="space-y-2.5 max-h-[280px] overflow-y-auto pr-1">
                <button
                  v-for="op in perguntaAtual.opcoes"
                  :key="op"
                  @click="selecionarOpcao(op)"
                  class="w-full text-left bg-dominus-void/60 border border-dominus-border/80 hover:border-dominus-gold/40 p-4 rounded-xl text-xs sm:text-sm text-dominus-muted hover:text-white transition-all duration-300 flex items-center justify-between group hover:bg-[#121212] hover:translate-x-1"
                >
                  <span>{{ op }}</span>
                  <span class="opacity-0 group-hover:opacity-100 text-dominus-gold transition-all duration-300 font-bold ml-2">➔</span>
                </button>
              </div>
            </div>

            <!-- Step 13: Ready Screen -->
            <div v-else-if="modalStep === 13" class="space-y-6 text-center">
              <div class="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto text-xl text-green-400">
                ✓
              </div>
              <h2 class="font-display text-2xl font-black text-white leading-snug">
                Pronto. Agora vamos medir a maturidade da sua empresa.
              </h2>
              <p class="text-dominus-muted text-sm leading-relaxed max-w-sm mx-auto">
                A partir daqui, você vai responder perguntas sobre os 4 pilares que determinam se uma empresa está crescendo com estrutura ou apenas sobrevivendo no improviso.
              </p>
              <div class="pt-4">
                <button
                  @click="proximoStep"
                  class="w-full sm:w-auto px-10 py-3.5 rounded-lg text-xs font-black tracking-[2px] uppercase text-dominus-void bg-gradient-to-r from-dominus-gold to-dominus-gold-light hover:opacity-90 transition-all duration-200 shadow-lg shadow-dominus-gold/25"
                >
                  Começar Diagnóstico
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useDiagnosticoStore } from '~/stores/diagnostico'

definePageMeta({ layout: false })
const store = useDiagnosticoStore()
const router = useRouter()

// Refs para auto-focus nos inputs
const nomeInputRef = ref<HTMLInputElement | null>(null)
const empresaInputRef = ref<HTMLInputElement | null>(null)
const whatsappInputRef = ref<HTMLInputElement | null>(null)
const emailInputRef = ref<HTMLInputElement | null>(null)

// ── Copy e Config do Hero ──────────────────────────────────────────
const pilaresComInfo = [
  {
    id: 'p1',
    codigo: 'Pilar 1',
    icone: '💼',
    titulo: 'Vendas e Comercial',
    descricao: 'Entenda se sua empresa possui um processo comercial claro ou se ainda perde oportunidades por falta de método, follow-up e organização.'
  },
  {
    id: 'p2',
    codigo: 'Pilar 2',
    icone: '📣',
    titulo: 'Marketing e Demanda',
    descricao: 'Descubra se sua empresa possui canais previsíveis de aquisição ou se ainda depende de indicação, sorte e ações pontuais.'
  },
  {
    id: 'p3',
    codigo: 'Pilar 3',
    icone: '👥',
    titulo: 'Pessoas e Processos',
    descricao: 'Veja se sua empresa funciona com processos ou se tudo ainda depende demais do dono e de pessoas específicas.'
  },
  {
    id: 'p4',
    codigo: 'Pilar 4',
    icone: '📊',
    titulo: 'Indicadores e Controle',
    descricao: 'Avalie se você toma decisões com dados reais ou se sua empresa ainda opera no escuro.'
  }
]

const itensLeitura = [
  'Onde sua empresa está forte',
  'Quais gargalos travam seu crescimento',
  'Quais riscos existem no modelo atual',
  'Quais pilares precisam ser priorizados',
  'Qual o nível de maturidade hoje'
]

// ── Estado do Modal e Form ────────────────────────────────────────
const modalAberto = ref(false)
const modalStep = ref(0)
const erroMsg = ref('')

const dadosForm = ref({
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

// ── Lista de perguntas e opções da pré-qualificação ───────────────
const perguntasOpcoes = {
  5: {
    titulo: 'Qual o segmento da sua empresa?',
    campo: 'segmento' as const,
    opcoes: [
      'Tecnologia / TI / Software',
      'Consultoria / Assessoria',
      'Agência / Marketing / Design',
      'Advocacia / Serviços Jurídicos',
      'Engenharia / Arquitetura / Obras',
      'Saúde / Medicina / Clínicas',
      'Educação / Treinamentos',
      'Serviços Financeiros / Seguros',
      'Outro Segmento de Serviços'
    ]
  },
  6: {
    titulo: 'Qual é o faturamento médio mensal da sua empresa hoje?',
    campo: 'faturamento' as const,
    opcoes: [
      'Até R$10 mil',
      'De R$10 mil a R$30 mil',
      'De R$30 mil a R$50 mil',
      'De R$50 mil a R$100 mil',
      'De R$100 mil a R$300 mil',
      'Acima de R$300 mil'
    ]
  },
  7: {
    titulo: 'Quantas pessoas trabalham hoje na empresa?',
    campo: 'colaboradores' as const,
    opcoes: [
      'Apenas eu',
      '2 a 3 pessoas',
      '4 a 10 pessoas',
      '11 a 30 pessoas',
      'Mais de 30 pessoas'
    ]
  },
  8: {
    titulo: 'Hoje, qual frase mais representa sua empresa?',
    campo: 'frase' as const,
    opcoes: [
      'Ainda estou validando meu serviço',
      'Já tenho clientes, mas ainda vivo no improviso',
      'Tenho faturamento, mas não tenho previsibilidade',
      'Tenho equipe, mas tudo ainda depende muito de mim',
      'Tenho estrutura, mas quero escalar com mais controle'
    ]
  },
  9: {
    titulo: 'Hoje, de onde vem a maior parte dos seus clientes?',
    campo: 'canal' as const,
    opcoes: [
      'Indicação',
      'Redes sociais',
      'Tráfego pago',
      'Prospecção ativa',
      'Parcerias',
      'Base antiga de clientes/leads',
      'Não sei dizer com clareza'
    ]
  },
  10: {
    titulo: 'Qual é sua maior dor hoje?',
    campo: 'dor' as const,
    opcoes: [
      'Gerar mais clientes',
      'Converter melhor os leads',
      'Organizar o comercial',
      'Parar de depender de indicação',
      'Ter mais controle dos números',
      'Reduzir dependência do dono',
      'Organizar equipe e processos',
      'Crescer sem aumentar o caos'
    ]
  },
  11: {
    titulo: 'Você já tentou resolver esse problema antes?',
    campo: 'tentou' as const,
    opcoes: [
      'Sim, com tráfego pago',
      'Sim, com agência',
      'Sim, com consultoria ou mentoria',
      'Sim, internamente com minha equipe',
      'Ainda não tentei de forma estruturada'
    ]
  },
  12: {
    titulo: 'Se você enxergasse um caminho claro para estruturar sua empresa, estaria disposto a investir nisso?',
    campo: 'investir' as const,
    opcoes: [
      'Sim, imediatamente',
      'Sim, dependendo da proposta',
      'Talvez, preciso entender melhor',
      'Não neste momento'
    ]
  }
}

// ── Computed para a pergunta de opções corrente ────────────────────
const perguntaAtual = computed(() => {
  const step = modalStep.value as keyof typeof perguntasOpcoes
  return perguntasOpcoes[step] || { titulo: '', campo: 'segmento', opcoes: [] }
})

// ── Validações reativas ──────────────────────────────────────────
const nomeValido = computed(() => dadosForm.value.nome.trim().length >= 2)
const empresaValido = computed(() => dadosForm.value.empresa.trim().length >= 2)
const emailValido = computed(() => {
  const email = dadosForm.value.email.trim()
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
})
const whatsappValido = computed(() => {
  const digits = dadosForm.value.whatsapp.replace(/\D/g, '')
  return digits.length === 10 || digits.length === 11
})

// ── Funções de fluxo do Modal ──────────────────────────────────────
function abrirModal() {
  modalAberto.value = true
  modalStep.value = 0
  erroMsg.value = ''
  // Limpar form
  dadosForm.value = {
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

function fecharModal() {
  modalAberto.value = false
  modalStep.value = 0
  erroMsg.value = ''
}

function aplicarMascaraWhatsapp(val: string) {
  const digitos = val.replace(/\D/g, '').substring(0, 11)
  if (digitos.length <= 2) return digitos
  if (digitos.length <= 6) return `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`
  if (digitos.length <= 10) return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 6)}-${digitos.slice(6)}`
  return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`
}

function onWhatsappInput(e: Event) {
  const input = e.target as HTMLInputElement
  const formatted = aplicarMascaraWhatsapp(input.value)
  dadosForm.value.whatsapp = formatted
  input.value = formatted
}

function selecionarOpcao(op: string) {
  const campo = perguntaAtual.value.campo
  dadosForm.value[campo] = op
  proximoStep()
}

function proximoStep() {
  erroMsg.value = ''
  
  if (modalStep.value === 1) {
    if (!nomeValido.value) {
      erroMsg.value = 'Por favor, digite seu nome completo.'
      return
    }
  } else if (modalStep.value === 2) {
    if (!empresaValido.value) {
      erroMsg.value = 'Por favor, digite o nome da sua empresa.'
      return
    }
  } else if (modalStep.value === 3) {
    if (!whatsappValido.value) {
      erroMsg.value = 'Por favor, insira um WhatsApp válido (com DDD).'
      return
    }
  } else if (modalStep.value === 4) {
    if (!emailValido.value) {
      erroMsg.value = 'Por favor, insira um e-mail válido.'
      return
    }
  }

  if (modalStep.value < 13) {
    modalStep.value++
    // Auto-focus no próximo input
    nextTick(() => {
      if (modalStep.value === 1) nomeInputRef.value?.focus()
      else if (modalStep.value === 2) empresaInputRef.value?.focus()
      else if (modalStep.value === 3) whatsappInputRef.value?.focus()
      else if (modalStep.value === 4) emailInputRef.value?.focus()
    })
  } else {
    finalizarPreQualificacao()
  }
}

function anteriorStep() {
  erroMsg.value = ''
  if (modalStep.value > 0) {
    modalStep.value--
    nextTick(() => {
      if (modalStep.value === 1) nomeInputRef.value?.focus()
      else if (modalStep.value === 2) empresaInputRef.value?.focus()
      else if (modalStep.value === 3) whatsappInputRef.value?.focus()
      else if (modalStep.value === 4) emailInputRef.value?.focus()
    })
  }
}

function finalizarPreQualificacao() {
  store.resetar()
  store.salvarPreQualificacao(dadosForm.value)
  fecharModal()
  router.push('/diagnostico')
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to       { opacity: 0; }

@keyframes pulse-subtle {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}
.animate-pulse-subtle {
  animation: pulse-subtle 3s infinite ease-in-out;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; filter: drop-shadow(0 0 15px rgba(201, 168, 76, 0.2)); }
}
.animate-pulse-slow {
  animation: pulse-slow 3s infinite ease-in-out;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
.animate-float {
  animation: float 5s infinite ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}
.animate-shake {
  animation: shake 0.2s ease-in-out 2;
}

/* Custom CSS Sheen Shimmer effect */
.sheen-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100
  );
  transform: skewX(-25deg);
}

.group\/btn:hover .sheen-effect,
.group:hover .sheen-effect {
  animation: sheen 1.2s ease-in-out;
}

@keyframes sheen {
  0% {
    left: -100%;
  }
  100% {
    left: 200%;
  }
}
</style>
