
let userScore = 0;
let computerScore = 0;
//gets the id of the html
//these variables are written down with an underscore to separate them from the real variables. These are "dumb" - html ones.
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
//The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//The document.addEventListener() method attaches an event handler to the document.


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    //We multiply Math.random * 3 to get a random number between 0 and 3.
    const randomNumber = Math.floor(Math.random() * 3);
    //this will give me a number from that choices array.
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)} ${smallCompWord} . You win!`;
    /*Array of classes on that specific element */
    document.getElementById(userChoice).classList.add('green-glow'); 
    /* This gives time and then performs action  
                type      function to perform   miliseconds
    */
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 1000); 
    
    document.getElementById(computerChoice).classList.add('red-glow'); 
    setTimeout(function() { document.getElementById(computerChoice).classList.remove('red-glow') }, 1000);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} loses against ${convertToWord(computerChoice)} ${smallCompWord} . Loser!`;
    
    document.getElementById(userChoice).classList.add('red-glow'); 
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 1000); 
    
    document.getElementById(computerChoice).classList.add('green-glow'); 
    setTimeout(function() { document.getElementById(computerChoice).classList.remove('green-glow') }, 1000);
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = "Katy, I love you!";
    
    document.getElementById(userChoice).classList.add('gold-glow'); 
    setTimeout(function() { document.getElementById(userChoice).classList.remove('gold-glow') }, 1000); 

}

function game(userChoice) {
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
            break;
        case "rr":
        case "pp":
        case "ss":
                draw(userChoice, computerChoice);
            break;
            
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}


main();