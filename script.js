document.addEventListener("DOMContentLoaded", () => {
  //Game Board 0
  const boardData0 = [
    ["?", "?", "Bomb", "Red Cross", "?"],
    ["Poison", "?", "?", "?", "Typhoon"],
    ["?", "Bomb", "Red Cross", "Poison", "?"],
    ["?", "?", "?", "Bomb", "Red Cross"],
    ["Typhoon", "?", "Poison", "?", "Red Cross"],
  ];
  // Game Board 1
  const boardData1 = [
    ["?", "?", "Bomb", "Red Cross", "?"],
    ["Poison", "?", "?", "?", "Typhoon"],
    ["?", "Bomb", "Red Cross", "Poison", "?"],
    ["?", "?", "?", "Bomb", "Red Cross"],
    ["Typhoon", "?", "Poison", "?", "Red Cross"],
  ];

  // Game Board 2
  const boardData2 = [
    ["?", "Bomb", "?", "Poison", "?"],
    ["?", "?", "Red Cross", "?", "Bomb"],
    ["Poison", "?", "Typhoon", "?", "?"],
    ["?", "Red Cross", "?", "?", "?"],
    ["Bomb", "Typhoon", "Poison", "?", "?"],
  ];

  // Game Board 3
  const boardData3 = [
    ["?", "?", "Bomb", "?", "Poison"],
    ["?", "Typhoon", "?", "?", "?"],
    ["Red Cross", "Poison", "?", "?", "Bomb"],
    ["?", "?", "?", "Red Cross", "?"],
    ["?", "Bomb", "Typhoon", "Poison", "?"],
  ];

  // Game Board 4
  const boardData4 = [
    ["?", "?", "Bomb", "?", "Poison"],
    ["?", "Typhoon", "?", "?", "?"],
    ["Red Cross", "Poison", "?", "?", "Bomb"],
    ["?", "?", "?", "Red Cross", "?"],
    ["?", "Bomb", "Typhoon", "Poison", "?"],
  ];

  let boardData = boardData0;
  const gameBoard = document.getElementById("gameBoard");
  const boardSelect = document.getElementById("boardSelect");

  function createBoard() {
    gameBoard.innerHTML = "";
    
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

  function updateBoardData(selectedBoard) {
    switch (selectedBoard) {
      case "boardData1":
        boardData = boardData1;
        break;
      case "boardData2":
        boardData = boardData2;
        break;
      case "boardData3":
        boardData = boardData3;
        break;
      case "boardData4":
        boardData = boardData4;
        break;
      default:
        boardData = boardData1; // Default to board1 if something goes wrong
    }
  }

    function generateRandomBoard() {
      const board = [
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
      ];
      const numQuestionMarks = 13;
      const numBombs = 3;
      const numTyphoons = 2;
      const numPoisons = 3;
      const numRedCrosses = 4; 
    }
    
   
    
  boardSelect.addEventListener("change", (event) => {
    const selectedBoard = event.target.value;
    updateBoardData(selectedBoard);
    createBoard(); // Redraw the board with the new data
  });

  createBoard();
});
