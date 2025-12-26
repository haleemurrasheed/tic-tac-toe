import gameController from './gameController.js';

const displayController = (() => {
    const gameBoardElement = document.getElementById('gameBoard');
    const resetButton = document.getElementById('resetButton');
    const statusElement = document.createElement('div'); // For showing turn/winner

    // Add status element to the page (insert it after the h1)
    document.querySelector('h1').insertAdjacentElement('afterend', statusElement);

    const render = () => {
    // 1. Get current game state
    const board = gameController.getBoard();
    const currentPlayer = gameController.getCurrentPlayer();
    
    // 2. Update status (only if game isn't over)
    if (!statusElement.textContent.includes('Game Over')) {
        statusElement.textContent = `${currentPlayer.getName()}'s turn (${currentPlayer.getMark()})`;
    }
    
    // 3. Render board cells
    gameBoardElement.innerHTML = '';
    board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.dataset.index = index;
        cellElement.textContent = cell;
        gameBoardElement.appendChild(cellElement);
    });
};

    // Handle cell clicks - this is the MAIN game flow
 const handleCellClick = (index) => {
    console.log(`Cell ${index} clicked`);
    const result = gameController.playTurn(parseInt(index));
    
    if (result.success) {
        render(); // Update the display
        
        // Check if game is over
        if (result.gameOver) {
            if (result.winner) {
                statusElement.textContent = `Game Over! ${result.winner} wins!`;
            } else if (result.tie) {
                statusElement.textContent = "Game Over! It's a tie!";
            }
            
            // Disable further clicks (optional but good UX)
            gameBoardElement.style.pointerEvents = 'none';
        }
    } else {
        // Optional: Show a brief error for invalid move
        console.log('Move was invalid');
    }
};

    const handleReset = () => {
    console.log('Reset game');
    gameController.resetGame();
    gameBoardElement.style.pointerEvents = 'auto'; // Re-enable clicks
    render(); // Re-render the cleared board
};

    // Initialize everything when module loads
    const init = () => {
        render(); // Initial render
        gameBoardElement.addEventListener('click', (event) => {
            if (event.target.classList.contains('cell')) {
                handleCellClick(event.target.dataset.index);
            }
        });
        resetButton.addEventListener('click', handleReset);
    };

    return {
        init
    };
})();

export default displayController;