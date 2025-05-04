const escola = "Programação";
const notas = [4.7, 5.9, 7.8, 9.2, 8.4];
const alunos = ["Ana", "Flavia", "Marcia", "Juliana"];
const grupoDeAlunos = "Ana, Pedro, Cleber, Jorge, Patricia";

console.log("notas= ", notas);
//pegando um valor numérico e convertendo em string
console.log(
  "convertendo item em String: Nota = ",
  notas[1].toString().replace(".", ",")
);
console.log(
  "convertendo array em String: Notas = ",
  notas.toString().replace(/4/g, "5")
);
console.log("convertendo array em String 2: ", String(notas), "\n");

//busca o caractere na posição informada dentro do parametro
console.log(escola.charAt(4));
//pega o valor do caracter na tabela de simbolos (pode ser encontrado a tabela aqui) ->>>>  https://symbl.cc/
console.log(escola.charCodeAt(2));
// pega o caracter no index informado
console.log(escola.indexOf(4)); // retorno será -1, porque não existe o caractere "4" na string
console.log(escola.indexOf("g"), "\n"); // retorno sera 3, porque a letra "g" se encontra na posição 3 da string
// Adicionar outros valores a string
console.log("Escola de ".concat(escola).concat(" de Goiás."));
//quebra a string e transforma em um array
const arrayAlunos = grupoDeAlunos.split(",");
console.log("Alunos=", arrayAlunos);
//retira da string atual caracteres
console.log("string: ", escola);
console.log("substring s/ index: ", escola.substring(4)); // transforma a partir do indice informado\
console.log("substring c/ index: ", escola.substring(0, 7)); // pega do index 0 ao 3 (não inclui o 3)\
console.log("substring c/ index: ", escola.substring(4).substring(0, 4), "\n"); // pega do index 0 ao 4 saida = "rama"\
//pega o array criado a partir da string "grupo de alunos" e adicia os itens do array "alunos"
console.log("concatenação=", arrayAlunos.concat(alunos));
//troca um determinado caractere da string por outro informado
console.log(grupoDeAlunos.replace("a", "@")); // troca somente o primeiro caractere encontrado
//glag global (  /a/g, " ")
console.log(
  grupoDeAlunos.replace(/a/g, "@").replace(/o/g, "0").replace(/e/g, "&") //multiplos replace e substituição global do caractere
);
