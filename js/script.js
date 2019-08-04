/*----- constants -----*/ 



/*----- app's state (variables) -----*/ 
let board, scores, turn, winner;


/*----- cached element references -----*/ 



/*----- event listeners -----*/ 
document.addEventListener('click', handleClick);


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
    console.log(evt.target.id);
    console.log(evt.target.innerHTML);
    
}

function getWinner() {}