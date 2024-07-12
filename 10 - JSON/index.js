let herois = [];
let indiceEdicao = -1;

document.getElementById('botaoAdicionar').addEventListener('click', adicionarOuEditarHeroi);
document.getElementById('botaoExibirLista').addEventListener('click', exibirLista);
document.getElementById('botaoLimparLista').addEventListener('click', limparLista);
document.getElementById('botaoSalvarJSON').addEventListener('click', salvarEmJSON);
document.getElementById('botaoSalvarJSONDownload').addEventListener('click', salvarEmJSONDownload);
document.getElementById('botaoCarregarJSON').addEventListener('click', carregarDeJSON);

function adicionarOuEditarHeroi() {
    const nome = document.getElementById('nome').value;
    const poder = document.getElementById('poder').value;

    if (nome && poder) {
        if (indiceEdicao === -1) {
            herois.push({ nome: nome, poder: poder });
            alert('Herói adicionado!');
        } else {
            herois[indiceEdicao] = { nome: nome, poder: poder };
            indiceEdicao = -1;
            alert('Herói editado!');
        }
        document.getElementById('nome').value = '';
        document.getElementById('poder').value = '';
        exibirLista();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function exibirLista() {
    const listaDeHerois = document.getElementById('listaDeHerois');
    listaDeHerois.innerHTML = '';

    if (herois.length > 0) {
        herois.forEach((heroi, index) => {
            const item = document.createElement('li');
            item.textContent = `Nome: ${heroi.nome}, Poder: ${heroi.poder}`;

            const botaoEditar = document.createElement('button');
            botaoEditar.textContent = 'Editar';
            botaoEditar.style.marginLeft = '10px';
            botaoEditar.addEventListener('click', function () {
                iniciarEdicao(index);
            });

            const botaoRemover = document.createElement('button');
            botaoRemover.textContent = 'Remover';
            botaoRemover.style.marginLeft = '10px';
            botaoRemover.addEventListener('click', function () {
                removerHeroi(index);
            });

            item.appendChild(botaoEditar);
            item.appendChild(botaoRemover);
            listaDeHerois.appendChild(item);
        });
    } else {
        listaDeHerois.textContent = 'Nenhum herói cadastrado.';
    }
}

function iniciarEdicao(index) {
    document.getElementById('nome').value = herois[index].nome;
    document.getElementById('poder').value = herois[index].poder;
    indiceEdicao = index;
}

function removerHeroi(index) {
    herois.splice(index, 1);
    exibirLista();
    alert('Herói removido!');
}

function limparLista() {
    herois = [];
    document.getElementById('listaDeHerois').textContent = '';
    alert('Lista de heróis limpa!');
}

function salvarEmJSON() {
    const json = JSON.stringify(herois);
    localStorage.setItem('herois', json);
    alert('Lista de heróis salva em JSON!');
}


function salvarEmJSONDownload() {
    const json = JSON.stringify(herois);
    localStorage.setItem('herois', json);
    alert('Lista de heróis salva em JSON!');
    // Criar um blob com o conteúdo JSON
    // Blob: Utilizado para criar um objeto de dados binários, permitindo armazenar e manipular arquivos no navegador.
    const blob = new Blob([json], { type: 'application/json' });

    // Criar um link para download
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'herois.json';
    a.style.display = 'none';

    // Adicionar o link ao documento, clicar nele e removê-lo
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    alert('Lista de heróis salva em JSON e download iniciado!');
}

function carregarDeJSON() {
    const json = localStorage.getItem('herois');
    if (json) {
        herois = JSON.parse(json);
        exibirLista();
        alert('Lista de heróis carregada de JSON!');
    } else {
        alert('Nenhum dado encontrado no JSON.');
    }
}