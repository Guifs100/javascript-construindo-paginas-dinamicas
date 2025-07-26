Quando você começa a mergulhar no mundo da programação, especialmente na web com JavaScript, logo se depara com algo chamado "eventos". Mas o que são eventos? Simplificando, eventos são ações ou ocorrências que acontecem no sistema que você está programando, como um clique do mouse, pressionamentos de teclas, movimentos do mouse, etc. E para cada um desses eventos, o JavaScript nos permite interagir com eles através de algo chamado "objeto event".
O que é o Objeto Event?

Imagine que você está em uma festa (o seu site ou aplicação web) e cada vez que algo notável acontece (como alguém abrir a porta, alguém apertar um botão de um jogo), isso é um evento. Agora, imagine que você tem um amigo (o objeto event) que anota tudo o que acontece nesses eventos - quem abriu a porta, que botão foi pressionado, etc. Esse amigo é muito detalhista e escreve todas as informações sobre o que aconteceu. No mundo do JavaScript, esse amigo é o objeto event.
Propriedades do Objeto Event

O objeto event contém várias propriedades que nos dão informações sobre o evento que ocorreu. Aqui estão algumas das mais comuns:

    type: diz qual foi o tipo do evento (click, mouseover, keyup, etc.).
    target: refere-se ao elemento que disparou o evento.
    currentTarget: semelhante ao target, mas se refere ao elemento ao qual o evento foi realmente atribuído.
    clientX / clientY: fornece a posição horizontal e vertical do mouse quando um evento do mouse foi disparado.
    keyCode: no caso de um evento de teclado, diz qual tecla foi pressionada.

Métodos do Objeto Event

Além das propriedades, o objeto event também tem métodos (ações) que você pode usar. Dois dos mais usados são:

    preventDefault(): impede que o comportamento padrão do evento aconteça. Por exemplo, impede que um link abra uma nova página.
    stopPropagation(): impede que o evento continue a ser propagado. Ou seja, ele não deixa o evento "borbulhar" para os elementos pais.

Exemplo prático

Vamos ver um exemplo simples de como usar o objeto event. Imagine que você tem um botão na sua página web e quer fazer algo quando ele é clicado:

<button id="meuBotao">Clique aqui!</button>

<script>
  document.getElementById('meuBotao').addEventListener('click', function(event) {
    alert("Botão clicado!");
    console.log(event.type); // Mostra o tipo do evento no console, que será "click"
    console.log(event.target); // Mostra o elemento que disparou o evento, que será o botão
  });
</script>

Neste exemplo, quando o botão é clicado, uma caixa de alerta aparece e o console logará o tipo de evento e o elemento que disparou o evento.

Entender o objeto event e como trabalhar com eventos em JavaScript é fundamental para criar páginas web interativas. Quase todas as interações do usuário com sua página passarão por algum tipo de evento. Saber capturar esses eventos e responder a eles de forma adequada pode transformar completamente a experiência do usuário no seu site ou aplicação.

