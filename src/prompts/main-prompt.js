import chalk from "chalk";

const mainPrompt = [
  {
    name: "choice",
    description: chalk.green("Escolha uma opção: \n1 - Gerar QR Code\n2 - Sair"),
    pattern: /^[1-2]$/,
    message: chalk.red("Escolha apenas entre 1 e 2."),
    required: true,
  },
];

export default mainPrompt;