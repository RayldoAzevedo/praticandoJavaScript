const notas = [7.0, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

let notasBaixas = []
let notasVermelhas = []
let notasAltas = []

//******************************************************************************** */
//**************************** SEM FUNÇÃO CALLBACK *******************************
//******************************************************************************** */

for (let i in notas) {
    if(notas[i]<7) notasBaixas.push(notas[i])
}
console.log(notas.length, ' notas')
console.log('notas baixas ', notasBaixas.length, ' -', notasBaixas)


//******************************************************************************** */
//************************* USANDO FUNCAO CALLBACK  ********************************
//******************************************************************************** */

notasVermelhas = notas.filter( function(x){
    return x< 7
})
console.log(`Notas vermelhas ${notasVermelhas.length} -`, notasVermelhas)

notasAltas = notas.filter( dados => dados >= 7)
console.log(`Notas boas ${notasAltas.length} -`, notasAltas)

