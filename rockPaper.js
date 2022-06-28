//Generates a random selection for computer
function computerPlay () 
{
    var randomNumber = 0;
    var computerChoice = "NULL";

    //Generate random number between 1-3
    randomNumber = Math.floor(Math.random()*(3-1+1)+1);

    //Assign computerChoice corrisponding to random number
    if (randomNumber == 1)
    {
        computerChoice = "rock";
    }

    if (randomNumber == 2)
    {
        computerChoice = "paper";
    }

    if (randomNumber == 3)
    {
        computerChoice = "scissors";
    }

    return computerChoice;
}

//Checks to see who won the round
function RoundWinner (computerChoice, playChooice)
{
    //return 2 if game is a draw
    if (computerChoice == playChooice)
    {
        console.log("Draw");
        return 2;
    }

    //return 0 if computer wins
    if (computerChoice == "paper" && playChooice == "rock"){
        console.log("Computer Wins Round");
        return 0;
    }

    if (computerChoice == "rock" && playChooice == "scissors") {
        console.log("Computer Wins Round");
        return 0;
    }

    if (computerChoice == "scissors" && playChooice == "paper") {
        console.log("Computer Wins Round");
        return 0;
    }

    //Return 1 if Player wins
    else {
        console.log("Player Wins Round");
        return 1;
    }
}

//Checks to see if somebody has won the game
function GameWinnerCheck (playerPoints, computerPoints, maxPoints) 
{
    var winner = 0;

    //Check if game is over
    if (playerPoints == maxPoints || computerPoints == maxPoints)
    {
        console.log("Game Finish");
    
        if (playerPoints == maxPoints){
            winner = 1;
        }
        else {
            winner = 2
        }
    }

    if (winner == 1){
        gameWinner.textContent = "Player Wins";
    }
    if (winner == 2){
        gameWinner.textContent = "Computer Wins";
    }
}

//Runs a round of the game (generates computer chooice, checks to see who won and return round outcome)
function runGame (playChooice) 
{
    var computerChoice = "TBA";
    var roundWinner = 0;

    //Generate computer chooice and puts it in a string
    computerChoice = computerPlay();

    //Checks to see who won (returns 0 computer win returns 1 player win)
    roundWinner = RoundWinner(computerChoice, playChooice);

    //Change display
    playerPick.textContent = "Player Picked: " + playChooice;
    computerPick.textContent = "Computer Picked: " + computerChoice;

    return roundWinner;
}

function updateScore (playerPoints, computerPoints)
{
    playerScore.textContent = "Player Score: " + playerPoints;
    computerScore.textContent = "Computer Score: " + computerPoints;
}

var playChooice = "TBA";

var playerPoints = 0;
var computerPoints = 0;

var maxPoints = 3;
var roundWinner = 0;

const playerPick = document.querySelector("#playerPick");
const computerPick = document.querySelector("#computerPick");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const gameWinner = document.querySelector("#winner");

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const resartBtn = document.querySelector("#restart");


rockBtn.addEventListener("click", function(e) {
    playChooice = "rock";

    //returns 0 computer wins round, returns 1 player wins round
    roundWinner = runGame(playChooice);
 
    //Update Points
    if (roundWinner == 0)
    {
        computerPoints++;
    }
    if (roundWinner == 1)
    {
        playerPoints++;
    }

    //Update Score Display
    updateScore (playerPoints, computerPoints);

    //Check to see if there is a winner
    GameWinnerCheck(playerPoints, computerPoints, maxPoints);
});

paperBtn.addEventListener("click", function(e) {
    playChooice = "paper";

    //returns 0 computer wins round, returns 1 player wins round
    roundWinner = runGame(playChooice);
 
    //Update Points
    if (roundWinner == 0)
    {
        computerPoints++;
    }
    if (roundWinner == 1)
    {
        playerPoints++;
    }

    //Update Score Display
    updateScore (playerPoints, computerPoints);

    //Check to see if there is a winner
    GameWinnerCheck(playerPoints, computerPoints, maxPoints);
});

scissorsBtn.addEventListener("click", function(e) {
    playChooice = "scissors";

    //returns 0 computer wins round, returns 1 player wins round
    roundWinner = runGame(playChooice);
 
    //Update Points
    if (roundWinner == 0)
    {
        computerPoints++;
    }
    if (roundWinner == 1)
    {
        playerPoints++;
    }

    //Update Score Display
    updateScore (playerPoints, computerPoints);

    //Check to see if there is a winner
    GameWinnerCheck(playerPoints, computerPoints, maxPoints);
});

resartBtn.addEventListener("click", function (e) {
    playerPoints = 0;
    computerPoints = 0;

    //Reset display
    playerScore.textContent = "Player Score: " + playerPoints;
    computerScore.textContent = "Computer Score: " + computerPoints;
    playerPick.textContent = "Player Picked: ";
    computerPick.textContent = "Computer Picked: ";
    gameWinner.textContent = "";
});