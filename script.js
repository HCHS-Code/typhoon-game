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
  const boardSize5x5 = [
    ["?", "?", "Bomb", "Red Cross", "?"],
    ["Poison", "?", "?", "?", "Typhoon"],
    ["?", "Bomb", "Red Cross", "Poison", "?"],
    ["?", "?", "?", "Bomb", "Red Cross"],
    ["Typhoon", "?", "Poison", "?", "Red Cross"],
  ];

  // Game Board 2
  const boardData5x5_2 = [
    ["?", "Bomb", "?", "Poison", "?"],
    ["?", "?", "Red Cross", "?", "Bomb"],
    ["Poison", "?", "Typhoon", "?", "?"],
    ["?", "Red Cross", "?", "?", "?"],
    ["Bomb", "Typhoon", "Poison", "?", "?"],
  ];

  // Game Board 3
  const boardData5x5_3 = [
    ["5-3", "?", "Bomb", "?", "Poison"],
    ["?", "Typhoon", "?", "?", "?"],
    ["Red Cross", "Poison", "?", "?", "Bomb"],
    ["?", "?", "?", "Red Cross", "?"],
    ["?", "Bomb", "Typhoon", "Poison", "?"],
  ];

  // Game Board 4
  const boardData5x5_4 = [
    ["5-4", "?", "Bomb", "?", "Poison"],
    ["?", "Typhoon", "?", "?", "?"],
    ["Red Cross", "Poison", "?", "?", "Bomb"],
    ["?", "?", "?", "Red Cross", "?"],
    ["?", "Bomb", "Typhoon", "Poison", "?"],
  ];

  const boardSize7x7 = [
    ["7","?","?","?","Bomb","?","Red Cross"],
    ["?","Poison","?","?","?","Bomb","?"],
    ["?","Bomb","?","Typhoon","?","?","?"],
    ["?","?","?","?","?","?","?"],
    ["?","Poison","?","?","?","?","?"],
    ["?","?","Typhoon","?","Bomb","?","?"],
    ["Bomb","?","?","?","?","?","Poison"],
  ];
  const boardSize7x7_2 = [
    ["7-2","?","?","?","Bomb","?","Red Cross"],
    ["?","Poison","?","?","?","Bomb","?"],
    ["?","Bomb","?","Typhoon","?","?","?"],
    ["?","?","?","?","?","?","?"],
    ["?","Poison","?","?","?","?","?"],
    ["?","?","Typhoon","?","Bomb","?","?"],
    ["Bomb","?","?","?","?","?","Poison"],
  ];
  const boardSize7x7_3 = [
    ["7-3","?","?","?","Bomb","?","Red Cross"],
    ["?","Poison","?","?","?","Bomb","?"],
    ["?","Bomb","?","Typhoon","?","?","?"],
    ["?","?","?","?","?","?","?"],
    ["?","Poison","?","?","?","?","?"],
    ["?","?","Typhoon","?","Bomb","?","?"],
    ["Bomb","?","?","?","?","?","Poison"],
  ];
  const boardSize7x7_4 = [
    ["7-4","?","?","?","Bomb","?","Red Cross"],
    ["?","Poison","?","?","?","Bomb","?"],
    ["?","Bomb","?","Typhoon","?","?","?"],
    ["?","?","?","?","?","?","?"],
    ["?","Poison","?","?","?","?","?"],
    ["?","?","Typhoon","?","Bomb","?","?"],
    ["Bomb","?","?","?","?","?","Poison"],
  ];
  const boardSize9x9 = [
    ["9","?","?","?","Bomb","?","Red Cross","?","?"],
    ["?","Poison","?","?","?","Bomb","?","?","?"],
    ["?","Bomb","?","Bomb","?","?","?","?","?"],
    ["?","?","?","?","?","?","?","?","?"],
    ["?","Poison","?","Poison","?","?","?","?","?"],
    ["?","?","Typhoon","?","Bomb","?","?","?","?"],
    ["Bomb","?","?","?","?","?","?","Typhoon","?"],
   ["Bomb","?","?","?","?","?","Poison","?","?"],
    ["Bomb","?","?","?","?","?","Bomb","?","?"],
  ];
  const boardSize9x9_2 = [
    ["9-2","?","?","?","Bomb","?","Red Cross","?","?"],
    ["?","Poison","?","?","?","Bomb","?","?","?"],
    ["?","Bomb","?","Bomb","?","?","?","?","?"],
    ["?","?","?","?","?","?","?","?","?"],
    ["?","Poison","?","Poison","?","?","?","?","?"],
    ["?","?","Typhoon","?","Bomb","?","?","?","?"],
    ["Bomb","?","?","?","?","?","?","Typhoon","?"],
   ["Bomb","?","?","?","?","?","Poison","?","?"],
    ["Bomb","?","?","?","?","?","Bomb","?","?"],
  ];
  const boardSize9x9_3 = [
    ["9-3","?","?","?","Bomb","?","Red Cross","?","?"],
    ["?","Poison","?","?","?","Bomb","?","?","?"],
    ["?","Bomb","?","Bomb","?","?","?","?","?"],
    ["?","?","?","?","?","?","?","?","?"],
    ["?","Poison","?","Poison","?","?","?","?","?"],
    ["?","?","Typhoon","?","Bomb","?","?","?","?"],
    ["Bomb","?","?","?","?","?","?","Typhoon","?"],
   ["Bomb","?","?","?","?","?","Poison","?","?"],
    ["Bomb","?","?","?","?","?","Bomb","?","?"],
  ];
  const boardSize9x9_4 = [
    ["9-4","?","?","?","Bomb","?","Red Cross","?","?"],
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
    ["11","?","?","?","Bomb","?","Red Cross","?","?","Bomb","?"],
    ["?","Poison","?","?","?","Bomb","?","?","?","?","?"],
    ["?","Bomb","?","Typhoon","?","?","?","Typhoon","?","?","?"],
    ["?","?","?","Poison","?","?","?","Poison","?","?","?"],
    ["?","Poison","?","?","?","?","?","Red Cross","?","?","?"],
    ["?","?","Typhoon","?","Bomb","?","?","?","Poison","?","?"],
    ["?","?","?","?","Bomb","?","Poison","?","Bomb","?","?"],
    ["?","?","?","Red Cross","?","?","Poison","?","?","Red Cross","?"],
    ["?","?","?","?","?","?","?","?","?","?","?"],
    ["Poison","?","?","Poison","?","?","Bomb","?","?","?","?"],
    ["Bomb","?","?","Bomb","?","?","?","Poison","?","?","?"],
  ];
  const boardSize11x11_2 = [
    ["11-2","?","?","?","Bomb","?","Red Cross","?","?","Bomb","?"],
    ["?","Poison","?","?","?","Bomb","?","?","?","?","?"],
    ["?","Bomb","?","Typhoon","?","?","?","Typhoon","?","?","?"],
    ["?","?","?","Poison","?","?","?","Poison","?","?","?"],
    ["?","Poison","?","?","?","?","?","Red Cross","?","?","?"],
    ["?","?","Typhoon","?","Bomb","?","?","?","Poison","?","?"],
    ["?","?","?","?","Bomb","?","Poison","?","Bomb","?","?"],
    ["?","?","?","Red Cross","?","?","Poison","?","?","Red Cross","?"],
    ["?","?","?","?","?","?","?","?","?","?","?"],
    ["Poison","?","?","Poison","?","?","Bomb","?","?","?","?"],
    ["Bomb","?","?","Bomb","?","?","?","Poison","?","?","?"],
  ];
  const boardSize11x11_3 = [
    ["11-3","?","?","?","Bomb","?","Red Cross","?","?","Bomb","?"],
    ["?","Poison","?","?","?","Bomb","?","?","?","?","?"],
    ["?","Bomb","?","Typhoon","?","?","?","Typhoon","?","?","?"],
    ["?","?","?","Poison","?","?","?","Poison","?","?","?"],
    ["?","Poison","?","?","?","?","?","Red Cross","?","?","?"],
    ["?","?","Typhoon","?","Bomb","?","?","?","Poison","?","?"],
    ["?","?","?","?","Bomb","?","Poison","?","Bomb","?","?"],
    ["?","?","?","Red Cross","?","?","Poison","?","?","Red Cross","?"],
    ["?","?","?","?","?","?","?","?","?","?","?"],
    ["Poison","?","?","Poison","?","?","Bomb","?","?","?","?"],
    ["Bomb","?","?","Bomb","?","?","?","Poison","?","?","?"],
  ];
  const boardSize11x11_4 = [
    ["11-4","?","?","?","Bomb","?","Red Cross","?","?","Bomb","?"],
    ["?","Poison","?","?","?","Bomb","?","?","?","?","?"],
    ["?","Bomb","?","Typhoon","?","?","?","Typhoon","?","?","?"],
    ["?","?","?","Poison","?","?","?","Poison","?","?","?"],
    ["?","Poison","?","?","?","?","?","Red Cross","?","?","?"],
    ["?","?","Typhoon","?","Bomb","?","?","?","Poison","?","?"],
    ["?","?","?","?","Bomb","?","Poison","?","Bomb","?","?"],
    ["?","?","?","Red Cross","?","?","Poison","?","?","Red Cross","?"],
    ["?","?","?","?","?","?","?","?","?","?","?"],
    ["Poison","?","?","Poison","?","?","Bomb","?","?","?","?"],
    ["Bomb","?","?","Bomb","?","?","?","Poison","?","?","?"],
  ];
  
 
  let boardData = boardData0;
  const gameBoard = document.getElementById("gameBoard");
  const boardSelect = document.getElementById("boardSelect");
  const sizeSelect = document.getElementById("sizeSelect");
  const option1 = document.getElementById("option1");
  const option2 = document.getElementById("option2");
  const option3 = document.getElementById("option3");
  const option4 = document.getElementById("option4");
  const option5 = document.getElementById("option5");
  const option6 = document.getElementById("option6");
  const option7 = document.getElementById("option7");
  const option8 = document.getElementById("option8");
  const option9 = document.getElementById("option9");
  const option10 = document.getElementById("option10");
  const option11 = document.getElementById("option11");
  const option12 = document.getElementById("option12");
  const option13 = document.getElementById("option13");
  const option14 = document.getElementById("option14");
  const option15 = document.getElementById("option15");
  const option16 = document.getElementById("option16");
  
  function button1() {
    boardData = boardSize7x7;
    createBoard(7);
    document.getElementById("gameBoard").removeAttribute("game-board");
    document.getElementById("gameBoard").setAttribute("class", "game-board7x7");
  }

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
        boardData = boardData5x5_1;
        createBoard(5);
        document.getElementById("gameBoard").removeAttribute("game-board");
        document.getElementById("gameBoard").setAttribute("class", "game-board");
        break;
      case "boardData2":
        boardData = boardData5x5_2;
        createBoard(5);
        document.getElementById("gameBoard").removeAttribute("game-board");
        document.getElementById("gameBoard").setAttribute("class", "game-board");
        break;
      case "boardData3":
        boardData = boardData5x5_3;
        createBoard(5);
        document.getElementById("gameBoard").removeAttribute("game-board");
        document.getElementById("gameBoard").setAttribute("class", "game-board");
        break;
      case "boardData4":
        boardData = boardData5x5_4;
        createBoard(5);
        document.getElementById("gameBoard").removeAttribute("game-board");
        document.getElementById("gameBoard").setAttribute("class", "game-board");
        break;
      default:
        boardData = boardData5x5_1; // Default to board1 if something goes wrong
        createBoard(5);
        document.getElementById("gameBoard").removeAttribute("game-board");
        document.getElementById("gameBoard").setAttribute("class", "game-board");
    }
  }
  function updateBoardSize(sizeSelected) {

    switch (sizeSelected) {
      case "boardSize5x5":
        boardData = boardSize5x5;
          createBoard(5);
          document.getElementById("gameBoard").removeAttribute("game-board");
          document.getElementById("gameBoard").setAttribute("class", "game-board");
        break;
      case "boardSize7x7":
        boardData = boardSize7x7;
        createBoard(7);
        document.getElementById("gameBoard").removeAttribute("game-board");
        document.getElementById("gameBoard").setAttribute("class", "game-board7x7");
        break;
      case "boardSize9x9":
        boardData = boardSize9x9;
        createBoard(9);
        document.getElementById("gameBoard").removeAttribute("game-board");
        document.getElementById("gameBoard").setAttribute("class", "game-board9x9");
        break;
      case "boardSize11x11":
        boardData = boardSize11x11;
        createBoard(11);
        document.getElementById("gameBoard").removeAttribute("game-board");
        document.getElementById("gameBoard").setAttribute("class", "game-board11x11");
        break;
      default:
        boardData = boardSize5x5;
        createBoard(5);
        document.getElementById("gameBoard").removeAttribute("game-board");
        document.getElementById("gameBoard").setAttribute("class", "game-board");
    }
 
  };
  
 
  boardSelect.addEventListener("change", (event2) => {
    const selectedBoard = event2.target.value;

    updateBoardData(selectedBoard);
    createBoard(5); // Redraw the board with the new data
  });
  sizeSelect.addEventListener("change", (event) => {
    const sizeSelected = event.target.value;
    updateBoardSize(sizeSelected);

  });
  option1.addEventListener("click", () => {
    boardData = boardSize5x5;
    createBoard(5);
    document.getElementById("gameBoard").removeAttribute("game-board");
    document.getElementById("gameBoard").setAttribute("class", "game-board");
  });
  option2.addEventListener("click", () => {
    boardData = boardData5x5_2;
    createBoard(5);
    document.getElementById("gameBoard").removeAttribute("game-board");
    document.getElementById("gameBoard").setAttribute("class", "game-board");
  });
  option3.addEventListener("click", () => {
    boardData = boardData5x5_3;
    createBoard(5);
    document.getElementById("gameBoard").removeAttribute("game-board");
    document.getElementById("gameBoard").setAttribute("class", "game-board");
  });
  option4.addEventListener("click", () => {
    boardData = boardData5x5_4;
    createBoard(5);
    document.getElementById("gameBoard").removeAttribute("game-board");
    document.getElementById("gameBoard").setAttribute("class", "game-board");
  });
  option5.addEventListener("click", () => {
    boardData = boardSize7x7;
    createBoard(7);
    document.getElementById("gameBoard").removeAttribute("game-board");
    document.getElementById("gameBoard").setAttribute("class", "game-board7x7");
  });
  option6.addEventListener("click", () => {
    boardData = boardSize7x7_2;
    createBoard(7);
    document.getElementById("gameBoard").removeAttribute("game-board");
    document.getElementById("gameBoard").setAttribute("class", "game-board7x7");
  });
  option7.addEventListener("click", () => {
    boardData = boardSize7x7_3;
    createBoard(7);
    document.getElementById("gameBoard").removeAttribute("game-board");
    document.getElementById("gameBoard").setAttribute("class", "game-board7x7");
  });
  option8.addEventListener("click", () => {
    boardData = boardSize7x7_4;
    createBoard(7);
    document.getElementById("gameBoard").removeAttribute("game-board");
    document.getElementById("gameBoard").setAttribute("class", "game-board7x7");
  });
  option9.addEventListener("click", () => {
    boardData = boardSize9x9;
    createBoard(9);
    document.getElementById("gameBoard").removeAttribute("game-board");
    document.getElementById("gameBoard").setAttribute("class", "game-board9x9");
  });
  option10.addEventListener("click", () => {
    boardData = boardSize9x9_2;
    createBoard(9);
    document.getElementById("gameBoard").removeAttribute("game-board");
    document.getElementById("gameBoard").setAttribute("class", "game-board9x9");
  });
  option11.addEventListener("click", () => {
    boardData = boardSize9x9_3;
    createBoard(9);
    document.getElementById("gameBoard").removeAttribute("game-board");
    document.getElementById("gameBoard").setAttribute("class", "game-board9x9");
  });
  option12.addEventListener("click", () => {
    boardData = boardSize9x9_4;
    createBoard(9);
    document.getElementById("gameBoard").removeAttribute("game-board");
    document.getElementById("gameBoard").setAttribute("class", "game-board9x9");
  });
  option13.addEventListener("click", () => {
    boardData = boardSize11x11;
    createBoard(11);
    document.getElementById("gameBoard").removeAttribute("game-board");
    document.getElementById("gameBoard").setAttribute("class", "game-board11x11");
  });
  option14.addEventListener("click", () => {
    boardData = boardSize11x11_2;
    createBoard(11);
    document.getElementById("gameBoard").removeAttribute("game-board");
    document.getElementById("gameBoard").setAttribute("class", "game-board11x11");
  });
  option15.addEventListener("click", () => {
    boardData = boardSize11x11_3;
    createBoard(11);
    document.getElementById("gameBoard").removeAttribute("game-board");
    document.getElementById("gameBoard").setAttribute("class", "game-board11x11");
  });
  option16.addEventListener("click", () => {
    boardData = boardSize11x11_4;
    createBoard(11);
    document.getElementById("gameBoard").removeAttribute("game-board");
    document.getElementById("gameBoard").setAttribute("class", "game-board11x11");
  });

});
