document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("gameBoard");
  const boardData = [
    ["?", "?", "Bomb", "Red Cross", "?"],
    ["Poison", "?", "?", "?", "Typhoon"],
    ["?", "Bomb", "Red Cross", "Poison", "?"],
    ["?", "?", "?", "Bomb", "Red Cross"],
    ["Typhoon", "?", "Poison", "?", "Red Cross"],
  ]; // Replace with your desired board

  function createBoard() {
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.addEventListener("click", handleCellClick);
        gameBoard.appendChild(cell);
      }
    }
  }

  function handleCellClick(event) {
    const cell = event.target;
    const row = cell.dataset.row;
    const col = cell.dataset.col;
    const value = boardData[row][col];

    cell.textContent = value;
    cell.classList.add("revealed");
    cell.removeEventListener("click", handleCellClick); // Prevent re-clicking

    // Add logic here to handle the revealed value (e.g., update score, etc.)
    console.log(`Cell clicked: Row ${row}, Col ${col}, Value: ${value}`);
  }

  createBoard();
});

/*
Game Board 0
["?", "?", "Bomb", "Red Cross", "?"],
    ["Poison", "?", "?", "?", "Typhoon"],
    ["?", "Bomb", "Red Cross", "Poison", "?"],
    ["?", "?", "?", "Bomb", "Red Cross"],
    ["Typhoon", "?", "Poison", "?", "Red Cross"],
// Game Board 1
const boardData1 = [
  ['?', '?', 'Bomb', 'Red Cross', '?'],
  ['Poison', '?', '?', '?', 'Typhoon'],
  ['?', 'Bomb', 'Red Cross', 'Poison', '?'],
  ['?', '?', '?', 'Bomb', 'Red Cross'],
  ['Typhoon', '?', 'Poison', '?', 'Red Cross'],
];

// Game Board 2
const boardData2 = [
  ['?', 'Bomb', '?', 'Poison', '?'],
  ['?', '?', 'Red Cross', '?', 'Bomb'],
  ['Poison', '?', 'Typhoon', '?', '?'],
  ['?', 'Red Cross', '?', '?', '?'],
  ['Bomb', 'Typhoon', 'Poison', '?', '?'],
];

// Game Board 3
const boardData3 = [
  ['?', '?', 'Bomb', '?', 'Poison'],
  ['?', 'Typhoon', '?', '?', '?'],
  ['Red Cross', 'Poison', '?', '?', 'Bomb'],
  ['?', '?', '?', 'Red Cross', '?'],
  ['?', 'Bomb', 'Typhoon', 'Poison', '?'],
];

// Game Board 4
const boardData4 = [
  ['?', '?', 'Bomb', '?', 'Poison'],
  ['?', 'Typhoon', '?', '?', '?'],
  ['Red Cross', 'Poison', '?', '?', 'Bomb'],
  ['?', '?', '?', 'Red Cross', '?'],
  ['?', 'Bomb', 'Typhoon', 'Poison', '?'],
];
*/
