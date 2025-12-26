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
        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (currentBoard[a] && 
                currentBoard[a] === currentBoard[b] && 
                currentBoard[a] === currentBoard[c]) {
                return currentBoard[a];
            }
        }
        return null;
    };

    const checkTie = () => {
        return board.getBoard().every(cell => cell !== '');
    };

    const switchPlayer = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };

    const playTurn = (index) => {
        if (gameOver) {
            console.log('Game is already over!');
            return false;
        }

        if (board.placeMark(index, currentPlayer.getMark())) {
            console.log(`${currentPlayer.getName()} placed ${currentPlayer.getMark()} at index ${index}`);
            
            const winner = checkWinner();
            if (winner) {
                gameOver = true;
                console.log(`Game over! ${winner} wins!`);
                return { success: true, gameOver: true, winner };
            } else if (checkTie()) {
                gameOver = true;
                console.log('Game over! It\'s a tie!');
                return { success: true, gameOver: true, tie: true };
            }
            
            switchPlayer();
            return { success: true, gameOver: false };
        } else {
            console.log('Invalid move. Try again.');
            return { success: false };
        }
    };

    // NEW: Reset function INSIDE the IIFE
    const resetGame = () => {
        board.reset();
        currentPlayer = player1;
        gameOver = false;
        console.log('Game has been reset');
    };

    // SINGLE return statement with all public methods
    return {
        playTurn,
        getBoard: board.getBoard,
        getCurrentPlayer: () => currentPlayer,
        resetGame // Now properly included
    };
})(); // The IIFE ends here

export default gameController;