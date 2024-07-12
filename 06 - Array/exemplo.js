// Inicializa um vetor sem nenhum dado
let cores = [];

// Inicializa um vetor com dados
// let cores = ["Roxo", "Preto"];

// Explicação dos Métodos Utilizados
// push: Adiciona elementos ao final do array.
// length: Retorna a quantidade de elementos no array.
// pop: Remove o último elemento do array.
// shift: Remove o primeiro elemento do array.
// unshift: Adiciona elementos ao início do array.
// indexOf: Retorna o índice de um elemento no array.
// splice: Remove ou adiciona elementos em um índice específico.
// includes: Verifica se um elemento está presente no array.
// forEach: Itera sobre os elementos do array.
// map: Cria um novo array com os resultados de uma função aplicada a cada elemento.
// filter: Cria um novo array com todos os elementos que passam em um teste.
// reduce: Reduz o array a um único valor, aplicando uma função a cada elemento (da esquerda para a direita).
// sort: Ordena os elementos do array.
// reverse: Reverte a ordem dos elementos no array.

// Adicionar elementos ao vetor
cores.push("Preto");
cores.push("Vermelho");
cores.push("Branco");
cores.push("Laranja");
cores.push("Azul");

// Obter a quantidade de elementos do vetor
let tamanhoVetor = cores.length;

console.log("Cores: ", cores);
console.log("Quantidade de cores: ", tamanhoVetor);

// Acessar um elemento específico
let primeiraCor = cores[0]; // Preto
console.log("Primeira cor: ", primeiraCor);

// Remover o último elemento do vetor
let ultimaCorRemovida = cores.pop();
console.log("Cor removida: ", ultimaCorRemovida);
console.log("Cores após remoção: ", cores);

// Remover o primeiro elemento do vetor
let primeiraCorRemovida = cores.shift();
console.log("Primeira cor removida: ", primeiraCorRemovida);
console.log("Cores após remoção: ", cores);

// Adicionar um elemento no início do vetor
cores.unshift("Rosa");
console.log("Cores após adicionar 'Rosa' no início: ", cores);

// Encontrar o índice de um elemento
let indiceBranco = cores.indexOf("Branco");
console.log("Índice da cor 'Branco': ", indiceBranco);

// Remover um elemento pelo índice
if (indiceBranco !== -1) {
    cores.splice(indiceBranco, 1);
}
console.log("Cores após remover 'Branco': ", cores);

// Verificar se um elemento está no vetor
let temVermelho = cores.includes("Vermelho");
console.log("O vetor contém 'Vermelho'? ", temVermelho);

// Iterar sobre os elementos do vetor
cores.forEach(function(cor, index) {
    console.log(`Cor ${index + 1}: ${cor}`);
});

// Criar uma nova array a partir de uma transformação
let coresMaiusculas = cores.map(function(cor) {
    return cor.toUpperCase();
});
console.log("Cores em maiúsculas: ", coresMaiusculas);

// Filtrar elementos do vetor
let coresComO = cores.filter(function(cor) {
    return cor.includes('o');
});
console.log("Cores que contêm a letra 'o': ", coresComO);

// Reduzir o vetor a um valor único
let todasAsCores = cores.reduce(function(acumulador, cor) {
    return acumulador + ", " + cor;
});
console.log("Todas as cores em uma string: ", todasAsCores);

// Ordenar o vetor
cores.sort();
console.log("Cores ordenadas: ", cores);

// Reverter a ordem do vetor
cores.reverse();
console.log("Cores em ordem reversa: ", cores);