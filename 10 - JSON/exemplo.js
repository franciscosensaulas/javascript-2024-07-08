// JSON.stringify: Converte um objeto JavaScript (ou array) em uma string JSON.
// let jsonString = JSON.stringify(herois);
// JSON.parse: Converte uma string JSON em um objeto JavaScript (ou array)
// let heroisFromJson = JSON.parse(jsonStringFromStorage);


// Inicializa um array de objetos
let herois = [
    { nome: "João", poder: "Força" },
    { nome: "Maria", poder: "Invisibilidade" },
    { nome: "Pedro", poder: "Velocidade" }
];

// Serializar (converter) o array de objetos para JSON
let jsonString = JSON.stringify(herois);
console.log("JSON String:", jsonString);

// Armazenar o JSON no localStorage
localStorage.setItem('herois', jsonString);

// Recuperar o JSON do localStorage
let jsonStringFromStorage = localStorage.getItem('herois');
console.log("JSON String from localStorage:", jsonStringFromStorage);

// Desserializar (converter) o JSON para um array de objetos
let heroisFromJson = JSON.parse(jsonStringFromStorage);
console.log("Array de objetos:", heroisFromJson);

// Iterar sobre o array de objetos desserializados
heroisFromJson.forEach(function(heroi) {
    console.log(`Nome: ${heroi.nome}, Poder: ${heroi.poder}`);
});

// Atualizar um objeto no array e salvar novamente no localStorage
heroisFromJson[0].poder = "Super Força";
jsonString = JSON.stringify(heroisFromJson);
localStorage.setItem('herois', jsonString);

// Remover um objeto do array e salvar novamente no localStorage
heroisFromJson.splice(1, 1); // Remove o segundo herói
jsonString = JSON.stringify(heroisFromJson);
localStorage.setItem('herois', jsonString);

// Limpar o localStorage
localStorage.removeItem('herois');
console.log("localStorage após remoção:", localStorage.getItem('herois'));
