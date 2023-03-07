const criarTarefa = (evento) => {
   evento.preventDefault()
   const input = document.querySelector('[data-form-input]');
   const lista = document.querySelector('[data-lista]');
   const valor = input.value;
  
   // Criar o elemento 'li' dentro da 'ul'.
   const tarefa = document.createElement('li');
   tarefa.classList.add('tarefa');
   
   const conteudo = `<p class="content">${valor}</p>`;
   
   tarefa.innerHTML = conteudo;
   tarefa.appendChild(BotaoConcluir());
   tarefa.appendChild(BotaoDeletar());
   lista.appendChild(tarefa);
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
  tarefaConcluida.classList.toggle('tarefa-feita');
  

}
const BotaoDeletar = ()=>{
   const botaoDeletar = document.createElement('button');
   
   botaoDeletar.classList.add('botao-delete');
   botaoDeletar.innerText = 'Deletar'

   botaoDeletar.addEventListener('click', deletarTarefa);
   return botaoDeletar;
}

const deletarTarefa = (evento) =>{
  const botaoDeletar = evento.target;

  const tarefaDeletada = botaoDeletar.parentElement;

  tarefaDeletada.remove()
  return botaoDeletar;
}

// Criar evento de click que dispara a Função criarTarefa para adcionar novas tarefas.
const novaTarefa = document.querySelector('[data-form-buttom]');
novaTarefa.addEventListener('click', criarTarefa);















