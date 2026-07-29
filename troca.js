function troca(lista, analize){
    let itemAnalise = lista[analise];
    let itemAnterior = lista[analise -1];

    lista[analize] = itemAnterior
    lista[analize - 1] = itemAnalise
}
module.exports = troca;