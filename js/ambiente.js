// ambiente.js - identifica se o formulário está rodando em ambiente de teste

// Testes: arquivo aberto direto, localhost e o deploy de testes no Netlify.
// Em teste, o bloqueio por data é ignorado e a inscrição não é enviada ao backend.
const AMBIENTE_TESTE =
  location.protocol === "file:" ||
  ["localhost", "127.0.0.1"].includes(location.hostname) ||
  location.hostname.endsWith(".netlify.app");

if (AMBIENTE_TESTE) {
  document.addEventListener("DOMContentLoaded", () => {
    const faixa = document.createElement("div");
    faixa.id = "faixa-ambiente-teste";
    faixa.style.cssText =
      "background:#fff3cd;border:2px solid #ffc107;color:#856404;border-radius:12px;padding:12px 20px;margin:0 auto 20px;max-width:800px;text-align:center;font-weight:bold;";
    faixa.textContent =
      "AMBIENTE DE TESTE — as inscrições não são enviadas para a planilha";
    document.body.prepend(faixa);
  });
}
