import qr from "qrcode-terminal";
import chalk from "chalk";

async function generateQRCode(link, type) {
  const isCompact = type === "2";

  qr.generate(link, { small: isCompact }, (qrcode) => {
    console.log(chalk.green("QR Code gerado com sucesso:"));
    console.log(qrcode);
  });
}

export default generateQRCode;