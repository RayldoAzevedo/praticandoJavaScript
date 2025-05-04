const valores = [7.1, 8.4, 9.0, 6.5];

console.log(`valor1: ${valores[1]}, valor4: ${valores[3]}`);

valores[4] = 10;
valores[6] = 5.6;
valores[5] = "\n";
console.log("tamanho do array", valores.length);
console.log(valores);
valores[7] = valores[1] + valores[6];
console.log("tamanho do array", valores.length);
console.log("valores:", valores);

//mostando o tipo do array
console.log("Tipo do array", typeof valores);
valores[5] = valores[7] - valores[3];
console.log("Tipo do array", typeof valores);
