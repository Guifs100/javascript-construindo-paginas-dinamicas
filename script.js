import {criarItemDaLista} from './scripts/criarItemDaLista.js';

const listaDeCompras = document.getElementById('lista-de-compras');
// let text = document.querySelector('#titulo-lista');
// text.innerHTML = 'Lista de compras atualizada';

// console.log(text);

const botaoAdicionar = document.getElementById('adicionar-item');
let count = 0;

botaoAdicionar.addEventListener('click', (event) => {
  const itemDaLista = criarItemDaLista();

  listaDeCompras.appendChild(itemDaLista);
  verificarListaVazia();
});

const mensagemListaVazia = document.querySelector('.mensagem-lista-vazia');

function verificarListaVazia() {
  const itensDaLista = listaDeCompras.querySelectorAll('li');
  if (itensDaLista.length === 0) {
    mensagemListaVazia.style.display = 'block';
  } else {
    mensagemListaVazia.style.display = 'none';
  }
}

verificarListaVazia();
