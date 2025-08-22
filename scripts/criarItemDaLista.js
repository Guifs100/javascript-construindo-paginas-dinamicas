import gerarDiaDaSemana from './geratDiaDaSemana.js';

const inputItem = document.getElementById('input-item');
let contador = 0;

export function criarItemDaLista(textoDoItem) {
  // console.log(event.target);
  // console.log(inputItem.value);
  if (inputItem.value === '') {
    alert('Por favor, insira um item.');
    return;
  }

  const itemDaLista = document.createElement('li');
  const containeritemDaLista = document.createElement('div');
  containeritemDaLista.classList.add('lista-item-container');
  const inputCheckbox = document.createElement('input');
  inputCheckbox.type = 'checkbox';
  inputCheckbox.id = `item-${contador++}`;
  const nameItem = document.createElement('p');
  nameItem.innerText = inputItem.value;

  inputCheckbox.addEventListener('click', function() {
    if (inputCheckbox.checked) {
      nameItem.style.textDecoration = 'line-through';
      nameItem.style.color = 'gray';
    } else {
      nameItem.style.textDecoration = 'none';
      nameItem.style.color = 'black';
    }
  });

  containeritemDaLista.appendChild(inputCheckbox);
  containeritemDaLista.appendChild(nameItem);

  itemDaLista.appendChild(containeritemDaLista);
  const dataCompleta = gerarDiaDaSemana();

  const itemData = document.createElement('p');
  itemData.classList.add('data-item');
  itemData.innerHTML = dataCompleta;

  itemDaLista.appendChild(itemData);

  return itemDaLista;
}