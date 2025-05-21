import prompt from "prompt";
import mainPrompt from "./prompts/main-prompt.js";
import qrCodePrompt from "./prompts/qrcode-prompt.js";
import generateQRCode from "./services/qr-code.js";

async function main() {
  console.log("Bem-vindo ao Gerador de QR Code para e-commerce!");

  // Inicia o prompt
  prompt.start();

  // Menu principal
  prompt.get(mainPrompt, async (err, result) => {
    if (err) {
      console.log("Erro ao capturar entrada.");
      return;
    }

    const choice = result.choice;

    // Opção: Gerar QR Code
    if (choice === "1") {
      prompt.get(qrCodePrompt, async (err, result) => {
        if (err) {
          console.log("Erro ao capturar entrada.");
          return;
        }

        const { link, type } = result;
        await generateQRCode(link, type); // Gera o QR Code
      });
    }

    // Opção: Sair
    if (choice === "2") {
      console.log("Saindo do sistema...");
    }
  });
}

main();