const inputItem = document.getElementById('input-item');
// let text = document.querySelector('#titulo-lista');
// text.innerHTML = 'Lista de compras atualizada';

// console.log(text);

const botaoAdicionar = document.getElementById('adicionar-item');
botaoAdicionar.addEventListener('click', (event) => {
  // console.log(event.target);
  event.preventDefault(); // Previne o comportamento padrão do botão
  console.log(inputItem.value);
});