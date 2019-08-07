/*----- constants -----*/ 
const PLAYER = {
    '1': 'One',
    '-1': 'Two'
};


/*----- app's state (variables) -----*/ 
let board, turn, winner;


/*----- cached element references -----*/ 



/*----- event listeners -----*/ 
document.querySelector('section.a').addEventListener('click', handleClick);
document.querySelector('section.b').addEventListener('click', handleClick2);
document.querySelector('button').addEventListener('click', init);
// document.querySelector('section.b').addEventListener('click', handleClickTwo);


/*----- functions -----*/
init();


function init() {
    drawBoard();
    turn = 1;
    winner = null;
    render();
    document.querySelector('button').className= '';
}


function render() {
    board.forEach(function(pot, potIdx) {
        document.getElementById(potIdx).innerHTML = pot;
    });
    renderMessage();
}


function handleClick(evt) {
    playerOneTurn(evt);
    render();
    getWinner();
    playAgain(winner);
}


function handleClick2(evt) {
    playerTwoTurn(evt);
    render();
    getWinner();
    playAgain(winner);
}


function drawBoard(){
    board = new Array(14).fill(4);
    board[6] = 0;
    board[13] = 0;
}
            
function playerOneTurn(evt) {
    let index = Number(evt.target.id);
    let value = board[index];
    if (turn === -1 || index === 6 || value === 0 || winner === true) return;
    else {
        for(let i = 0; i < value; i++) {
            let newIndex = index + i + 1;
            if (newIndex < board.length - 1) {
                board[newIndex]++;
    
            } else {
                if (newIndex < 2 * (board.length - 1)) {
                    newIndex -= board.length - 1;
                    board[newIndex]++;
                } else {
                    newIndex -= 2 * (board.length - 1);
                    board[newIndex]++;
                    }
            }
        } 
    let finalValue = board[index + board[index]];
    let finalIndex = index + value;
    isEmpty(finalValue, finalIndex);
    isMancala(finalIndex);
    board[evt.target.id] -= value;
    turn *= -1;
    }
}


function playerTwoTurn(evt) {
    let index = Number(evt.target.id);
    let value = board[index];
    if (turn === 1 || index === 13 || value === 0 || winner === true) return;
    else {
        for(let i = 0; i < value; i++) {
            let newIndex = index + i + 1;
            
            if (newIndex < board.length) {
                board[newIndex]++;
                
            } else { 
                if (newIndex < 2 * board.length){
                newIndex -= board.length;
                board[newIndex]++;
                } else {
                    newIndex -= 2 * board.length;
                    board[newIndex]++;
                }
            }
            
            if (newIndex === 6) {
                board[newIndex]--;
                value++;
                board[evt.target.id]++;
            }
        } 
    let finalValue = board[index + board[index]];
    let finalIndex = index + value;
    isEmpty(finalValue, finalIndex);
    isMancala(finalIndex);
    board[evt.target.id] -= value;
    turn *= -1;
    }
}

function isEmpty(finalValue, finalIndex) {
    let a = finalIndex;
    let b = board.length - finalIndex - 2;
    if (finalValue === 1 && finalIndex !== 13 && finalIndex !== 6) {
        if (turn === 1 && finalIndex < 6) {
        board[a] += board[b];
        board[b] = 0;
        } else if (turn === -1 && finalIndex > 6) {
        board[a] += board[b];
        board[b] = 0;
        }
    }
}

function isMancala(finalIndex) {
    if (turn === 1 && finalIndex === 6) {turn *= -1;}
    else if (turn === -1 && finalIndex === 13) {turn *= -1;}
    else return;
}

function getWinner() {
    if (board[0]+board[1]+board[2]+board[3]+board[4]+board[5] === 0 ||
        board[7]+board[8]+board[9]+board[10]+board[11]+board[12] === 0) {
            if (board[6] === board[13]){
                document.querySelector('footer').innerHTML = `TIE GAME!!!`;
                winner = true;
            } else if (board[6] > board[13]) {
                document.querySelector('footer').innerHTML = `Player One WINS!!!`;
                winner = true;
            } else if (board[6] < board[13]) {
                document.querySelector('footer').innerHTML = `Player Two WINS!!!`;
                winner = true;
            }
       } else return;

}


function renderMessage(){
    document.querySelector('footer').innerHTML = `Player ${PLAYER[turn]}'s Turn!`;
}

function playAgain(winner) {
    if (winner) {
        document.querySelector('button').className= 'show';
    }
}


