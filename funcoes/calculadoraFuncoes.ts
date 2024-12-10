import readlinesync = require("readline-sync");
import { colors } from "./../util/Colors";

let numero1: number;
let numero2: number;
let opcao: number;

do {
  menu();
  opcao = readlinesync.questionInt();
  if (opcao === 0) {
    process.exit(0);
  }

  switch (opcao) {
    case 1:
      [numero1, numero2] = obterNumeros();
      console.log(`${numero1} + ${numero2} = ${somar(numero1, numero2)}`);
      break;
    case 2:
      [numero1, numero2] = obterNumeros();
      console.log(`${numero1} - ${numero2} = ${subtrair(numero1, numero2)}`);

      break;
    case 3:
      [numero1, numero2] = obterNumeros();
      console.log(`${numero1} * ${numero2} = ${multiplicar(numero1, numero2)}`);
      break;
    case 4:
      [numero1, numero2] = obterNumeros();

      let resultado = dividir(numero1, numero2);
      if (resultado != null)
        console.log(`${numero1} / ${numero2} = ${resultado}`);
      else console.log("Não existe divisao por zero!");
      break;
    default:
      console.log("Opcao Invalida");
  }
} while (true);

function menu() {
  console.log(
    colors.bg.black,
    colors.fg.green,
    "*********************************"
  );
  console.log("          CALCULADORA       ");
  console.log("*********************************");
  console.log("             1 - somar");
  console.log("             2 - subtrair");
  console.log("             3 - multiplicacao");
  console.log("             4 - divisao");
  console.log("             0 - sair");

  console.log("*********************************");
  console.log("Digite a opcao desejada: ", colors.reset);
}

function obterNumeros(): [number, number] {
  const number1 = readlinesync.questionFloat("Digite o primeiro numero:");
  const number2 = readlinesync.questionFloat("Digite o segundo numero:");
  return [number1, number2];
}

function somar(numero1: number, numero2: number): number {
  return numero1 + numero2;
}

function subtrair(numero1: number, numero2: number): number {
  return numero1 - numero2;
}

function multiplicar(numero1: number, numero2: number): number {
  return numero1 * numero2;
}

function dividir(numero1: number, numero2: number): number | null {
  let divisao = numero1 / numero2;
  return divisao !== Infinity ? divisao : null;
}
