function openForm() {
    document.getElementById("button").style.display = "block";
    document.getElementById("myForm").style.display = "block";
    // document.getElementById("button1").style.display = "block";
}

function closeForm() {
    document.getElementById("button").style.display = "none";
    document.getElementById("myForm").style.display = "none";

    // document.getElementById("button1").style.display = "none";
}
let winme = document.getElementById("win");


let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const rock_1 = document.getElementById('r');
const scissors = document.getElementById('s');
const paper = document.getElementById('p');

let start1 = document.getElementById('play');
start1.addEventListener('click', function() {
    let hands = document.querySelector(".square");
    hands.style.display = 'block';
    let contests = document.querySelector(".design");
    contests.style.display = 'none';
})


function getComputerChoice() {
    const choices = ['r', 's', 'p'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    winme.innerHTML = "YOU WIN"
    let opponent = document.getElementById("winA");
    opponent.innerHTML = "AGAINST PC";
    let nextbtn = document.getElementById("btn1")
    nextbtn.style.display = "block";


}

function lose(user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    winme.innerHTML = "YOULOST";
    let opponent = document.getElementById("winA");
    opponent.innerHTML = "AGAINST PC";
    let nextbtn = document.getElementById("btn1")
    nextbtn.style.display = "none";


}

function tie() {
    winme.innerHTML = "TIE UP"
    let opponent = document.getElementById("winA");
    opponent.innerHTML = "";
    let nextbtn = document.getElementById("btn1")
    nextbtn.style.display = "none";

}



let first;
let second;
let third;

function game(userChoice) {

    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rs":
            first = document.getElementById('a');
            first.src = 'stone.png';
            third = document.getElementById('e0');
            third.src = 'Ellipse 1.png';
            second = document.getElementById('b');
            second.src = 'scissors.png'
            win(userChoice, computerChoice);

            break;
        case "pr":
            first = document.getElementById('a');
            first.src = 'paper.png';
            third = document.getElementById('e0');
            third.src = 'Ellipse 3.png';
            second = document.getElementById('b');
            second.src = 'stone.png'
            win(userChoice, computerChoice);

            break;
        case "sp":
            first = document.getElementById('a');
            first.src = 'scissors.png';
            third = document.getElementById('e0');
            third.src = 'Ellipse 2.png';
            second = document.getElementById('b');
            second.src = 'paper.png';
            win(userChoice, computerChoice);

            break;
        case "rp":
            first = document.getElementById('a');
            first.src = 'stone.png';
            third = document.getElementById('e0');
            third.src = 'Ellipse 1.png';
            second = document.getElementById('b');
            second.src = 'paper.png'

            lose(userChoice, computerChoice);
            break;
        case "ps":
            first = document.getElementById('a');
            first.src = 'paper.png';
            third = document.getElementById('e0');
            third.src = 'Ellipse 3.png';
            second = document.getElementById('b');
            second.src = 'scissors.png'
            lose(userChoice, computerChoice);
            break;
        case "sr":
            first = document.getElementById('a');
            first.src = 'scissors.png';
            third = document.getElementById('e0');
            third.src = 'Ellipse 2.png';
            second = document.getElementById('b');
            second.src = 'stone.png';
            lose(userChoice, computerChoice);
            break;


        case "rr":
            first = document.getElementById('a');
            first.src = 'stone.png';
            third = document.getElementById('e0');
            third.src = 'Ellipse 1.png';
            second = document.getElementById('b');
            second.src = 'stone.png';
            tie(userChoice, computerChoice);
            break;
        case "pp":
            first = document.getElementById('a');
            first.src = 'stone.png';
            third = document.getElementById('e0');
            third.src = 'Ellipse 3.png';
            second = document.getElementById('b');
            second.src = 'paper.png';
            tie(userChoice, computerChoice);
            break;
        case "ss":
            first = document.getElementById('a');
            first.src = 'scissors.png';
            third = document.getElementById('e0');
            third.src = 'Ellipse 2.png';
            second = document.getElementById('b');
            second.src = 'scissors.png';
            tie(userChoice, computerChoice);
            break;


    }


};

function removing() {
    let firstBox = document.querySelector('.square');
    firstBox.style.display = 'none ';
    let secondBox = document.querySelector('.design')
    secondBox.style.display = 'block';
}

function whole() {
    rock_1.addEventListener('click', function() {
        // console.log("rock")
        removing();
        game('r');
    })
    scissors.addEventListener('click', function() {
        // console.log("scissors");
        removing();
        game('s');
    });

    paper.addEventListener('click', function() {
        // console.log("paper");
        removing();
        game('p');
    });
}
whole();