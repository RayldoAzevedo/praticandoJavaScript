const fabricantes = ['Audi', 'Volkswagen', 'Ford', 'Chevrolet']

function imprimir(nome, indice) {
    console.log(`fabricante ${indice + 1} - ${nome}`)
}

fabricantes.forEach(imprimir)

console.log(`\n`)
fabricantes.forEach(fabrica => {
    if( fabrica.includes('Audi') ){
        console.log('Contém a fabricante ', fabrica, '\n')
    }
    console.log(`Fabricante ${fabrica}`)
})
