const player1 = "Mario";
const player2 = "Peach";
const currPlayer = player1;

const gameOver = false; 
let board; 

const rows = 6;
const columns = 7;
const currColums = [];

window.onload = function() {
    setGame();
};
