// gameboard.js
const Gameboard = () => {
  const board = Array(9).fill('');

  return {
    getBoard: () => board,
    placeMark: (index, mark) => {
      if (index >= 0 && index < 9 && board[index] === '') {
        board[index] = mark;
        return true;
      }
      return false;
    },
    // NEW: Reset method
    reset: () => board.fill('')
  };
};

export default Gameboard;