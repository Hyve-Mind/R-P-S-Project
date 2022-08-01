let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const score_div =document.querySelector(".score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");





function main(){
    rock_div.addEventListener('click', () => game("r"));
     
     paper_div.addEventListener('click', () => game("p")); 
     
     scissor_div.addEventListener('click', () => game("s")); 
}

main();


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber];
    
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissor";
}

function win(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(2).sup();
    const smallCompWord = "comp".fontsize(2).sup();
    const userChoice_div =  document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats  ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 400);
}

function lose(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(2).sub();
    const smallCompWord = "comp".fontsize(2).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to  ${convertToWord(computerChoice)}${smallCompWord}. You lost!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 400);
 
}

function tie(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(2).sup();
    const smallCompWord = "comp".fontsize(2).sup();
    const userChoice_div =  document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} Tie  ${convertToWord(computerChoice)}${smallCompWord}. It's a draw!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 400);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
           win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break
        case "rr":
        case "pp":
        case "ss":
            tie(userChoice, computerChoice);
            break;
    }
}


