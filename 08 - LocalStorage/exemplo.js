/*  O LocalStorage é uma funcionalidade do HTML5 que permite armazenar dados no navegador do usuário de forma persistente,
    ou seja, os dados não são apagados quando o navegador é fechado. Isso é útil para manter informações de estado ou 
    preferências do usuário entre sessões, sem a necessidade de um servidor. 
 */

// Armazena um item no LocalStorage.
// localStorage.setItem('chave', 'valor');
localStorage.setItem('nome', 'João');

// Recupera um item do LocalStorage.
// let valor = localStorage.getItem('chave');
let nome = localStorage.getItem("nome");

// Remove um item do LocalStorage.
// localStorage.removeItem('chave');
localStorage.removeItem("nome");

// Remove todos os itens do LocalStorage.
localStorage.clear();