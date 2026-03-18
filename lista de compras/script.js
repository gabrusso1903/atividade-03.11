function adicionaritem() {
    const input = document.getElementById('item');
    const lista = document.getElementById('lista');

    if (input.value.trim() === "") {
        alert("escreva algo antes de adicionar");
        return;
    }
    const novoItem = document.createElement('li');

   novoItem.innerHTML = `
        <span>${input.value}</span>
        <button class="apagar" onclick="removerItem(this)">X</button>
    `;

      lista.appendChild(novoItem);

    input.value = "";
    input.focus();
}
function removerItem(botao) {
    botao.parentElement.remove();

}
