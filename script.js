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
    ["?", "?", "Bomb", "?", "Poison"],
    ["?", "Typhoon", "?", "?", "?"],
    ["Red Cross", "Poison", "?", "?", "Bomb"],
    ["?", "?", "?", "Red Cross", "?"],
    ["?", "Bomb", "Typhoon", "Poison", "?"],
  ];

  // Game Board 4
  const boardData5x5_4 = [
    ["Typhoon", "?", "?", "Poison", "Red Cross"],
    ["?", "?", "?", "Bomb", "?"],
    ["Bomb", "?", "Red Cross", "?", "?"],
    ["?", "Poison", "?", "Bomb", "?"],
    ["Poison", "?", "?", "?", "Typhoon"],
  ];

  const boardSize7x7 = [
    ["Poison", "?", "Red Cross", "?", "Bomb", "?", "Red Cross"],
    ["?", "Poison", "?", "?", "?", "Bomb", "?"],
    ["?", "Bomb", "?", "Typhoon", "?", "?", "Red Cross"],
    ["?", "?", "Poison", "?", "?", "Bomb", "?"],
    ["?", "Poison", "?", "Typhoon", "?", "Poison", "?"],
    ["?", "?", "Typhoon", "?", "Bomb", "?", "?"],
    ["Bomb", "?", "?", "Red Cross", "?", "?", "Poison"],
  ];
  const boardSize7x7_2 = [
    ["Red Cross", "?", "?", "?", "Poison", "?", "Bomb"],
    ["?", "Poison", "?", "?", "?", "Bomb", "?"],
    ["?", "Bomb", "?", "Typhoon", "?", "?", "Poison"],
    ["Poison", "?", "?", "Red Cross", "?", "?", "?"],
    ["?", "Bomb", "?", "Bomb", "?", "Red Cross", "?"],
    ["Red Cross", "?", "Typhoon", "?", "Bomb", "?", "Typhoon"],
    ["Poison", "?", "?", "?", "Poison", "?", "?"],
  ];
  const boardSize7x7_3 = [
    ["Red Cross", "?", "?", "Bomb", "?", "?", "Red Cross"],
    ["?", "Typhoon", "?", "?", "Poison", "?", "?"],
    ["Poison", "?", "?", "Poison", "?", "Bomb", "?"],
    ["?", "?", "Red Cross", "?", "?", "?", "Typhoon"],
    ["?", "Bomb", "?", "Bomb", "?", "Poison", "?"],
    ["?", "Poison", "?", "?", "Bomb", "?", "?"],
    ["Bomb", "Red Cross", "Poison", "Typhoon", "?", "?", "?"],
  ];
  const boardSize7x7_4 = [
    ["Bomb", "?", "Bomb", "?", "Red Cross", "?", "Bomb"],
    ["?", "Poison", "?", "?", "Typhoon", "?", "?"],
    ["?", "Bomb", "Poison", "Bomb", "?", "Poison", "?"],
    ["?", "?", "Red Cross", "?", "?", "Typhoon", "?"],
    ["?", "Poison", "Typhoon", "?", "Red Cross", "?", "?"],
    ["?", "?", "Red Cross", "?", "?", "Poison", "?"],
    ["?", "?", "Poison", "?", "?", "Bomb", "?"],
  ];
  const boardSize9x9 = [
    ["?", "Red Cross", "?", "?", "Bomb", "?", "Red Cross", "?", "?"],
    ["?", "Poison", "?", "Typhoon", "?", "Bomb", "?", "?", "?"],
    ["?", "Bomb", "?", "Bomb", "?", "?", "Red Cross", "?", "?"],
    ["?", "?", "Poison", "?", "?", "Red Cross", "?", "Poison", "?"],
    ["?", "Poison", "?", "Poison", "?", "?", "Poison", "?", "?"],
    ["?", "?", "Typhoon", "?", "Bomb", "?", "?", "Red Cross", "?"],
    ["Bomb", "?", "Bomb", "?", "?", "Poison", "?", "Typhoon", "?"],
    ["?", "?", "Red Cross", "?", "Bomb", "?", "Poison", "?", "?"],
    ["Bomb", "?", "Poison", "?", "Typhoon", "?", "Bomb", "?", "?"],
  ];
  const boardSize9x9_2 = [
    ["Red Cross", "Typhoon", "?", "?", "?", "Bomb", "?", "Red Cross", "?"],
    ["?", "Bomb", "?", "?", "Poison", "?", "?", "?", "?"],
    ["?", "?", "?", "Bomb", "?", "?", "Typhoon", "Poison", "?"],
    ["?", "Bomb", "?", "?", "Bomb", "?", "?", "?", "?"],
    ["?", "?", "Poison", "?", "Red Cross", "?", "?", "?", "?"],
    ["Red Cross", "?", "Bomb", "?", "?", "Bomb", "?", "Bomb", "?"],
    ["?", "?", "?", "Poison", "?", "?", "Red Cross", "?", "?"],
    ["?", "Typhoon", "?", "Bomb", "?", "Typhoon", "?", "?", "?"],
    ["Poison", "?", "?", "?", "Red Cross", "?", "Poison", "?", "?"],
  ];
  const boardSize9x9_3 = [
    ["Bomb", "?", "?", "?", "Red Cross", "?", "Typhoon", "?", "?"],
    ["?", "?", "Bomb", "?", "?", "?", "?", "Bomb", "?"],
    ["?", "Poison", "?", "Red Cross", "Bomb", "?", "?", "?", "?"],
    ["?", "?", "Bomb", "?", "?", "Poison", "Bomb", "?", "?"],
    ["?", "?", "Poison", "?", "Red Cross", "?", "?", "?", "?"],
    ["?", "Bomb", "?", "Typhoon", "?", "?", "Poison", "?", "Red Cross"],
    ["?", "Typhoon", "?", "?", "?", "?", "Red Cross", "?", "?"],
    ["?", "Red Cross", "?", "?", "Poison", "?", "Bomb", "?", "?"],
    ["?", "?", "Bomb", "?", "?", "?", "Poison", "?", "Typhoon"],
  ];
  const boardSize9x9_4 = [
    ["?", "Bomb", "?", "Poison", "?", "Red Cross", "?", "Poison", "?"],
    ["?", "?", "Red Cross", "?", "?", "?", "Typhoon", "?", "?"],
    ["?", "?", "Typhoon", "?", "?", "?", "Bomb", "?", "Red Cross"],
    ["Red Cross", "?", "Bomb", "?", "?", "?", "?", "?", "?"],
    ["?", "Bomb", "?", "?", "?", "Bomb", "?", "Poison", "?"],
    ["?", "?", "?", "?", "Poison", "?", "Red Cross", "?", "?"],
    ["?", "Poison", "?", "Bomb", "?", "?", "Typhoon", "?", "?"],
    ["?", "?", "?", "Red Cross", "?", "?", "Bomb", "?", "?"],
    ["Typhoon", "?", "?", "Bomb", "?", "?", "Poison", "?", "Bomb"],
  ];
  const boardSize11x11 = [
    [
      "Poison",
      "?",
      "Typhoon",
      "?",
      "Red Cross",
      "?",
      "Bomb",
      "?",
      "Poison",
      "?",
      "?",
    ],
    [
      "?",
      "?",
      "Red Cross",
      "?",
      "Poison",
      "?",
      "Poison",
      "?",
      "Red Cross",
      "?",
      "Bomb",
    ],
    ["?", "Bomb", "?", "?", "Bomb", "?", "?", "Typhoon", "?", "?", "?"],
    [
      "?",
      "?",
      "Poison",
      "?",
      "?",
      "Red Cross",
      "?",
      "Poison",
      "?",
      "Red Cross",
      "?",
    ],
    ["Bomb", "?", "?", "Bomb", "?", "Poison", "Bomb", "?", "Bomb", "?", "?"],
    ["?", "?", "Poison", "?", "?", "?", "?", "?", "Typhoon", "?", "?"],
    [
      "Red Cross",
      "?",
      "Bomb",
      "?",
      "Poison",
      "?",
      "Bomb",
      "?",
      "Poison",
      "?",
      "?",
    ],
    ["Bomb", "?", "?", "?", "Red Cross", "?", "?", "Poison", "?", "?", "?"],
    [
      "?",
      "?",
      "Typhoon",
      "?",
      "Red Cross",
      "?",
      "Typhoon",
      "?",
      "Poison",
      "?",
      "?",
    ],
    [
      "Red Cross",
      "Bomb",
      "?",
      "?",
      "?",
      "Bomb",
      "?",
      "?",
      "Red Cross",
      "?",
      "?",
    ],
    [
      "?",
      "Poison",
      "?",
      "?",
      "Poison",
      "?",
      "?",
      "Poison",
      "?",
      "Bomb",
      "Bomb",
    ],
  ];
  const boardSize11x11_2 = [
    [
      "Red Cross",
      "?",
      "?",
      "Poison",
      "?",
      "?",
      "Bomb",
      "?",
      "Red Cross",
      "Poison",
      "?",
    ],
    ["?", "?", "Typhoon", "?", "?", "Poison", "?", "?", "?", "?", "?"],
    ["?", "Poison", "?", "?", "Bomb", "?", "?", "Bomb", "?", "Bomb", "?"],
    [
      "Bomb",
      "?",
      "?",
      "Red Cross",
      "Poison",
      "?",
      "Red Cross",
      "?",
      "?",
      "Poison",
      "?",
    ],
    ["?", "?", "Poison", "?", "Bomb", "Typhoon", "?", "?", "?", "?", "?"],
    [
      "Red Cross",
      "Typhoon",
      "?",
      "?",
      "?",
      "Poison",
      "?",
      "?",
      "Bomb",
      "?",
      "Poison",
    ],
    [
      "?",
      "?",
      "Red Cross",
      "?",
      "Bomb",
      "?",
      "Red Cross",
      "?",
      "Poison",
      "Typhoon",
      "?",
    ],
    ["Poison", "?", "Bomb", "?", "Poison", "?", "Bomb", "?", "?", "?", "?"],
    [
      "Bomb",
      "?",
      "?",
      "Typhoon",
      "?",
      "?",
      "?",
      "Poison",
      "?",
      "Red Cross",
      "?",
    ],
    ["?", "Bomb", "?", "?", "Red Cross", "?", "Bomb", "?", "?", "Bomb", "?"],
    [
      "Red Cross",
      "?",
      "?",
      "Poison",
      "?",
      "Bomb",
      "?",
      "?",
      "Poison",
      "?",
      "?",
    ],
  ];
  const boardSize11x11_3 = [
    ["?", "?", "?", "?", "?", "?", "Red Cross", "Poison", "?", "Bomb", "?"],
    [
      "?",
      "Red Cross",
      "?",
      "Poison",
      "?",
      "Bomb",
      "?",
      "?",
      "Typhoon",
      "?",
      "?",
    ],
    ["?", "?", "Bomb", "?", "?", "?", "Poison", "?", "Red Cross", "?", "?"],
    ["?", "Poison", "?", "?", "Bomb", "?", "Red Cross", "?", "Bomb", "?", "?"],
    ["?", "Bomb", "?", "?", "?", "?", "Bomb", "?", "Typhoon", "Red Cross", "?"],
    [
      "?",
      "?",
      "?",
      "Bomb",
      "?",
      "Poison",
      "Red Cross",
      "Bomb",
      "?",
      "?",
      "Poison",
    ],
    [
      "?",
      "Poison",
      "Typhoon",
      "?",
      "?",
      "Poison",
      "?",
      "?",
      "?",
      "Poison",
      "?",
    ],
    ["?", "?", "?", "Red Cross", "?", "Bomb", "?", "Bomb", "?", "Poison", "?"],
    [
      "Red Cross",
      "Bomb",
      "?",
      "Poison",
      "?",
      "Poison",
      "?",
      "Red Cross",
      "Poison",
      "?",
      "?",
    ],
    ["?", "?", "?", "Typhoon", "?", "?", "?", "Poison", "?", "?", "?"],
    [
      "?",
      "Bomb",
      "?",
      "Bomb",
      "?",
      "Red Cross",
      "Poison",
      "?",
      "Bomb",
      "?",
      "Typhoon",
    ],
  ];
  const boardSize11x11_4 = [
    [
      "Typhoon",
      "?",
      "Bomb",
      "?",
      "Red Cross",
      "Bomb",
      "Poison",
      "?",
      "Bomb",
      "?",
      "Poison",
    ],
    [
      "Poison",
      "Poison",
      "Poison",
      "?",
      "?",
      "Typhoon",
      "?",
      "?",
      "Poison",
      "?",
      "Bomb",
    ],
    [
      "?",
      "Bomb",
      "?",
      "Poison",
      "?",
      "Red Cross",
      "Typhoon",
      "?",
      "Bomb",
      "Poison",
      "Red Cross",
    ],
    ["?", "?", "?", "Typhoon", "?", "?", "Bomb", "?", "Poison", "?", "?"],
    [
      "?",
      "?",
      "Bomb",
      "?",
      "?",
      "Poison",
      "?",
      "Red Cross",
      "?",
      "Typhoon",
      "?",
    ],
    ["?", "?", "Red Cross", "?", "?", "Typhoon", "?", "Bomb", "?", "?", "?"],
    [
      "?",
      "Poison",
      "Typhoon",
      "?",
      "Poison",
      "?",
      "?",
      "Poison",
      "?",
      "?",
      "Red Cross",
    ],
    [
      "?",
      "Red Cross",
      "?",
      "Red Cross",
      "?",
      "Red Cross",
      "?",
      "?",
      "Typhoon",
      "?",
      "?",
    ],
    ["?", "Bomb", "Typhoon", "?", "Bomb", "?", "Poison", "?", "Bomb", "?", "?"],
    ["?", "?", "?", "Poison", "?", "?", "Typhoon", "?", "?", "Bomb", "?"],
    ["Typhoon", "?", "?", "Bomb", "?", "Red Cross", "?", "Bomb", "?", "?", "?"],
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
    gameBoard.style.gridTemplateColumns = "repeat(${size}, 80px)";

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
  createBoard(5);

  function handleCellClick(event) {
    const cell = event.target;
    const row = cell.dataset.row;
    const col = cell.dataset.col;
    const value = boardData[row][col];
    const cellValue = value.replace(" ", "");
    cell.textContent = value;

    cell.classList.add(cellValue);

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
        document
          .getElementById("gameBoard")
          .setAttribute("class", "game-board");
        break;
      case "boardData2":
        boardData = boardData5x5_2;
        createBoard(5);
        document.getElementById("gameBoard").removeAttribute("game-board");
        document
          .getElementById("gameBoard")
          .setAttribute("class", "game-board");
        break;
      case "boardData3":
        boardData = boardData5x5_3;
        createBoard(5);
        document.getElementById("gameBoard").removeAttribute("game-board");
        document
          .getElementById("gameBoard")
          .setAttribute("class", "game-board");
        break;
      case "boardData4":
        boardData = boardData5x5_4;
        createBoard(5);
        document.getElementById("gameBoard").removeAttribute("game-board");
        document
          .getElementById("gameBoard")
          .setAttribute("class", "game-board");
        break;
      default:
        boardData = boardData5x5_1; // Default to board1 if something goes wrong
        createBoard(5);
        document.getElementById("gameBoard").removeAttribute("game-board");
        document
          .getElementById("gameBoard")
          .setAttribute("class", "game-board");
    }
  }
  function updateBoardSize(sizeSelected) {
    switch (sizeSelected) {
      case "boardSize5x5":
        boardData = boardSize5x5;
        createBoard(5);
        document.getElementById("gameBoard").removeAttribute("game-board");
        document
          .getElementById("gameBoard")
          .setAttribute("class", "game-board");
        break;
      case "boardSize7x7":
        boardData = boardSize7x7;
        createBoard(7);
        document.getElementById("gameBoard").removeAttribute("game-board");
        document
          .getElementById("gameBoard")
          .setAttribute("class", "game-board7x7");
        break;
      case "boardSize9x9":
        boardData = boardSize9x9;
        createBoard(9);
        document.getElementById("gameBoard").removeAttribute("game-board");
        document
          .getElementById("gameBoard")
          .setAttribute("class", "game-board9x9");
        break;
      case "boardSize11x11":
        boardData = boardSize11x11;
        createBoard(11);
        document.getElementById("gameBoard").removeAttribute("game-board");
        document
          .getElementById("gameBoard")
          .setAttribute("class", "game-board11x11");
        break;
      default:
        boardData = boardSize5x5;
        createBoard(5);
        document.getElementById("gameBoard").removeAttribute("game-board");
        document
          .getElementById("gameBoard")
          .setAttribute("class", "game-board");
    }
  }

  boardSelect.addEventListener("change", (event2) => {
    const selectedBoard = event2.target.value;

    updateBoardData(selectedBoard);
    createBoard(5); // Redraw the board with the new data
  });
  sizeSelect.addEventListener("change", (event) => {
    const sizeSelected = event.target.value;
    updateBoardSize(sizeSelected);
  });

  boardStyle.addEventListener("change", () => {
    document.getElementById("style").removeAttribute("game-container");
    document
      .getElementById("style")
      .setAttribute("class", "game-container-dark");
    document.getElementById("body").setAttribute("id", "body-dark");
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
    document
      .getElementById("gameBoard")
      .setAttribute("class", "game-board11x11");
  });
  option14.addEventListener("click", () => {
    boardData = boardSize11x11_2;
    createBoard(11);
    document.getElementById("gameBoard").removeAttribute("game-board");
    document
      .getElementById("gameBoard")
      .setAttribute("class", "game-board11x11");
  });
  option15.addEventListener("click", () => {
    boardData = boardSize11x11_3;
    createBoard(11);
    document.getElementById("gameBoard").removeAttribute("game-board");
    document
      .getElementById("gameBoard")
      .setAttribute("class", "game-board11x11");
  });
  option16.addEventListener("click", () => {
    boardData = boardSize11x11_4;
    createBoard(11);
    document.getElementById("gameBoard").removeAttribute("game-board");
    document
      .getElementById("gameBoard")
      .setAttribute("class", "game-board11x11");
  });
});
