const typhoonTileTypes = [
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "?",
  "Red Cross",
  "Bomb",
  "Poison",
  "Red Cross",
  "Bomb",
  "Poison",
  "Typhoon",
]

let cellSize = 5
let nextEffect = 'none'

// Tile Name, Weight/Rarity (higher = more)
const testRarity = [
  ['?', 15],
]
//  testing up


document.addEventListener("DOMContentLoaded", () => {
  //Game Board 0
  const boardData0 = [
    ["?", "?", "Bomb", "Red Cross", "?"],
    ["Poison", "?", "?", "?", "Typhoon"],
    ["?", "Bomb", "Red Cross", "Poison", "?"],
    ["?", "?", "?", "Bomb", "Red Cross"],
    ["Typhoon", "?", "Poison", "?", "Red Cross"],
  ];

  // To turn a number into a String, do: Number(STRING), make sure to check if it is a correct number after.

  let boardData = boardData0;
  const gameBoard = document.getElementById("gameBoard");

  function createBoardData0() {
      let newBoardData = []
      for (let col = 0; col < cellSize; col++ ) {
          newBoardData[col] = []
          for (let row = 0; row < cellSize; row++ ) {
              // Randomly generates a table place (ex: table[int]), from the table length
              let randomNumber = Math.round(Math.random() * typhoonTileTypes.length-1) + 1
              console.log(randomNumber)
              newBoardData[col][row] = typhoonTileTypes[randomNumber]

              // Redudancy just so the game doesn't break, makes sure each tile atleast is a question.
              if (newBoardData[col][row] == undefined) {
                  newBoardData[col][row] = '?'
              }
          }
      }

      console.log(newBoardData)
      boardData = newBoardData
  }

  function createBoard() {
    createBoardData0()
    gameBoard.innerHTML = "";
    let string = '80px'

    for (let i = 1; i < cellSize; i++) {
      string += ' 80px'
    }

   gameBoard.style.gridTemplateColumns = string


    for (let row = 0; row < cellSize; row++) {
      for (let col = 0; col < cellSize; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.addEventListener("click", handleCellClick);
        gameBoard.appendChild(cell);
      }
    }
  }

  function updateBoardData(selectedBoard) {
      createBoardData0()
      switch (selectedBoard) {
        case "boardData1":
          cellSize = 3;
          break;
      case "boardData2":
          cellSize = 5;
          break;
      case "boardData3":
          cellSize = 12;
          break;
      default:
          boardData = boardData1; // Default to board1 if something goes wrong
      }
    }

  function handleCellClick(event) {
    const cell = event.target;
    const row = cell.dataset.row;
    const col = cell.dataset.col;
    const value = boardData[row][col];
    const cellValue = value.replace(" ","");
    cell.textContent = value;
    
    cell.classList.add(cellValue);
      
    cell.classList.add("revealed");
    cell.removeEventListener("click", handleCellClick); // Prevent re-clicking

    // Add logic here to handle the revealed value (e.g., update score, etc.)
    console.log(`Cell clicked: Row ${row}, Col ${col}, Value: ${value}`);
  }

  function handleReveal(cell) {
      const row = cell.dataset.row;
      const col = cell.dataset.col;
      const value = boardData[row][col];
      const cellValue = value.replace(" ","");
      cell.textContent = value;
      
      cell.classList.add(cellValue);
        
      cell.classList.add("revealed");
      cell.removeEventListener("click", handleCellClick); // Prevent re-clicking
  
      // Add logic here to handle the revealed value (e.g., update score, etc.)
      console.log(`Cell clicked: Row ${row}, Col ${col}, Value: ${value}`);
    }

  const randomButton = document.getElementById('randomize');
  const revealButton = document.getElementById('reveal');

  revealButton.addEventListener('click', (event) => {
      let sizes = document.getElementsByClassName('cell')
      for (let i = 0; 1 < sizes.length; i++) {
          handleReveal(sizes[i])
      }
  });

  randomButton.addEventListener('click', (event) => {
      createBoard(); // Redraw the board with the new data
  });

  boardSelect.addEventListener("change", (event) => {
    const selectedBoard = event.target.value;
    updateBoardData(selectedBoard);
    createBoard(); // Redraw the board with the new data
  });

  boardSelect.value = 'Medium';
  createBoard();
});
