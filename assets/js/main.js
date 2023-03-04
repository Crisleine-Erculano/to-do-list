const criarTarefa = (evento) => {
   evento.preventDefault()
   const input = document.querySelector('[data-form-input]');
   const lista = document.querySelector('[data-lista]');
   const valor = input.value;
   var itens = [];
   
   itens.push(valor)
   itens.map(function (valor) {
      // Criar o elemento 'li' dentro da 'ul'.
      const tarefa = document.createElement('li');
      tarefa.classList.add('task');
      const conteudo = `<p class content>${valor}</p>`;
      tarefa.innerHTML = conteudo

      lista.appendChild(tarefa)
      console.log(itens)
      
   })

   input.value = '';
   input.focus();
}
// Criar evento de click que dispara a Função criarTarefa para adcionar novas tarefas.
const novaTarefa = document.querySelector('[data-form-buttom]');

novaTarefa.addEventListener('click', criarTarefa);















