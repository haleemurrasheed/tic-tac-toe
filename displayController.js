// displayController.js - IIFE Module
import gameController from './gameController.js';

const displayController = (() => {
    const gameBoardElement = document.getElementById('gameBoard');
    const resetButton = document.getElementById('resetButton');
    const statusElement = document.createElement('div');

    document.querySelector('h1').insertAdjacentElement('afterend', statusElement);

    const updateStatus = (result) => {
        if (result && result.gameOver) {
            statusElement.textContent = result.winner 
                ? `Game Over! ${result.winner} wins!`
                : "Game Over! It's a tie!";
            gameBoardElement.style.pointerEvents = 'none';
        } else {
            const player = gameController.getCurrentPlayer();
            statusElement.textContent = `${player.getName()}'s turn (${player.getMark()})`;
        }
    };

    const render = () => {
        const board = gameController.getBoard();
        gameBoardElement.innerHTML = board
            .map((cell, i) => `<div class="cell" data-index="${i}">${cell}</div>`)
            .join('');
    };

    const handleCellClick = (index) => {
        const result = gameController.playTurn(parseInt(index));
        if (result.success) {
            render();
            updateStatus(result);
        }
    };

    const handleReset = () => {
        gameController.resetGame();
        gameBoardElement.style.pointerEvents = 'auto';
        render();
        updateStatus(); // Explicitly reset status to show Player 1's turn
    };

    const init = () => {
        render();
        updateStatus(); // Set initial status
        gameBoardElement.addEventListener('click', (e) => {
            if (e.target.classList.contains('cell')) {
                handleCellClick(e.target.dataset.index);
            }
        });
        resetButton.addEventListener('click', handleReset);
    };

    return { init };
})();

export default displayController;