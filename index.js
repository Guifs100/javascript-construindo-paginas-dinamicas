import {criarItemDaLista} from './scripts/criarItemDaLista.js';
import verificarListaVazia from './scripts/verificarListaVazia.js';

const listaDeCompras = document.getElementById('lista-de-compras');
// let text = document.querySelector('#titulo-lista');
// text.innerHTML = 'Lista de compras atualizada';

// console.log(text);

const botaoAdicionar = document.getElementById('adicionar-item');

botaoAdicionar.addEventListener('click', (event) => {
  event.preventDefault(); // Previne o comportamento padrão do botão
  const itemDaLista = criarItemDaLista();
  // Se nenhum item foi criado (ex.: input vazio), não tentar anexar
  if (!itemDaLista) return;
  listaDeCompras.appendChild(itemDaLista);
  verificarListaVazia(listaDeCompras);
});

verificarListaVazia(listaDeCompras);
