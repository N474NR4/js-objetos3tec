const livros = require('./JSON/listaLivros.json').livrosBiblioteca;

function insertionSort(array) {
    if (!array || !Array.isArray(array)) return [];

    for (let i = 1; i < array.length; i++) {
        let currentValue = array[i];
        let j = i - 1;
        let precoAtual = currentValue ? currentValue.preco : 0;
        while (j >= 0 && (array[j] ? array[j].preco : 0) > precoAtual) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = currentValue;
    }
    return array;
}

console.log(insertionSort(livros));
