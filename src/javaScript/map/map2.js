const carrinho = [
  '{"nome": "Borracha", "preco": 3.45 }',
  '{"nome": "Caderno", "preco": 13.95 }',
  '{"nome": "Lapis", "preco": 41.22 }',
  '{"nome": "Caneta", "preco": 7.50 }',
];
//Retornar array apenas com o preço
const paraObjeto = (json) => JSON.parse(json);
const apenasPreco = (valor) => valor.preco;
const precoString = function (e) {
  return `R$ ${parseFloat(e)}`;
};

const resultado = carrinho.map(paraObjeto).map(apenasPreco).map(precoString);
console.log(resultado.replace(\w, "k"));
