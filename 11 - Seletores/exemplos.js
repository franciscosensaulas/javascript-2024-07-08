/*
1. Seletores de Elementos Únicos
*/
// Seleciona o elemento com o ID 'meuElemento'
let elemento = document.getElementById('meuElemento');

// Seleciona o primeiro elemento com a classe 'minhaClasse'
elemento = document.querySelector('.minhaClasse');

// Seleciona o primeiro <div> no documento
elemento = document.querySelector('div');

/*
2. Seletores de Múltiplos Elementos
*/
// Seleciona todos os elementos com a classe 'minhaClasse'
let elementos = document.getElementsByClassName('minhaClasse');

// Seleciona todos os <div> no documento
elementos = document.getElementsByTagName('div');

// Seleciona todos os elementos com a classe 'minhaClasse'
elementos = document.querySelectorAll('.minhaClasse');

// Seleciona todos os <div> no documento
elementos = document.querySelectorAll('div');
