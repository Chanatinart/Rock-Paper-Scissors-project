const option = document.querySelectorAll(".options")
    let playerScore = 0;
    let computerScore = 0;
    
    //Function to
    option.forEach((option) => {
        option.addEventListener("click", function(){
            const pInput = this.value;
            
            const cOptions = ["Rock", "Paper", "Scissors"];
            const cInput = cOptions[Math.floor(Math.random()* 3)];
        
            compareInputs(pInput, cInput);
            updateScore();
            if (checkWinner()) {
                playerScore = computerScore = 0;
                updateScore();
            }
        });
    });

//function to decide winner
function compareInputs(pInput, cInput) {
    const result = document.querySelector(".result");
    const playerScoreBoard = document.querySelector(".p-count");
    const computerScoreBoard = document.querySelector(".c-count");
    const currentMatch = '${pInput} vs ${cInput}';
    if (pInput === cInput) {
        result.TextContent = 'Tie'
    }
    else if(pInput === "Rock") {
        if(cInput === "Paper"){
            result.textContent = "Paper beats Rock Computer Won!";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = "Paper beats Rock Player Won!"
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if (pInput === "Scissors") {
        if (cInput === "Rock") {
            result.textContent = "Rock beats Scissors Computer Won!";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = "Rock beats Scissors Player Won!"
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if(pInput === "Paper") {
        if(cInput === "Scissors") {
            result.textContent = "Scissors beats Paper Computer Won!";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = "Scissors beats Paper Player Won!"
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
}

function updateScore() {
    
}
//check winner
function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        const winner =
        playerScore ===5
        ? "You win the game!"
        : "Computer wins the game! Try again next time!";
        alert(winner);
        return true;
    }
    return false;
}