import Gameboard from './gameboard.js'; 
import gameController from './gameController.js';
import displayController from './displayController.js';

// Simply initialize the display when page loads
displayController.init();

// Optional: keep your console tests if you want
console.log('Display Controller initialized');

// const myGameBoard = Gameboard();
// console.log('Initial board:', myGameBoard.getBoard());
// myGameBoard.placeMark(0, 'X');
// console.log('Board after placing X at index 0:', myGameBoard.getBoard());
// myGameBoard.placeMark(1, 'O');
// console.log('Board after placing O at index 1:', myGameBoard.getBoard());

// console.log('Initial Board:', gameController.getBoard());
// console.log('Current Player:', gameController.getCurrentPlayer().getName());

// gameController.playTurn(0); // Player 1 places X at 0
// console.log('Board after move 0:', gameController.getBoard());
// console.log('Current Player:', gameController.getCurrentPlayer().getName());

// gameController.playTurn(1); // Player 2 places O at 1
// console.log('Board after move 1:', gameController.getBoard());

// gameController.playTurn(0); // Should fail - cell taken
// console.log('Board should be unchanged:', gameController.getBoard());