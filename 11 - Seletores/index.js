// Selecionar o título pelo ID e alterar o texto
let titulo = document.getElementById('titulo');
titulo.textContent = 'Título Alterado';

// Selecionar todos os parágrafos pela classe e adicionar uma classe
let paragrafos = document.getElementsByClassName('texto');
for (let i = 0; i < paragrafos.length; i++) {
    paragrafos[i].classList.add('highlight');
}

// Selecionar a imagem pelo ID e alterar o atributo src
let imagem = document.querySelector('#imagem');
imagem.setAttribute('src', 'novaImagem.jpg');

// Selecionar o botão pelo ID e adicionar um event listener
let botao = document.querySelector('#botao');
botao.addEventListener('click', function () {
    alert('Botão clicado!');
});

// Selecionar todos os elementos div e esconder o primeiro
let divs = document.getElementsByTagName('div');
if (divs.length > 0) {
    divs[0].classList.add('hidden');
}