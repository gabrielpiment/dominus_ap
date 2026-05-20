export function usePdf() {
  async function gerarPdf(elementId: string, nomeArquivo = 'diagnostico-empresarial') {
    if (!import.meta.client) return

    const html2pdf = (await import('html2pdf.js')).default
    const elemento = document.getElementById(elementId)
    if (!elemento) return

    const opcoes = {
      margin: [12, 12, 12, 12] as [number, number, number, number],
      filename: `${nomeArquivo}.pdf`,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        letterRendering: true,
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    }

    await html2pdf().set(opcoes).from(elemento).save()
  }

  return { gerarPdf }
}
