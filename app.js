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

    container.appendChild(cartao);
}

// Chamadas de exemplo (adicione ao final ou em perguntas.js)
criaCartao(
    'Cultura',
    'O que é K-pop?',
    'É a "música pop coreana", é um gênero musical que surgiu na Coreia do Sul.'
);

criaCartao(
    'Cultura',
    'O que são os trainees no K-pop?',
    'São Idols que antes de debutar passam um tempo treinando para sua estreia.'
);

criaCartao(
    'Cultura',
    'O que signifaca Debut?',
    'O Debut é quando um grupo de K-pop tem oficialmente sua estreia.'
);

criaCartao(
    'Cultura',
    'O significa Idol no K-pop?',
    'Idol refere-se a um artista que trabalha na indústria do K-pop, seja como membro de um grupo musical ou como solista.'
   );

   criaCartao(
    'Cultura',
    'O que são os Fandoms?',
    'Os Fandoms é como os fans são chamados pelos Idols. Cada grupo ou solista dentro do K-pop tem um Fandom, e cada Fandom tem um nome diferente.'
);

criaCartao(
    'Cultura',
    'O que são LightStick?',
    'São bastões de luz que tem a identidade visual de cada grupo.'
);

criaCartao(
    'Cultura',
    'O que são os Comebacks?',
    'Comebacks são como são chamados os retornos com uma nova música, que tem um conceito visual único — pode ser fofo, sombrio, futurista, etc. Isso faz parte da identidade do grupo e muda com frequência.'
);

criaCartao(
    'Cultura',
    'O que são os Photocards?',
    'Photocards são um pequeno cartão colecionável que geralmente acompanha álbuns de música de grupos K-Pop.'
);

criaCartao(
    'Cultura',
    'O que são as posições dentro do K-pop?',
    'Cada Idol dentro de um grupo tem sua posição as mais comuns são: Líder, Vocalista, Rapper, Dançarino e Visual.'
);

criaCartao(
    'Cultura',
    'O que é Fanchant?',
    'É um canto ou grito específico que os fãs fazem durante as apresentações dos seus grupos favoritos, geralmente em partes específicas das músicas ou durante momentos instrumentais.'
);

criaCartao(
    'Cultura',
    'O que é o MV no K-pop?',
    'O MV (Music Video) é a abreviação para videoclipe, o vídeo que acompanha uma música.'
);

criaCartao(
    'Cultura',
    'O que significa Bias no K-pop?',
    '"Bias" significa o membro favorito de um grupo. É o integrante que mais chama a atenção do fã e que ele costuma considerar como o seu preferido.'
);

criaCartao(
    'Cultura',
    'O que significa utt no K-pop?',
    'No K-Pop, "utt" (também escrito como "ult" ou "ultimate") significa o seu ídolo favorito entre todos os ídolos que você gosta.'
);

criaCartao(
    'Cultura',
    'O que é Hallyu?',
    'Hallyu, em tradução literal "Onda Coreana", refere-se à crescente popularidade global da cultura sul-coreana, abrangendo música, cinema, séries de televisão, moda, culinária e outros aspectos.'
);

criaCartao(
    'Cultura',
    'O que é o Disband no K-pop?',
    'O "disband" significa a dissolução ou separação definitiva de um grupo. Isso implica que os contratos dos membros são encerrados, o grupo deixa de existir como entidade e as atividades promocionais e lançamentos são interrompidos.'
);

