const form = document.getElementById('formulario');
const listaContatos = [];
const listaTelefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha(){
    const nomeContato = document.getElementById('nome');
    const telContato = document.getElementById('telefone');

    if(listaContatos.includes(nomeContato.value)){
        alert(`O contato (${nomeContato.value}) já está na lista.`);
    } else{
        listaContatos.push(nomeContato.value);
        listaTelefones.push(telContato.value);

        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${telContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;

    }
    nomeContato.value = '';
    telContato.value = '';

    return listaContatos
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}