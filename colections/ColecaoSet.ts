const frutas: Set<string> = new Set<string>();

frutas.add("Banana");
frutas.add("Morango");
frutas.add("Caqui");
frutas.add("Laranja");
frutas.add("Banana");

console.table(frutas);
console.log("A fruta Abacaxi existe no set?", frutas.has("Abacaxi"));

frutas.delete("Caqui");
console.table(frutas);

let setOrdenado: Array<string> = Array.from(frutas).sort();
console.table(setOrdenado);
