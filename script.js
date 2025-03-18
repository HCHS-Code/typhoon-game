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

  const boardSize5x5 = [
    ["?", "?", "Bomb", "Red Cross", "?"],
    ["Poison", "?", "?", "?", "Typhoon"],
    ["?", "Bomb", "Red Cross", "Poison", "?"],
    ["?", "?", "?", "Bomb", "Red Cross"],
    ["Typhoon", "?", "Poison", "?", "Red Cross"],
  ];

  const boardSize7x7 = [
    ["?","?","?","?","Bomb","?","Red Cross"],
    ["?","Poison","?","?","?","Bomb","?"],
    ["?","Bomb","?","Typhoon","?","?","?"],
    ["?","?","?","?","?","?","?"],
    ["?","Poison","?","?","?","?","?"],
    ["?","?","Typhoon","?","Bomb","?","?"],
    ["Bomb","?","?","?","?","?","Poison"],
  ];
  const boardSize9x9 = [
    ["?","?","?","?","Bomb","?","Red Cross","?","?"],
    ["?","Poison","?","?","?","Bomb","?","?","?"],
    ["?","Bomb","?","Bomb","?","?","?","?","?"],
    ["?","?","?","?","?","?","?","?","?"],
    ["?","Poison","?","Poison","?","?","?","?","?"],
    ["?","?","Typhoon","?","Bomb","?","?","?","?"],
    ["Bomb","?","?","?","?","?","?","Typhoon","?"],
   ["Bomb","?","?","?","?","?","Poison","?","?"],
    ["Bomb","?","?","?","?","?","Bomb","?","?"],
  ];
  const boardSize11x11 = [
    ["?","?","?","?","Bomb","?","Red Cross","?","?","?","?"],
    ["?","Poison","?","?","?","Bomb","?","?","?","?","?"],
    ["?","Bomb","?","Typhoon","?","?","?","?","?","?","?"],
    ["?","?","?","?","?","?","?","?","?","?","?"],
    ["?","Poison","?","?","?","?","?","?","?","?","?"],
    ["?","?","Typhoon","?","Bomb","?","?","?","Poison","?","?"],
    ["?","?","?","?","?","?","?","?","?","?","?"],
    ["?","?","?","Red Cross","?","?","Poison","?","?","Red Cross","?"],
    ["?","?","?","?","?","?","?","?","?","?","?"],
    ["Poison","?","?","?","?","?","Bomb","?","?","?","?"],
    ["Bomb","?","?","?","?","?","?","?","?","?","?"],
  ];
  
 
  let boardData = boardData0;
  let boardSize = boardData0;
  const gameBoard = document.getElementById("gameBoard");
  const boardSelect = document.getElementById("boardSelect");
  const sizeSelect = document.getElementById("sizeSelect");

  function createBoard(size) {
    
    gameBoard.innerHTML = "";
    gameBoard.style.gridTemplateColumns = 'repeat(${size}, 80px)';
 
    
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.addEventListener("click", handleCellClick);
        gameBoard.appendChild(cell);
      }
    }
  }
  createBoard(5)

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
        createBoard(5);
        break;
      case "boardData2":
        boardData = boardData2;
        createBoard(5);
        break;
      case "boardData3":
        boardData = boardData3;
        createBoard(5);
        break;
      case "boardData4":
        boardData = boardData4;
        createBoard(5);
        break;
      default:
        boardData = boardData1; // Default to board1 if something goes wrong
        createBoard(5);
    }
  }
  function updateBoardSize(sizeSelected) {
    switch (sizeSelected) {
      case "boardSize5x5":
        boardData = boardSize5x5;
        createBoard(5);
        break;
      case "boardSize7x7":
        boardData = boardSize7x7;
        createBoard(7);
        break;
      case "boardSize9x9":
        boardData = boardSize9x9;
        createBoard(9);
        break;
      case "boardSize11x11":
        boardData = boardSize11x11;
        createBoard(11);
        break;
      default:
        boardData = boardSize5x5;
        createBoard(5);
    }
  }
 
  boardSelect.addEventListener("change", (event) => {
    const selectedBoard = event.target.value;

    updateBoardData(selectedBoard);
    createBoard(5); // Redraw the board with the new data
  });
  sizeSelect.addEventListener("change", (event) => {
    const sizeSelected = event.target.value;
    updateBoardSize(sizeSelected);
  

    
  });

});
