const board = document.querySelector('#board')
let currentPlayer = "X";
let gameBoard = ["","","","","","","","",""]
let winningCombo = [0,0,0];


function creatBoard() {
    for(let i = 0; i < 9; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
    }
}
function handleCellClick(event) {
    const messageTur = document.querySelector('#message') 
    console.log('Cell clicked:', event.target.dataset.index);
    event.target.textContent = currentPlayer;
    gameBoard[event.target.dataset.index] = currentPlayer;
    console.log(chekWin());
    if(chekWin()) {
        messageTur.textContent= `${currentPlayer} wygrał!`;
        console.log(`${currentPlayer} wygrał!`)
    } else {
    if(currentPlayer === "X") {
        currentPlayer = "O";
        messageTur.textContent = "Tura: O"
    }
    else {
        currentPlayer = "X";
                messageTur.textContent = "Tura: X"
        }
        event.target.remveEventLstener("click", handleCellClick);
    }
}

creatBoard();

// [0,4,8]

function chekWin() {
    const winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];


    for (const condition of winConditions){
        const [a,b,c] = condition;
        if(
        console.log(gameBoard[a] && 
            gameBoard[a] === gameBoard[b] && 
            gameBoard[a] === gameBoard[c])
            ){
        return true
        }
    }
    
    return false;
}


const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", resetGame);
function resetGame() {
    gameBoard = ["","","","","","","","",""];
    currentPlayer = "X";
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.textContent = "";
        cell.addEventListener("click", handleCellClick)
    })
    document.getElementById("message").textContent = "Tura: X";
}
resetGame();

function drawWinningLine() {
    const line = document.createElement("div");
    line.classList.add("line");
    board.appendChild(line);

    const start = winningCombo[0];
    const end = winningCombo[2];
    console.log(winningCombo[0], winningCombo[1], winningCombo[2]);
    console.log(winningCombo);

    if (start === 0 && end === 2) {
        line.style.top = "50px";
        line.style.left = "0";
    } else if (start === 3 && end === 5) {
        line.style.top = "155px";
        line.style.left = "0";
    } else if (start === 6 && end === 8) {
        line.style.top = "260px";
        line.style.left = "0";
    } else if (start === 0 && end === 6) {
        line.style.width = "322px";
        line.style.top = "0";
        line.style.left = "265px";
        line.style.transform = "rotate(90deg)";
    } else if (start === 1 && end === 7) {
        line.style.width = "322px";
        line.style.top = "0";
        line.style.left = "160px";
        line.style.transform = "rotate(90deg)";
    } else if (start === 2 && end === 8) {
        line.style.width = "322px";
        line.style.top = "";
        line.style.left = "265px";
        line.style.transform = "rotate(90deg)";
    } else if (start === 0 && end === 8) {
        line.style.width = "444px";
        line.style.top = "0";
        line.style.left = "3px";
        line.style.transform = "rotate(45.7deg)";
    } else if (start === 2 && end === 6) {
        line.style.width = "444px";
        line.style.top = "318px";
        line.style.left = "0";
        line.style.transform = "rotate(-45.5deg)";
    }
}