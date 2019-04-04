let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const mickey_img = document.querySelector(".mickey-pic");
const donald_img = document.querySelector(".donald-pic");
const draw_img = document.querySelector(".draw-pic");
const rockImage = document.querySelector(".rock");
const paperImage = document.querySelector(".paper");
const scissorsImage = document.querySelector(".scissors");


function getComputerChoice() {
        const choices = ['rock','paper','scissors'];
        const randomNumber = (Math.floor(Math.random() * 3));
        switch (choices[randomNumber]) {
            case 'rock' :
                imageRock();
            break;
            case 'paper' :
                imagePaper();
            break;
            case 'scissors':
                imageScissors();
            break;
        }
        return choices[randomNumber];
}

function imageRock() {
    rockImage.style.opacity = "1";
    paperImage.style.opacity = "0";
    scissorsImage.style.opacity ="0";
}

function imagePaper() {
    rockImage.style.opacity = "0";
    paperImage.style.opacity = "1";
    scissorsImage.style.opacity ="0";
}

function imageScissors() {
    rockImage.style.opacity = "0";
    paperImage.style.opacity = "0";
    scissorsImage.style.opacity ="1";
}

function convertToWord (letter) {
    if (letter === "rock") return "La Pierre";
    if (letter === "paper") return "La Feuille";
    return "Les Ciseaux";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML= `${convertToWord(userChoice)} bat ${convertToWord(computerChoice)} <br> Tu gagne !`;
    mickey_img.style.opacity = "1";
    donald_img.style.opacity = "0";
    draw_img.style.opacity = "0";
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML=userScore;
    result_p.innerHTML= `${convertToWord(userChoice)} ne bat pas ${convertToWord(computerChoice)} <br> Tu perd !`;
    donald_img.style.opacity = "1";
    mickey_img.style.opacity = "0";
    draw_img.style.opacity = "0";
}

function draw(userChoice, computerChoice) {
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML=userScore;
    result_p.innerHTML= `${convertToWord(userChoice)} et ${convertToWord(computerChoice)} s'annulent.<br>C'est une égalité !`;  
    mickey_img.style.opacity = "0";
    donald_img.style.opacity = "0";
    draw_img.style.opacity = "1";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
        break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
        break;
        case "rockrock":
        case "paperaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
        break;
    }
}

function main() {

rock_div.addEventListener('click',function() {
    game("rock")
    
})

paper_div.addEventListener('click',function() {
    game("paper")
})

scissors_div.addEventListener('click',function() {
    game("scissors")
})
}

// function bindClick() {
//     $('#click').one('click', main() {
//         $('#status').append("bound ");
//         setTimeout(bindClick, 2000);
//     });
// }

// $(document).ready(function(){
//     bindClick();
// });

main();
