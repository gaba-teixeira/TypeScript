import readlinesync = require("readline-sync");

const numbers: Set<number> = new Set<number>();

numbers.add(2);
//numbers.add(5);
numbers.add(1);
numbers.add(3);
numbers.add(4);
numbers.add(9);
numbers.add(7);
numbers.add(8);
numbers.add(10);
numbers.add(6);

let numero: number = readlinesync.questionInt('Qual numero deseja encontrar? ')

let numeroCheck = numbers.has(numero)

numeroCheck ? console.log(`O número ${numero} foi encontrado!`) : console.log(`O número ${numero} não foi encontrado!`)