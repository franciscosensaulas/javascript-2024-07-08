let nomes = [];
let indiceEdicao = -1;

document.getElementById('botaoAdicionar').addEventListener('click', adicionarOuEditarNome);
document.getElementById('botaoExibirArray').addEventListener('click', exibirArray);
document.getElementById('botaoLimparArray').addEventListener('click', limparArray);

function adicionarOuEditarNome() {
    const nome = document.getElementById('nome').value;
    if (nome) {
        if (indiceEdicao === -1) {
            nomes.push(nome);
            alert('Nome adicionado!');
        } else {
            nomes[indiceEdicao] = nome;
            indiceEdicao = -1;
            alert('Nome editado!');
        }
        document.getElementById('nome').value = '';
        exibirArray();
    } else {
        alert('Por favor, insira um nome.');
    }
}

function exibirArray() {
    const saida = document.getElementById('saida');
    saida.innerHTML = ''; // Limpar conteúdo anterior

    if (nomes.length > 0) {
        const lista = document.createElement('ul');
        nomes.forEach(function (nome, index) {
            const item = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = nome;
            item.appendChild(span);

            const botaoEditar = document.createElement('button');
            botaoEditar.textContent = 'Editar';
            botaoEditar.addEventListener('click', function () {
                iniciarEdicao(index);
            });

            item.appendChild(botaoEditar);
            lista.appendChild(item);
        });
        saida.appendChild(lista);
    } else {
        saida.textContent = 'Nenhum nome no array.';
    }
}

function iniciarEdicao(index) {
    document.getElementById('nome').value = nomes[index];
    indiceEdicao = index;
}

function limparArray() {
    nomes = [];
    document.getElementById('saida').textContent = '';
    alert('Array limpo!');
}