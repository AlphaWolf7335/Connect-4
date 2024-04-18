const player1 = "M";
const player2 = "P";
const currPlayer = player1;

const gameOver = false; 
let board; 

const rows = 6;
const columns = 7;
const currColums = [];

window.onload = function() {
    setGame();
}

function setGame() {
    board = [];
    currColums = [5,5,5,5]