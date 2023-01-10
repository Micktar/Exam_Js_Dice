  /* ******************** SCRIPT FOR DICE GAME ***************************** */
  /* ******************** SCRIPT POUR UN JEU DE DÉ ***************************** */

  /* ------------ Une partie de Dé comprenant 2 joueurs qui joue de manière alterné. ------
  /* ------------ Chaque tour les points sont cumulés. ------------------------------------
  /* ------------ Dès qu'un joueur tombe sur le chiffre 1, il passe son tour. -------------
  /* ------------ Le premier joueur a arrivé à 100 a gagné -------------------------------- */ 

  /* -------------------------- Déclaration des variables du GAME PLAY------------------------ */
let scores, roundScore, currentPlayer, gamePlay;


/* --------------------- déclaration des actions du jeu ----------------------- */
const roll = document.querySelector('#btn_roll'); 
const hold = document.querySelector('#btn_hold');
const newGame = document.querySelector('#btn_newGame');
const nbDice = document.querySelector('.dice');
const cotillon = document.querySelector('.cotillon');

/* ------------------ joueur 1 ----------------- */
let playerPanel_0 = document.querySelector('.player_0_control');
let player_0 = document.getElementById('player_0');
let score_0 =  document.getElementById('score_0');
let current_0 = document.getElementById('current_0');

/* ------------------ joueur 2 ----------------- */
let playerPanel_1 = document.querySelector('.player_1_control');
let player_1 = document.getElementById('player_1');
let score_1 = document.getElementById('score_1');
let current_1 = document.getElementById('current_1');

// problème d'affichage récurrent sous Edge et Chrome. Une seule demande ne s'affiche sur les 2 ; console.log affiche le résultat et également "null".  
// aucun problème sous Edge 

/* -------------------------- Fonction d'initialisation du GAME PLAY------------------------ */
let init = () => {
  scores = [0,0];
  currentPlayer = 0;
  roundScore = 0;
  gamePlay = true;

  cotillon.style.display ='none';
  nbDice.style.display = 'none';

  player_0.textContent = 'Player 1' /*prompt('Nom du joueur 1')*/; 
  player_0.style.color = 'black';
  score_0.textContent = '0';
  current_0.textContent = '0';
  playerPanel_0.classList.remove('winner');
  playerPanel_0.classList.remove('active');
  playerPanel_0.classList.add('active');

  player_1.textContent =  'Player 2' /* prompt('Nom du joueur 2') */;
  player_1.style.color = 'black'; 
  score_1.textContent = '0';
  current_1.textContent = '0';
  playerPanel_1.classList.remove('winner');
  playerPanel_1.classList.remove('active');
};

/* ------------------------- Fonction pour lancer le dé ---------------------------------- */ 
roll.addEventListener('click', () => {
  if(gamePlay) {
    // conversion en nb entier d'un nb aléatoire
    let nbDice = Math.floor(Math.random() *6)+1; 

    let diceDisplay = document.querySelector('.dice');
    diceDisplay.style.display = 'block';
    // affiche le bon chiffre du dé
    diceDisplay.src = 'images/dé/dice_' + nbDice + '.png'; 
    
    // si diff de 1 additionne le Dé au current score  
    if(nbDice !==1) { 
      roundScore += nbDice;
      document.querySelector('#current_' + currentPlayer).textContent = roundScore;
    } else {
      nextPlayer(); 
    }
      /* console.log(dice)*/
  }
});

/* ------------------------- Fonction pour le bouton Hold ---------------------------------- */ 
hold.addEventListener('click', () => {
  if(gamePlay){
    scores[currentPlayer] += roundScore;
    // modifie le score en additionnant le current au score global
    document.querySelector('#score_' + currentPlayer).textContent = scores[currentPlayer];
    
    // si score supérieur ou égal à 100 :
    if(scores[currentPlayer] >= 100) {
      // affiche le vainqueur en rouge, un GIF se met à la place du Dé et stoppe le jeu
      document.querySelector('#player_' + currentPlayer).textContent = "Vainqueur";
      document.querySelector('#player_' + currentPlayer).style.color = 'red';
      cotillon.style.display = 'block' ; // gif
      nbDice.style.display = 'none';
      document.querySelector('.player_' + currentPlayer + '_control').classList.add('winner');
      document.querySelector('.player_' + currentPlayer + '_control').classList.remove('active');
      gamePlay = false;
    } else {
      nextPlayer();
    }
  /* console.log(scores)*/  
  }
});

/* ------------------------- Fonction pour le joueur suivant -------------------------------*/ 
let nextPlayer = () => {
  currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0 ; // condition ternaire
  roundScore = 0;
  current_0.textContent = '0';
  current_1.textContent = '0';
  playerPanel_0.classList.toggle('active');
  playerPanel_1.classList.toggle('active');
  };

/* ------------------------- Fonction pour une nouvelle partie -------------------------- */ 
newGame.addEventListener('click', init);

init();
