// Inicializa um array de objetos com dados
let pessoas = [
    { nome: "João", idade: 30, cidade: "São Paulo" },
    { nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
    { nome: "Pedro", idade: 35, cidade: "Belo Horizonte" }
];

// Adicionar um objeto ao array
pessoas.push({ nome: "Ana", idade: 28, cidade: "Curitiba" });

console.log("Pessoas: ", pessoas);

// Obter a quantidade de elementos do array
let tamanhoArray = pessoas.length;
console.log("Quantidade de pessoas: ", tamanhoArray);

// Acessar um objeto específico
let primeiraPessoa = pessoas[0];
console.log("Primeira pessoa: ", primeiraPessoa);

// Iterar sobre os objetos do array
pessoas.forEach(function (pessoa, index) {
    console.log(`Pessoa ${index + 1}: Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
});

// Encontrar um objeto pelo valor de uma propriedade
let pessoaEncontrada = pessoas.find(function (pessoa) {
    return pessoa.nome === "Maria";
});
console.log("Pessoa encontrada: ", pessoaEncontrada);

// Filtrar objetos com base em uma condição
let pessoasAcimaDe30 = pessoas.filter(function (pessoa) {
    return pessoa.idade > 30;
});
console.log("Pessoas com idade acima de 30: ", pessoasAcimaDe30);

// Atualizar uma propriedade de um objeto
let pessoaParaAtualizar = pessoas.find(function (pessoa) {
    return pessoa.nome === "Pedro";
});
if (pessoaParaAtualizar) {
    pessoaParaAtualizar.cidade = "Porto Alegre";
}
console.log("Pessoas após atualização: ", pessoas);

// Remover um objeto do array
let indexParaRemover = pessoas.findIndex(function (pessoa) {
    return pessoa.nome === "Ana";
});
if (indexParaRemover !== -1) {
    pessoas.splice(indexParaRemover, 1);
}
console.log("Pessoas após remoção: ", pessoas);

// Criar um novo array com uma transformação
let nomes = pessoas.map(function (pessoa) {
    return pessoa.nome;
});
console.log("Nomes das pessoas: ", nomes);

// Ordenar o array de objetos por uma propriedade
pessoas.sort(function (a, b) {
    return a.idade - b.idade;
});
console.log("Pessoas ordenadas por idade: ", pessoas);

// Reduzir o array a um valor único
let idadeTotal = pessoas.reduce(function (acumulador, pessoa) {
    return acumulador + pessoa.idade;
}, 0);
console.log("Idade total das pessoas: ", idadeTotal);

// Verificar se todos os objetos do array atendem a uma condição
let todasAcimaDe20 = pessoas.every(function (pessoa) {
    return pessoa.idade > 20;
});
console.log("Todas as pessoas têm mais de 20 anos? ", todasAcimaDe20);

// Verificar se pelo menos um objeto do array atende a uma condição
let alguemDeSP = pessoas.some(function (pessoa) {
    return pessoa.cidade === "São Paulo";
});
console.log("Alguma pessoa é de São Paulo? ", alguemDeSP);
