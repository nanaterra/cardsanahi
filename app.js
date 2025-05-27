function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao'; // CORRIGIDO

     cartao.innerHTML = `
      <div class="cartao_conteudo">
      <h3>${categoria}</h3>
        <div class="cartao_conteudo_pergunta">
          <p>${pergunta}</p>
        </div>
        <div class="cartao_conteudo_resposta">
          <p>${resposta}</p>
        </div>
      </div>
    `;


    let respostaEstaVisivel = false

    function viraCartao({
      respostaEstaVisivel = !respostaEstaVisivel
      cartao.classList.toggle('active')
    })
    cartao.addEventListener('click', viraCartao)

    container.appendChild(cartao);
}

// Chamadas de exemplo (adicione ao final ou em perguntas.js)
criaCartao(
    'Geografia',
    'Qual a capital da Tailândia?',
    'A capital da Tailândia é Bangkok'
);

criaCartao(
    'Geografia',
    'Qual é o tipo de governo da Tailândia?',
    'A Tailândia é uma monarquia constitucional'
);

criaCartao(
    'Geografia',
    'Como é composto o alfabeto tailandês?',
    'É composto por 44 consoantes e 15 vogais'
);