import { Stack } from "./Stack";
import readlinesync = require("readline-sync");

const pilha = new Stack<string>();

while (true) {
  let optionMenu: number = readlinesync.questionInt(
    "\nMenu: \n 1- Adicionar Livro \n 2- Listar todos os livros \n 3-Retirar Livro da pilha \n 0- sair \n ******************************************** \n Entre com a opcao desejada: "
  );

  switch (optionMenu) {
    case 1:
      let novoLivro = readlinesync.question("Digite o nome do livro: ");
      pilha.push(novoLivro);
      console.log("Pilha:");
      pilha.printStack();
      console.log("Livro adicionado!");

      break;
    case 2:
      console.log("Lista de Livros na Pilha:");
      pilha.printStack();

      break;
    case 3:
      if (pilha.isEmpty()) {
        console.log("A Pilha está vazia!");
      } else {
        pilha.pop();
        console.log("Pilha:");
        pilha.printStack();
        console.log("Livro retirado com sucesso!");
      }
      break;
    case 0:
      console.log("Programa Finalizado");
      process.exit(0);

    default:
      console.log("Opção Inválida!");
      break;
  }
}
