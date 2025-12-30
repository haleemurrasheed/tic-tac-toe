// gameController.js - IIFE Module
import Gameboard from './gameboard.js';
import Player from './player.js';

const gameController = (() => {
    const board = Gameboard();
    const player1 = Player('Player 1', 'X');
    const player2 = Player('Player 2', 'O');
    
    let currentPlayer = player1;
    let gameOver = false;

    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const checkWinner = () => {
        const currentBoard = board.getBoard();
        const mark = currentPlayer.getMark();
        
        return winPatterns.some(pattern => 
            pattern.every(index => currentBoard[index] === mark)
        ) ? currentPlayer.getName() : null;
    };

    const checkTie = () => board.getBoard().every(cell => cell !== '');

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    const playTurn = (index) => {
        if (gameOver || !board.placeMark(index, currentPlayer.getMark())) {
            return { success: false };
        }

        const winner = checkWinner();
        const tie = !winner && checkTie();
        
        if (winner || tie) {
            gameOver = true;
            return { success: true, gameOver: true, winner, tie };
        }

        switchPlayer();
        return { success: true, gameOver: false };
    };

    const resetGame = () => {
        board.reset();
        currentPlayer = player1;
        gameOver = false;
    };

    return {
        playTurn,
        getBoard: board.getBoard,
        getCurrentPlayer: () => currentPlayer,
        resetGame
    };
})();

export default gameController;