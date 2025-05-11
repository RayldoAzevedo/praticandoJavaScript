const produtos = [
  { nome: "notebook", preco: 5580.0 },
  { nome: "celular", preco: 1500.0 },
  { nome: "monitor", preco: 1200.0 },
  { nome: "mouse", preco: 50.0 },
  { nome: "teclado", preco: 100.0 },
  { nome: "impressora", preco: 800.0 },
  { nome: "mesa", preco: 300.0 },
  { nome: "cadeira", preco: 400.0 },
  { nome: "webcam", preco: 200.0 },
];

console.log("lista de produtos:", produtos);
console.log("\nprodutos com preço maior que 1000:");
const produtosMaiorQueMil = produtos.filter(function (prod) {
  return prod.preco > 1000;
});
console.log(produtosMaiorQueMil);

console.log("\nprodutos com preço menor que 1000:");
const produtosMenorQueMil = produtos.filter(function (prod) {
  return prod.preco < 1000;
});
console.log(produtosMenorQueMil);
