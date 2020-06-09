let p1Button = document.querySelector("#p1");
let p2Button = document.querySelector("#p2");
let resetButton = document.querySelector("#reset");
let numInput = document.querySelector("input[type='number']");

let score1 = document.querySelector("#score1")
let score2 = document.querySelector("#score2")

let p1Score = 0;
let p2Score = 0;

let gameOver = false;
let winningScore = 5;

p1Button.addEventListener("click", function(){
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            score1.classList.add("winner");
            gameOver = true;
        }
        score1.textContent = p1Score;
    } 
});

p2Button.addEventListener("click", function(){
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            score2.classList.add("winner");
            gameOver = true;
        }
        score2.textContent = p2Score;
    } 
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    score1.classList.remove("winner");
    score2.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function (){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});

