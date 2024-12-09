import readlinesync = require("readline-sync");

//Criamos a coleção Array vazia
const numeros: Array<number> = new Array<number>();
// Adcionamos os valores na Coleção
numeros.push(7);
numeros.push(2);
numeros.push(3);
numeros.push(4);
numeros.push(7);

//Percorremos a coleção e imprimimos elas na tela
for(let i of numeros){
    console.log(i)
}

//Adcionamos um numero utilizando entrada por teclado
numeros.push(readlinesync.questionFloat('Digite um numero: '))

//Adcionamos numero direto no metodo no inicio do Array
numeros.unshift(2, 3, 4, 5)

console.table(numeros)

// Verificamos se o numero existe no array
console.log('O numero 2 existe no array?', numeros.includes(2))
//Consultamos o indice do numero dentro do Array
console.log("O numero 2 existe em que posição?", numeros.indexOf(2));

//Apagamos um numero da Coleção
numeros.splice(numeros.indexOf(2), 1);
console.table(numeros);
