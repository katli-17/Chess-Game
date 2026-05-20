const gameName = "Royal Checkmate Chronicles";
let currentTurn = "white";
let moveCount = 0;
let gameOver = false;

console.log(gameName);
console.log("Turn: ", currentTurn);
console.log("Move Count: ", moveCount);
console.log("Game Over: ", gameOver);

currentTurn = "black";
console.log("Turn: ", currentTurn);

function isLightSquare(row, col) {
  // Convert column letter to a number (1 for 'a', 2 for 'b', etc.)
  const colNumber = col.toLowerCase().charCodeAt(0) - "a".charCodeAt(0) + 1;
  // Check if the sum of row and column numbers is even
  return (row + colNumber) % 2 === 0;
}

console.log("Is (1, b) a light square? ", isLightSquare(1, "b"));
console.log("Is (8, h) a light square? ", isLightSquare(8, "h"));
console.log("Is (4, c) a light square? ", isLightSquare(4, "c"));
console.log("Is (5, e) a light square? ", isLightSquare(5, "e"));

/* const board = document.createElement("div");
document.body.appendChild(board);

 function createSquare(row, col) {
  const isLight = (row + col) % 2 === 0;

  const square = document.createElement("div");

  square.style.width = "50px";
  square.style.height = "50px";
  square.style.backgroundColor = isLight ? "#f0d9b5" : "#b58863";
  square.style.display = "inline-block";

  return square;
}

const sq1 = createSquare(1, 2); // a1
const sq2 = createSquare(8, 7); // h8
const sq3 = createSquare(4, 3);
const sq4 = createSquare(5, 5);

board.appendChild(sq1);
board.appendChild(sq2);
board.appendChild(sq3);
board.appendChild(sq4);

console.log("Chessboard preview created with 4 squares."); */
// this is an example of how to create the board & mulitple them according to color

function createSquare(row, col) {
  const isLight = (row + col) % 2 === 0;
  const square = document.createElement("div");
  square.style.width = "36px";
  square.style.height = "36px";
  square.style.backgroundColor = isLight ? "#c2b17d" : "#7c3333";
  square.style.display = "inline-block";
  return square;
}

const board = document.createElement("div");
document.body.appendChild(board);
board.style.width = "288px";

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const sq = createSquare(row, col);
    board.appendChild(sq);
  }
}
console.log("Chessboard preview created with 64 squares.");

/* 
const colors = ["red", "green", "blue"];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors.length); 

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
*/ 
//an exapmle of how to use arryas when creating my chess pieces


const blackPieces = ["bRook", "bKnight", "bBishop", "bQueen", "bKing", "bBishop", "bKnight", "bRook"];
const whitePieces = ["wRook", "wKnight", "wBishop", "wQueen", "wKing", "wBishop", "wKnight", "wRook"];

/*
for (let i = 0; i < blackPieces.length; i++) {
    console.log("Black Piece " + (i + 1) + ": ", blackPieces[i]);
}

for (let i = 0; i < whitePieces.length; i++) {
    console.log("White Piece " + (i + 1) + ": ", whitePieces[i]);
}
*/
//standard way of looping or printing every tiem in the arry, with the index num

/* for (const piece of blackPieces) {
    console.log("Black Piece: ", (blackPieces.indexOf(piece) + 1) + ": ", piece);
}*/ //bc of the incorrect numbering of pieces, i'm forced to use the standard method of looping

for (let i = 0; i < blackPieces.length; i++) {
    console.log("Black Piece " + (i + 1) + ": ", blackPieces[i]);
}

for (let i = 0; i < whitePieces.length; i++) {
    console.log("White Piece " + (i + 1) + ": ", whitePieces[i]);
}

console.log("Total Black Pieces: ", blackPieces.length);
console.log("Total White Pieces: ", whitePieces.length);
