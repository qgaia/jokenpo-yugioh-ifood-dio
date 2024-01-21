// Constantes
const TURN_PLAYER_1 = 1;
const TURN_PLAYER_2 = 2;

// Tipos de cartas
enum Card {
  Rock = "rock",
  Scissors = "scissors",
  Paper = "paper"
}

// Funções

// Função para permitir que o jogador 1 escolha uma carta
function choosePlayer1Card() {
  // Seleciona uma carta aleatória
  const cardType = Card.values[Math.floor(Math.random() * Card.values.length)];

  // Atualiza a interface visual
  document.getElementById("player1CardImage").src = `./src/icons/${cardType}.png`;
}

// Função para permitir que o jogador 2 escolha uma carta
function choosePlayer2Card() {
  // Seleciona uma carta aleatória
  const cardType = Card.values[Math.floor(Math.random() * Card.values.length)];

  // Atualiza a interface visual
  document.getElementById("player2CardImage").src = `assets/icons/${cardType}.png`;
}

// Função para retornar a carta escolhida pelo jogador
function getPlayerCard(turn) {
  // Obtém o ID do elemento da imagem da carta do jogador
  const cardImageElementId = `player${turn}CardImage`;

  // Obtém o elemento da imagem da carta do jogador
  const cardImageElement = document.getElementById(cardImageElementId);

  // Obtém a src da imagem da carta do jogador
  const cardImageSrc = cardImageElement.src;

  // Retorna o tipo da carta
  return cardImageSrc.split("/")[4];
}

// Função para resolver o duelo
function resolveDuel() {
  // Obtém as cartas escolhidas pelos jogadores
  const player1Card = getPlayerCard(TURN_PLAYER_1);
  const player2Card = getPlayerCard(TURN_PLAYER_2);

  // Resolve o duelo
  if (player1Card === player2Card) {
    // Empate
    document.querySelector(".duel-result").innerHTML = "Empate!";
  } else if (
    player1Card === "rock" && player2Card === "scissors" ||
    player1Card === "scissors" && player2Card === "paper" ||
    player1Card === "paper" && player2Card === "rock"
  ) {
    // Jogador 1 vence
    document.querySelector(".duel-result").innerHTML = "Jogador 1 vence!";
  } else {
    // Jogador 2 vence
    document.querySelector(".duel-result").innerHTML = "Jogador 2 vence!";
  }
}

// Função que é executada quando o botão "Iniciar duelo" é clicado
function startDuel() {
  // Escolhe uma carta para o jogador 1
  choosePlayer1Card();

  // Escolhe uma carta para o jogador 2
  choosePlayer2Card();

  // Resolve o duelo
  resolveDuel();
}

// Função que é executada quando o jogo é carregado
window.onload = function() {
  // Habilita o botão "Iniciar duelo"
  document.getElementById("startDuelButton").disabled = false;
};
