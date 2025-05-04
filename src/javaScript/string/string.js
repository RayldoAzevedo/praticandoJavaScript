const escola = "Programação";
const alunos = ["Ana", "Flavia", "Marcia", "Juliana"];
const grupoDeAlunos = "Ana, Pedro, Cleber, Jorge, Patricia";

//busca o caractere na posição informada dentro do parametro
console.log(escola.charAt(4));
//pega o valor do caracter na tabela de simbolos (pode ser encontrado a tabela aqui) ->>>>  https://symbl.cc/
console.log(escola.charCodeAt(2));
// pega o caracter no index informado
console.log(escola.indexOf(4)); // retorno será -1, porque não existe o caractere "4" na string
console.log(escola.indexOf("g")); // retorno sera 3, porque a letra "g" se encontra na posição 3 da string
// Adicionar outros valores a string
console.log("Escola de ".concat(escola).concat(" de Goiás."));
//quebra a string e transforma em um array
const arrayAlunos = grupoDeAlunos.split(",");
console.log(arrayAlunos);
//pega o array criado a partir da string "grupo de alunos" e adicia os itens do array "alunos"
console.log(arrayAlunos.concat(alunos));
//troca um determinado caractere da string por outro informado
console.log(grupoDeAlunos.replace("a", "@")); // troca somente o primeiro caractere encontrado
//glag global (  /a/g, " ")
console.log(
  rgrupoDeAlunos.replace(/a/g, "@").replace(/o/g, "0").replace(/e/g, "&") //multiplos replace e substituição global do caractere
);
