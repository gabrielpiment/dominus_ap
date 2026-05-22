import { ref } from 'vue'
import { useSupabaseClient } from '#imports'
import { useDiagnosticoStore } from '~/stores/diagnostico'
import type { ResultadoGeral } from '~/shared/types/Diagnostico'

export function useDiagnosticoSave() {
  const supabase = useSupabaseClient<any>()
  const store = useDiagnosticoStore()
  const salvando = ref(false)
  const salvo = ref(false)
  const erro = ref<string | null>(null)

  async function salvar(
    resultado: ResultadoGeral,
    respostas: Record<string, number>,
  ) {
    if (salvo.value || salvando.value) return
    salvando.value = true
    erro.value = null

    try {
      const pre = store.preQualificacao

      const { error } = await supabase.from('diagnosticos').insert({
        nota_geral: resultado.notaGeral,
        classificacao: resultado.classificacao,
        nota_p1: resultado.resultadosPilares[0]?.nota ?? 0,
        nota_p2: resultado.resultadosPilares[1]?.nota ?? 0,
        nota_p3: resultado.resultadosPilares[2]?.nota ?? 0,
        nota_p4: resultado.resultadosPilares[3]?.nota ?? 0,
        qualificacao_lead: resultado.qualificacaoLead,
        respostas,
        nome: pre.nome || null,
        empresa: pre.empresa || null,
        whatsapp: pre.whatsapp || null,
        email: pre.email || null,
        segmento: pre.segmento || null,
        faturamento: pre.faturamento || null,
        colaboradores: pre.colaboradores || null,
        frase_representativa: pre.frase || null,
        canal_aquisicao: pre.canal || null,
        maior_dor: pre.dor || null,
        tentou_resolver: pre.tentou || null,
        disposicao_investir: pre.investir || null,
      })

      if (error) {
        erro.value = error.message
      } else {
        salvo.value = true
      }
    } catch (e: unknown) {
      erro.value =
        e instanceof Error ? e.message : 'Erro ao salvar diagnóstico'
    } finally {
      salvando.value = false
    }
  }

  return { salvar, salvando, salvo, erro }
}
