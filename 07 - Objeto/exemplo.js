// Inicializa um objeto vazio
let pessoa = {};

// Inicializa um objeto com dados
// let pessoa = {
//     nome: "João",
//     idade: 30,
//     cidade: "São Paulo"
// };

// Adicionar propriedades ao objeto
pessoa.nome = "João";
pessoa.idade = 30;
pessoa.cidade = "São Paulo";

console.log("Pessoa: ", pessoa);

// Obter o valor de uma propriedade
let nomePessoa = pessoa.nome;
console.log("Nome: ", nomePessoa);

// Atualizar o valor de uma propriedade
pessoa.idade = 31;
console.log("Idade atualizada: ", pessoa.idade);

// Remover uma propriedade
delete pessoa.cidade;
console.log("Pessoa após remover 'cidade': ", pessoa);

// Verificar se uma propriedade existe
let temNome = "nome" in pessoa;
console.log("O objeto tem a propriedade 'nome'? ", temNome);

// Iterar sobre as propriedades do objeto
for (let chave in pessoa) {
    console.log(`Propriedade: ${chave}, Valor: ${pessoa[chave]}`);
}

// Obter todas as chaves do objeto
let chaves = Object.keys(pessoa);
console.log("Chaves do objeto: ", chaves);

// Obter todos os valores do objeto
let valores = Object.values(pessoa);
console.log("Valores do objeto: ", valores);

// Obter todas as entradas (pares chave/valor) do objeto
let entradas = Object.entries(pessoa);
console.log("Entradas do objeto: ", entradas);

// Mesclar objetos
let endereco = {
    rua: "Rua A",
    numero: 123
};

let pessoaComEndereco = Object.assign({}, pessoa, endereco);
console.log("Pessoa com endereço: ", pessoaComEndereco);

// Criar um novo objeto a partir de um objeto existente
let pessoaClone = Object.assign({}, pessoa);
console.log("Clone da pessoa: ", pessoaClone);

// Definir propriedades com descritores
Object.defineProperty(pessoa, "nacionalidade", {
    value: "Brasileiro",
    writable: false,
    enumerable: true,
    configurable: true
});
console.log("Pessoa com nacionalidade: ", pessoa);

// Verificar a propriedade com descritor
console.log("Nacionalidade: ", pessoa.nacionalidade);
pessoa.nacionalidade = "Argentino"; // Isso não terá efeito porque writable é false
console.log("Nacionalidade após tentativa de alteração: ", pessoa.nacionalidade);

// Congelar o objeto (tornar todas as propriedades imutáveis)
Object.freeze(pessoa);
pessoa.idade = 35; // Isso não terá efeito porque o objeto está congelado
console.log("Pessoa após tentar alterar idade em objeto congelado: ", pessoa);

// Verificar se o objeto está congelado
let isCongelado = Object.isFrozen(pessoa);
console.log("O objeto está congelado? ", isCongelado);

// Selecionar propriedades específicas para um novo objeto
let { nome, idade } = pessoa;
let pessoaSelecionada = { nome, idade };
console.log("Novo objeto com propriedades selecionadas: ", pessoaSelecionada);