import readlinesync = require("readline-sync");

const cores: Array<String> = new Array<string>();

for (let i = 0; i < 5; i++) {
  cores.push(readlinesync.question("Digite uma cor: "));
}

console.table(cores)
console.table(cores.sort())

