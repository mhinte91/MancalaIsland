/*----- constants -----*/ 



/*----- app's state (variables) -----*/ 
let board, scores, turn, winner;


/*----- cached element references -----*/ 



/*----- event listeners -----*/ 
document.querySelector('section.a').addEventListener('click', handleClick);
document.querySelector('section.b').addEventListener('click', handleClick);


/*----- functions -----*/
init();

function init() {
    board = new Array(12).fill(4);
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

    document.getElementById('a-score').innerHTML = scores.a;
    document.getElementById('b-score').innerHTML = scores.b;
}

function handleClick(evt) {
    let index = Number(evt.target.id);
    let value = board[index];

    
    for(let i = 0; i < value; i++) {
        let newIndex = index + i + 1;
        if (newIndex < board.length) {
            board[newIndex] += 1;
        } else {
            newIndex -= 12;
            board[newIndex] += 1;
        }
        
    }
        
    board[evt.target.id] = 0;
    console.log(board);
    render();
}

    

    
    

function getWinner() {}