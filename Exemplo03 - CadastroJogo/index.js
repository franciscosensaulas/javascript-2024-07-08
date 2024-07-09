function salvar() {
    // Selecionar elemento por id do input do nome do jogo
    let tagInputJogo = document.querySelector("#jogo");
    let tagInputMetacritic = document.querySelector("#metacritic");

    // Obter o valor do input do nome do jogo, digitado por usuário 
    let jogoNome = tagInputJogo.value;
    let jogoMetacritic = parseInt(tagInputMetacritic.value);

    // Criando um elemento li
    let tagLi = document.createElement("li");
    // Definindo o conteúdo do li
    tagLi.innerHTML = `${jogoNome} => ${jogoMetacritic}`;
    // Selecionar a tag ul (lista não ordenada)
    let tagUl = document.querySelector("ul");
    // Adicionar o elemento li(criado por js) como elemento filho da ul
    tagUl.appendChild(tagLi);
}
// https://dontpad.com/franciscosensaulas/js