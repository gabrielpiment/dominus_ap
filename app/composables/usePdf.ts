export function usePdf() {
  function gerarPdf() {
    if (!import.meta.client) return
    window.print()
  }

  return { gerarPdf }
}
