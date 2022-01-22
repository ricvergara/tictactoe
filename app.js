const boxes = Array.from(document.getElementsByClassName('box'));
const playText = document.getElementById('playText');
const winner = document.getElementById('winner');
//modal
var modal = document.getElementById("showModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
const restartBtn = document.getElementById('restartBtn')
const spaces = [null, null, null, null, null, null, null, null, null];
const O_TEXT = 'O';
const X_TEXT = 'X';

let currentPlayer = O_TEXT;

const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = '';
        if (index < 3) {
            styleString += 'border-bottom: 3px solid var(--purple);';
        }
        if (index % 3 === 0) {
            styleString += 'border-right: 3px solid var(--purple);';
        }
        if (index % 3 === 2) {
            styleString += 'border-left: 3px solid var(--purple);';
        }
        if (index > 5) {
            styleString += 'border-top: 3px solid var(--purple);';
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked)
    })
}

const restar = () => {
    spaces.forEach((space, index) => {
        spaces[index] = null;
    });
    boxes.forEach((box) => {
        box.innerText = '';
    });
    playText.innerText = "Let's play";
    currentPlayer = O_TEXT;
}

// When the user clicks the button, open the modal 
const showWinner = function() {
    modal.style.display = "block";
    winner.innerText = `${currentPlayer} has won :D`;
    restar();
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
const boxClicked = (e) => {
    const id = e.target.id;
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        if (playerHasWon()) {
            playText.innerText = `Let's play`;
            return;
        }

        currentPlayer = currentPlayer === O_TEXT ? X_TEXT : O_TEXT;
    }
}

const playerHasWon = () => {
    if (spaces[0] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
            console.log(`${currentPlayer} wins up top`);
            showWinner();
            return true;

        }
        if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(`${currentPlayer} wins on the left`);
            showWinner();
            return true;

        }
        if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
            console.log(`${currentPlayer} wins diagonally`);
            showWinner()
            return true;
        }
    }
    if (spaces[8] === currentPlayer) {
        if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
            console.log(`${currentPlayer} wins up bottom`);
            showWinner();
            return true;

        }
        if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
            console.log(`${currentPlayer} wins on the right`);
            showWinner();
            return true;

        }
    }
    if (spaces[6] === currentPlayer) {
                if (spaces[2] === currentPlayer && spaces[4] === currentPlayer) {
            console.log(`${currentPlayer} wins diagonally`);
            showWinner();
            return true;

        }
    }
    if (spaces[4] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
            console.log(`${currentPlayer} wins vertically in the middle`);
            showWinner();
            return true;

        }
        if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
            console.log(`${currentPlayer} wins horizontally in the middle`);
            showWinner();
            return true;

        }
    }
}


restartBtn.addEventListener("click", () => {
    spaces.forEach((space, index) => {
        spaces[index] = null;
    });
    boxes.forEach((box) => {
        box.innerText = '';
    });
    playText.innerText = "Let's play";
    currentPlayer = O_TEXT;
});



drawBoard();


