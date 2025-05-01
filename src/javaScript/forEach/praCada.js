
Array.prototype.praCada = function(callback){
    for(let i=0; i<this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Ana', 'Maria', 'Pedro', 'Jonas']

console.log('APENAS PARAMETRO NOME')
aprovados.praCada(function (nome){
    console.log('Nome: ', nome)
})

console.log('APENAS PARAMETRO INDICE')
aprovados.praCada( (nome, indice)=>{
    console.log(`Indice: ${indice}`)
})

console.log('\nMOSTRAR TODO ARRAY PARA CADA ELEMENTO')
aprovados.praCada( (a, b, corda)=>{
    console.log(`${b+1}-`, corda)
})

console.log('\nOS 3 PARAMETROS')
aprovados.praCada( (nome, posicao, corda)=>{
    console.log('posicao: ', posicao, ' - ', nome, ' ', corda)
})