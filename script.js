  /* ******************** SCRIPT FOR DICE GAME ***************************** */
  /* ******************** SCRIPT POUR UN JEU DE DÉ ***************************** */

  /* ------------ Une partie de Dé comprenant 2 joueurs qui joue de manière alterné. ------
  /* ------------ Chaque tour les points sont cumulés. ------------------------------------
  /* ------------ Dès qu'un joueur tombe sur le chiffre 1, il passe son tour. -------------
  /* ------------ Le premier joueur a arrivé à 100 a gagné -------------------------------- */ 

  /* -------------------------- Déclaration des variables du GAME PLAY------------------------ */
let scores, roundScore, currentPlayer, gamePlay;


/* -------------------------- Fonction d'initialisation du GAME PLAY------------------------ */
let init = () => {
  scores = [0,0];
  currentPlayer = 0;
  roundScore = 0;
  gamePlay = true;


// problème d'affichage récurrent sous Edge et Chrome. Une seule demande ne s'affiche sur les 2 ; console.log affiche le résultat et également "null".  
// aucun problème sous Edge 
  
/*   let promptJoueur1 = prompt('Nom du joueur 1');
  let promptJoueur2 = prompt('Nom du joueur 2');
  console.log(promptJoueur1);
  console.log(promptJoueur2); 
*/

  document.querySelector('.cotillon').style.display = 'none' ;
  document.querySelector('.dice').style.display = 'none';

  document.getElementById('player_0').textContent =  "Player 1"  /* promptJoueur1 */ ; 
  document.getElementById('player_0').style.color = 'black';
  document.getElementById('player_1').textContent =   "Player 2" /* promptJoueur2 */ ;
  document.getElementById('player_1').style.color = 'black'; 
  document.getElementById('score_0').textContent = '0';
  document.getElementById('score_1').textContent = '0';
  document.getElementById('current_0').textContent = '0';
  document.getElementById('current_1').textContent = '0';

  document.querySelector('.player_0_control').classList.remove('winner');
  document.querySelector('.player_1_control').classList.remove('winner');
  document.querySelector('.player_0_control').classList.remove('active');
  document.querySelector('.player_1_control').classList.remove('active');
  document.querySelector('.player_0_control').classList.add('active');
};

/* ------------------------- Fonction pour lancer le dé ---------------------------------- */ 
document.querySelector('#btn_roll').addEventListener('click', () => {
  if(gamePlay) {
  // conversion en nb entier d'un nb aléatoire
    let dice = Math.floor(Math.random() *6)+1; 
  // déclare la variable en récupérant la class "dice"
    let diceDOM = document.querySelector('.dice'); 
  
  // désactive l'affichage du dé 
    diceDOM.style.display = 'block'; 
  
  // récupère l'image du dé
    diceDOM.src = 'images/dé/dice_' + dice + '.png'; 

    if(dice !==1) { // si diff de 1 additionne le Dé au current score  
      roundScore += dice;
      document.querySelector('#current_' + currentPlayer).textContent = roundScore;
    } else {
      nextPlayer(); 
    }
    /* console.log(dice)*/
  }
});

/* ------------------------- Fonction pour le bouton Hold ---------------------------------- */ 
document.querySelector('.btn-hold').addEventListener('click', () => {
  if(gamePlay){
    scores[currentPlayer] += roundScore;
    // modifie le score en additionnant le current au score global
    document.querySelector('#score_' + currentPlayer).textContent = scores[currentPlayer];
    // si score supérieur ou égal à 100 :
    if(scores[currentPlayer] >= 100) {
      // affiche le vainqueur en rouge, un GIF se met à la place du Dé et stoppe le jeu
      document.querySelector('#player_' + currentPlayer).textContent = "Vainqueur";
      document.getElementById('player_' + currentPlayer).style.color = 'red';
      document.querySelector('.cotillon').style.display = 'block' ; // gif
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player_' + currentPlayer + '_control').classList.add('winner');
      document.querySelector('.player_' + currentPlayer + '_control').classList.remove('active');
      gamePlay = false;
    } else {
      nextPlayer();
    }
  /* console.log(scores)*/  }
});

/* ------------------------- Fonction pour le joueur suivant ----------------------------------*/ 
let nextPlayer = () => {
  currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0 ; // condition ternaire
  roundScore = 0;
  document.getElementById('current_0').textContent = '0';
  document.getElementById('current_1').textContent = '0';
  document.querySelector('.player_0_control').classList.toggle('active');
  document.querySelector('.player_1_control').classList.toggle('active');
  };



  /* ------------------------- Fonction pour une nouvelle partie ---------------------------------- */ 
document.querySelector('#btn_newGame').addEventListener('click', init);


init();
