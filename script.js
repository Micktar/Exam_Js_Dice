/* ******************** SCRIPT FOR DICE GAME ***************************** */
/* ******************** SCRIPT POUR UN JEU DE DÉ ***************************** */

/* -------------------------- Déclaration des variables du GAME PLAY------------------------ */
let gamePlay;
/* let playerName_1 = prompt('Quel est le nom du Joueur 1')
let playerName_2 = prompt('Quel est le nom du Joueur 2') */

/* -------------------------- Fonction d'initialisation du GAME PLAY------------------------ */
let init = () => {
  
  gamePlay = true;

  document.querySelector('.dice').style.display = 'none';
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


    console.log(dice)
  }

})



init();