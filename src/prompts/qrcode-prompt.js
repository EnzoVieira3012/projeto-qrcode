import chalk from "chalk";

const qrCodePrompt = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QR Code: "),
    required: true,
  },
  {
    name: "type",
    description: chalk.yellow(
      "Escolha o tipo de QR Code: \n1 - Normal\n2 - Compacto"
    ),
    pattern: /^[1-2]$/,
    message: chalk.red("Escolha apenas entre 1 e 2."),
    required: true,
  },
];

export default qrCodePrompt;