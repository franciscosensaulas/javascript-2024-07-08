let pessoa = {};

document.getElementById('botaoCriarObjeto').addEventListener('click', criarObjeto);
document.getElementById('botaoExibirObjeto').addEventListener('click', exibirObjeto);
document.getElementById('botaoLimparSaida').addEventListener('click', limparSaida);

function criarObjeto() {
    const primeiroNome = document.getElementById('primeiroNome').value;
    const ultimoNome = document.getElementById('ultimoNome').value;
    const idade = document.getElementById('idade').value;

    pessoa = {
        primeiroNome: primeiroNome,
        ultimoNome: ultimoNome,
        idade: idade
    };

    alert('Objeto criado!');
}

function exibirObjeto() {
    if (Object.keys(pessoa).length > 0) {
        document.getElementById('saida').textContent =
            `Nome Completo: ${pessoa.primeiroNome} ${pessoa.ultimoNome}, Idade: ${pessoa.idade}`;
    } else {
        document.getElementById('saida').textContent = 'Nenhum objeto criado.';
    }
}

function limparSaida() {
    document.getElementById('saida').textContent = '';
}