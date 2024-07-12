// Inicializa um array vazio para armazenar os heróis
let herois = [];

// Inicializa uma variável para rastrear o índice do herói sendo editado, -1 significa que nenhum herói está sendo editado
let indiceEdicao = -1;

// Adiciona um event listener ao botão "Adicionar" para chamar a função adicionarOuEditarHeroi quando clicado
document.getElementById('botaoAdicionar').addEventListener('click', adicionarOuEditarHeroi);

// Adiciona um event listener ao botão "Exibir Lista" para chamar a função exibirLista quando clicado
document.getElementById('botaoExibirLista').addEventListener('click', exibirLista);

// Adiciona um event listener ao botão "Limpar Lista" para chamar a função limparLista quando clicado
document.getElementById('botaoLimparLista').addEventListener('click', limparLista);

// Função para adicionar ou editar um herói
function adicionarOuEditarHeroi() {
    // Obtém os valores dos campos de entrada
    const nome = document.getElementById('nome').value;
    const poder = document.getElementById('poder').value;

    // Verifica se ambos os campos estão preenchidos
    if (nome && poder) {
        if (indiceEdicao === -1) {
            // Adiciona um novo herói ao array se não estiver editando
            herois.push({ nome: nome, poder: poder });
            alert('Herói adicionado!');
        } else {
            // Atualiza o herói existente no índice de edição
            herois[indiceEdicao] = { nome: nome, poder: poder };
            indiceEdicao = -1; // Reseta o índice de edição
            alert('Herói editado!');
        }
        // Limpa os campos de entrada
        document.getElementById('nome').value = '';
        document.getElementById('poder').value = '';
        // Atualiza a exibição da lista de heróis
        exibirLista();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

// Função para exibir a lista de heróis
function exibirLista() {
    // Obtém o elemento da lista de heróis
    const listaDeHerois = document.getElementById('listaDeHerois');
    // Limpa o conteúdo anterior da lista
    listaDeHerois.innerHTML = '';

    // Verifica se há heróis no array
    if (herois.length > 0) {
        // Itera sobre cada herói no array
        herois.forEach((heroi, index) => {
            // Cria um item de lista para cada herói
            const item = document.createElement('li');
            item.textContent = `Nome: ${heroi.nome}, Poder: ${heroi.poder}`;

            // Cria um botão para editar o herói
            const botaoEditar = document.createElement('button');
            botaoEditar.textContent = 'Editar';
            botaoEditar.style.marginLeft = '10px';
            botaoEditar.addEventListener('click', function () {
                iniciarEdicao(index);
            });

            // Cria um botão para remover o herói
            const botaoRemover = document.createElement('button');
            botaoRemover.textContent = 'Remover';
            botaoRemover.style.marginLeft = '10px';
            botaoRemover.addEventListener('click', function () {
                removerHeroi(index);
            });

            // Adiciona os botões ao item de lista
            item.appendChild(botaoEditar);
            item.appendChild(botaoRemover);
            // Adiciona o item de lista à lista de heróis
            listaDeHerois.appendChild(item);
        });
    } else {
        // Se não houver heróis, exibe uma mensagem
        listaDeHerois.textContent = 'Nenhum herói cadastrado.';
    }
}

// Função para iniciar a edição de um herói
function iniciarEdicao(index) {
    // Preenche os campos de entrada com os dados do herói a ser editado
    document.getElementById('nome').value = herois[index].nome;
    document.getElementById('poder').value = herois[index].poder;
    // Define o índice de edição para o índice do herói a ser editado
    indiceEdicao = index;
}

// Função para remover um herói
function removerHeroi(index) {
    // Remove o herói do array
    herois.splice(index, 1);
    // Atualiza a exibição da lista de heróis
    exibirLista();
    alert('Herói removido!');
}

// Função para limpar a lista de heróis
function limparLista() {
    // Esvazia o array de heróis
    herois = [];
    // Limpa o conteúdo da lista de heróis exibida
    document.getElementById('listaDeHerois').textContent = '';
    alert('Lista de heróis limpa!');
}
