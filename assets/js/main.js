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
      tarefa.classList.add('tarefa');
      
      const conteudo = `<p class content>${valor}</p>`;
      
      tarefa.innerHTML = conteudo
      tarefa.appendChild(BotaoConcluir())
      lista.appendChild(tarefa)
      console.log(itens)   
   })
   input.value = '';
   input.focus();
}

const BotaoConcluir = ()=>{
const botaoConcluir = document.createElement('button');

botaoConcluir.classList.add('botao-conclui');
botaoConcluir.innerText = 'Concluir';

botaoConcluir.addEventListener('click', concluirTarefa);
return botaoConcluir;


}
const concluirTarefa = (evento) =>{
  const botaoConcluir = evento.target;

  const tarefaConcluida = botaoConcluir.parentElement;
  tarefaConcluida.classList.toggle('done')


}
// Criar evento de click que dispara a Função criarTarefa para adcionar novas tarefas.
const novaTarefa = document.querySelector('[data-form-buttom]');
novaTarefa.addEventListener('click', criarTarefa);















