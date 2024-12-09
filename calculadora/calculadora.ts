import readlinesync = require('readline-sync')

let numero1: number;
let numero2: number;

numero1 = readlinesync.questionFloat('Digite o primeiro numero:')
numero2 = readlinesync.questionFloat("Digite o segundo numero:");

console.log(`A soma dos numeros é ${numero1 + numero2}`)
console.log(`A subtracao dos numeros é ${numero1 - numero2}`);
console.log(`A mutiplicacao dos numeros é ${numero1 * numero2}`);
console.log(`A divisao dos numeros é ${numero1 / numero2}`);
