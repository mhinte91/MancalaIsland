/*----- constants -----*/ 
const PLAYER = {
    '1': 'One',
    '-1': 'Two'
};


/*----- app's state (variables) -----*/ 
let board, scores, turn, winner;


/*----- cached element references -----*/ 



/*----- event listeners -----*/ 
document.querySelector('section.a').addEventListener('click', handleClick);
document.querySelector('section.b').addEventListener('click', handleClick2);
// document.querySelector('section.b').addEventListener('click', handleClickTwo);


/*----- functions -----*/
init();

function init() {
    drawBoard();
    scores = {
        a: 0,
        b: 0
    };
    turn = 1;
    winner = null;
    render();
}
function render() {
    board.forEach(function(pot, potIdx) {
        document.getElementById(potIdx).innerHTML = pot;
    });
    renderMessage();
}

function handleClick(evt) {
    let index = Number(evt.target.id);
    let value = board[index];
    if (turn === -1 || index === 6 || value === 0) return;
    else {
        for(let i = 0; i < value; i++) {
            let newIndex = index + i + 1;
                if (newIndex < board.length - 1) {
                    board[newIndex]++;
                } else {
                    newIndex -= board.length - 1;
                    board[newIndex]++;
                }
            } 
        board[evt.target.id] = 0;
        turn *= -1;
        render();
    }
}


function handleClick2(evt) {
    let index = Number(evt.target.id);
    let value = board[index];
    if (turn === 1 || index === 13 || value === 0) return;
    else {
        for(let i = 0; i < value; i++) {
            let newIndex = index + i + 1;
            
            if (newIndex < board.length) {
                board[newIndex]++;
                
            } else if (newIndex >= board.length){
                newIndex -= board.length;
                board[newIndex]++;
            }
            
            if (newIndex === 6) {
                board[newIndex]--;
                value++;
            }
                
                
               
            } 
        board[evt.target.id] = 0;
        turn *= -1;
        render();
    }
}


function drawBoard(){
    board = new Array(14).fill(4);
    board[6] = 0;
    board[13] = 0;
}
            
            
            
function renderMessage(){
    document.querySelector('footer').innerHTML = `Player ${PLAYER[turn]}'s Turn!`;
}
    
    

function getWinner() {}