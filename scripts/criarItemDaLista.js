const inputItem = document.getElementById('input-item');

export function criarItemDaLista(textoDoItem) {
  const listaDeCompras = document.getElementById('lista-de-compras');

      // console.log(event.target);
  event.preventDefault(); // Previne o comportamento padrão do botão
  console.log(inputItem.value);
  if (inputItem.value === '') {
    alert('Por favor, insira um item.');
    return;
  }

  const itemList = document.createElement('li');
  const containerItemList = document.createElement('div');
  containerItemList.classList.add('lista-item-container');
  const inputCheckbox = document.createElement('input');
  inputCheckbox.type = 'checkbox';
  inputCheckbox.id = `item-${count++}`;
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

  containerItemList.appendChild(inputCheckbox);
  containerItemList.appendChild(nameItem);
  itemList.appendChild(containerItemList);
  document.getElementById('lista-de-compras').appendChild(itemList);
  //listaDeCompras.appendChild(itemList);

  const diaDaSemana = new Date().toLocaleDateString('pt-BR', {weekday: 'long'});
  const data = new Date().toLocaleDateString('pt-BR');
  const hora = new Date().toLocaleTimeString('pt-BR', {hour: 'numeric', minute: 'numeric'});

  const dataCompleta = `${diaDaSemana} (${data}) ás ${hora}`;
  const itemData = document.createElement('p');
  itemData.classList.add('data-item');
  itemData.innerHTML = dataCompleta;

  itemList.appendChild(itemData);

  listaDeCompras.appendChild(itemList);

  return itemDaLista;
}