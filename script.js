/* ******************** SCRIPT FOR DICE GAME ***************************** */
/* ******************** SCRIPT POUR UN JEU DE DÉ ***************************** */

/* -------------------------- Déclaration des variables du GAME PLAY------------------------ */
let scores, roundScore, currentPlayer, gamePlay;
let playerName_1 = prompt('Quel est le nom du Joueur 1')
let playerName_2 = prompt('Quel est le nom du Joueur 2')  

/* -------------------------- Fonction d'initialisation du GAME PLAY------------------------ */
let init = () => {
  scores = [0,0];
  currentPlayer = 0;
  roundScore = 0;
  gamePlay = true;

  document.querySelector('.dice').style.display = 'none';
  
  document.getElementById('score_0').textContent = '0';
  document.getElementById('score_1').textContent = '0';
  document.getElementById('current_0').textContent = '0';
  document.getElementById('current_1').textContent = '0';
  document.getElementById('player_0').textContent = playerName_1;
  document.getElementById('player_1').textContent = playerName_2;

  document.querySelector('.player_one_control').classList.remove('winner');
  document.querySelector('.player_two_control').classList.remove('winner');
  document.querySelector('.player_one_control').classList.remove('active');
  document.querySelector('.player_two_control').classList.remove('active');
  document.querySelector('.player_one_control').classList.add('active');
}

/* ------------------------- Fonction pour lancer le dé ---------------------------------- */ 

let roll = document.querySelector('#btn_roll').addEventListener('click', () => {
  if(gamePlay) {

  // conversion en nb entier d'un nb aléatoire
    let dice = Math.floor(Math.random() *6)+1; 

  // déclare la variable en récupérant la class "dice"
    let diceDOM = document.querySelector('.dice'); 
  
  // désactive l'affichage du dé 
    diceDOM.style.display = 'block'; 
  
  // récupère l'image du dé
    diceDOM.src = 'images/dé/dice_' + dice + '.png'; 
 
    if(dice !==1) {
      roundScore += dice;

      document.querySelector('#current_' + currentPlayer).textContent = roundScore;
    } else {
      nextPlayer() 
    }
    console.log(dice)
  }

})

/* ------------------------- Fonction pour le bouton Hold ---------------------------------- */ 

let hold = document.querySelector('.btn-hold').addEventListener('click', () => {
  if(gamePlay){
    scores[currentPlayer] += roundScore;

    document.querySelector('#score_' + currentPlayer).textContent = scores[currentPlayer];

    if(scores[currentPlayer] >= 10) {
      document.querySelector('#player_' + currentPlayer).textContent = "Vainqueur!";
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player_' + currentPlayer + '_control').classList.add('winner');
      document.querySelector('.player_' + currentPlayer + '_control').classList.remove('active');
      gamePlay = false;
    } else {
      nextPlayer();
    }

    console.log(scores)
  }
})


/* ------------------------- Fonction pour le joueur suivant ---------------------------------- */ 
let nextPlayer = () => {
  currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0 ;
  roundScore = 0;
  document.getElementById('current_0').textContent = '0';
  document.getElementById('current_1').textContent = '0';

  document.querySelector('.player_one_control').classList.toggle('active');
  document.querySelector('.player_two_control').classList.toggle('active');
}



/* ------------------------- Fonction pour une nouvelle partie ---------------------------------- */ 

document.querySelector('#btn_newGame').addEventListener('click', init)


init();