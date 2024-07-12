document.getElementById('saveButton').addEventListener('click', saveName);
document.getElementById('loadButton').addEventListener('click', loadName);
document.getElementById('clearButton').addEventListener('click', clearStorage)

function saveName() {
    const name = document.getElementById('name').value;
    localStorage.setItem('nome', name);
    alert('Nome salvo!');
}

function loadName() {
    const name = localStorage.getItem('nome');
    if (name) {
        document.getElementById('output').textContent = `Nome salvo: ${name}`;
    } else {
        document.getElementById('output').textContent = 'Nenhum nome salvo.';
    }
}

function clearStorage() {
    localStorage.clear();
    document.getElementById('output').textContent = '';
    alert('Armazenamento limpo!');
}