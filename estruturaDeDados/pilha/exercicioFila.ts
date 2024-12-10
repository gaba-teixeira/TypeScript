import { Queue } from "./Queue";
import readlinesync = require("readline-sync");

const fila = new Queue<string>();
while(true){
let optionMenu: number = readlinesync.questionInt(
  "\nMenu: \n 1- Adicionar Cliente \n 2- Listar todos cliente \n 3-Retirar cliente da fila \n 0- sair \n ******************************************** \n Entre com a opcao desejada: "
);

switch (optionMenu) {
  case 1:
    let nome = readlinesync.question("Digite o nome: ");
    fila.enqueue(nome);
    console.log("Fila");
    fila.printQueue();
    console.log("Cliente adionado com sucesso!\n");
    break;
  case 2:
    console.log("Lista de Clientes na Fila: ");
    fila.printQueue();

    break;
  case 3:
    if (fila.isEmpty()) {
      console.log("A Fila está vazia!");
    } else {
      fila.dequeue();
      console.log("Fila");
      fila.printQueue();
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