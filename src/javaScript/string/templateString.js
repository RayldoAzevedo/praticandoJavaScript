const nome = "Rebeca";
const concatenacao = "Olá " + nome + "!" + " Tudo bem?";
console.log(concatenacao);

//usando template string ( `` ) as crases
const template = `
Olá ${nome}!
Tudo bem?
`;
console.log(template);
//usando template string para chamar uma funcão
const up = (texto) => texto.toUpperCase();
console.log(`Mensagem: ${up(template)}`);
