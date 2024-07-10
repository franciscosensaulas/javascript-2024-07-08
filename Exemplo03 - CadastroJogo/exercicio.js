let tagSpanEditar = null;

function salvar() {
    // Selecionar elementos pelos ids dos inputs
    let tagInputNome = document.querySelector("#nome");
    let tagInputNota1 = document.querySelector("#nota1");
    let tagInputNota2 = document.querySelector("#nota2");
    let tagInputNota3 = document.querySelector("#nota3");

    // Obter os valores dos inputs
    let nome = tagInputNome.value;
    let nota1 = parseFloat(tagInputNota1.value);
    let nota2 = parseFloat(tagInputNota2.value);
    let nota3 = parseFloat(tagInputNota3.value);

    // Calcular a média das notas
    let media = calcularMedia(nota1, nota2, nota3);

    // Limpar campos
    tagInputNome.value = "";
    tagInputNota1.value = "";
    tagInputNota2.value = "";
    tagInputNota3.value = "";

    // Verificar se é um novo cadastro ou edição
    if (tagSpanEditar === null) {
        // Chamar função para criar o elemento na lista
        criarElementoNota(nome, nota1, nota2, nota3, media);
    } else {
        // Chamar função para editar o elemento na lista
        editarElementoNota(nome, nota1, nota2, nota3, media);
    }

    // Focar no campo de nome após salvar
    tagInputNome.focus();
}

function calcularMedia(nota1, nota2, nota3) {
    // Calcular a média das notas
    let media = (nota1 + nota2 + nota3) / 3;
    return media.toFixed(1); // Arredondar para uma casa decimal
}

function criarElementoNota(nome, nota1, nota2, nota3, media) {
    // Criar o elemento li
    let tagLi = document.createElement("li");

    // Montar o texto conforme o formato solicitado
    let textoNota = `${nome} | ${nota1}, ${nota2}, ${nota3} | Média: ${media}`;

    // Criar o elemento span
    let tagSpan = document.createElement("span");
    tagSpan.textContent = textoNota;

    // Adicionar span como filho de li
    tagLi.appendChild(tagSpan);

    // Criar botões de editar e apagar
    let tagButtonEditar = document.createElement("button");
    tagButtonEditar.textContent = "Editar";
    tagButtonEditar.onclick = editar;
    tagLi.appendChild(tagButtonEditar);

    let tagButtonApagar = document.createElement("button");
    tagButtonApagar.textContent = "Apagar";
    tagButtonApagar.onclick = apagar;
    tagLi.appendChild(tagButtonApagar);

    // Adicionar o li à lista de notas
    let tagUl = document.querySelector("#lista-notas");
    tagUl.appendChild(tagLi);

    // Feedback para o usuário
    alert("Nota adicionada com sucesso");
}

function editar(element) {
    let tagBotaoEditarDoCLick = element.target;
    let tagLi = tagBotaoEditarDoCLick.parentNode;
    tagSpanEditar = tagLi.querySelector("span");
    let textoSpan = tagSpanEditar.textContent;
    let partes = textoSpan.split(" | ");
    let nome = partes[0];
    let notas = partes[1].split(", ");
    let nota1 = parseFloat(notas[0]);
    let nota2 = parseFloat(notas[1]);
    let nota3 = parseFloat(notas[2]);
    let tagInputNome = document.querySelector("#nome");
    tagInputNome.value = nome;
    let tagInputNota1 = document.querySelector("#nota1");
    tagInputNota1.value = nota1;
    let tagInputNota2 = document.querySelector("#nota2");
    tagInputNota2.value = nota2;
    let tagInputNota3 = document.querySelector("#nota3");
    tagInputNota3.value = nota3;
}

function editarElementoNota(nome, nota1, nota2, nota3, media) {
    tagSpanEditar.textContent = `${nome} | ${nota1}, ${nota2}, ${nota3} | Média: ${media}`;
    tagSpanEditar = null;
    alert("Nota editada com sucesso");
}

function apagar(element) {
    let desejaApagar = confirm("Deseja realmente apagar?");
    if (desejaApagar) {
        let tagBotaoApagarDoClick = element.target;
        let tagLi = tagBotaoApagarDoClick.parentNode;
        let tagUl = document.querySelector("#lista-notas");
        tagUl.removeChild(tagLi);
        alert("Nota apagada com sucesso");
    }
}
