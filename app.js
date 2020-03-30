

const startGame = document.getElementById('start-game-btn');



//Anonymous Function
// const starting = function(){
//     console.log('Game is Starting ......');
// }

/// A function inside an object (Method)
// const person = {
//     greet: function greet(){
//         console.log('Hello World');
//     }
// }
// person.greet();


const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const defaule_User_Choice = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'YOU WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';

let gameRunning = false;

const getPlayerChoise = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if(
        selection !== ROCK &&
        selection !== PAPER && 
        selection !== SCISSORS
    ){
        alert(`Invalid choice! We chose ${defaule_User_Choice} for you!`);
        return defaule_User_Choice;

    }

    return selection;
};

const getCompChoice = () => {
    const randomValue = Math.random();

    if(randomValue < 0.34){
        return ROCK;
    }else if (randomValue < 0.67 ){
        return PAPER;
    }else {
        return SCISSORS;
    }

};

//// EXAMPLE OF AN ARROW FUNCTION
// const sum = (a, b) => a + b; console.log(sum(2,4));
////instead of doing this the normal way 
// const sub = function (k,j) {
//     return k - j;
// }; console.log(sub(9,3));

//// EXAMPLE OF AN ARROW FUNCTION and Ternary Statement
const winners = (compCho, plaCho) => 
compCho === plaCho
? RESULT_DRAW
: compCho === ROCK && plaCho === PAPER ||
  compCho === PAPER && plaCho === SCISSORS ||
  compCho === SCISSORS && plaCho === ROCK
? RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS;

// const getWinner = function (cChoice, pChoice){

//     if(cChoice === pChoice){
//         return RESULT_DRAW;
//     }else if (
//         cChoice === ROCK && pChoice === PAPER ||
//         cChoice === PAPER && pChoice === SCISSORS ||
//         cChoice === SCISSORS && pChoice === ROCK
//     ){
//         return RESULT_PLAYER_WINS;
//     } else {
//         return RESULT_COMPUTER_WINS;
//     }


// };

startGame.addEventListener('click' , () => {
    if(gameRunning){
        return gameRunning;
    }
    gameRunning = true;


    console.log('Game is Starting .........');

    const playerSelection = getPlayerChoise();
    const compChoice = getCompChoice();
    const winner = winners(compChoice, playerSelection)

    // console.log(`You Choose => ${playerSelection}`);
    // console.log(`Computer Choose => ${compChoice}`);
    // console.log(`The Winner is  => ${winner}`);

    let message = `You picked ${playerSelection}, Computer picked ${compChoice} there for you `;
    winner === RESULT_DRAW?
    message = message + 'had a draw'
    : winner === RESULT_PLAYER_WINS?
    message = message + 'Won'
    : message = message + 'lost';

    alert(message);

    gameRunning = false;
});