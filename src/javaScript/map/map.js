let numeros = [1, 2, 3, 4, 5];
let multiplo = 2;

let resultado = numeros.map(function (e) {
  return e * multiplo;
});

const somar10 = (e) => e + 10;
const triplo = (e) => e * 3;
//ADICIONAR CASAS DECIMAIS E SUBSTITUIR PONTO POR VIRGULA
const monetario = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

console.log("Elementos", numeros);
console.log(`Elementos x ${multiplo} =`, resultado);

resultado = numeros.map(somar10).map(triplo).map(monetario);
console.log(`Valor final=`, resultado);
