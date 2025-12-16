let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let newGameBtn = document.getElementById("new-game-btn")
let scoreZeroHome = 0
let scoreZeroGuest = 0

function plusOneHome() {
    scoreZeroHome += 1
    scoreHome.textContent = scoreZeroHome
}

function plusTwoHome() {
    scoreZeroHome += 2
    scoreHome.textContent = scoreZeroHome
}

function plusThreeHome(){
    scoreZeroHome += 3
    scoreHome.textContent = scoreZeroHome
}

function plusOneGuest() {
    scoreZeroGuest += 1
    scoreGuest.textContent = scoreZeroGuest
}

function plusTwoGuest() {
    scoreZeroGuest += 2
    scoreGuest.textContent = scoreZeroGuest
}

function plusThreeGuest() {
    scoreZeroGuest += 3
    scoreGuest.textContent = scoreZeroGuest
}


function newGame() {
    scoreZeroHome = 0
    scoreHome.textContent = scoreZeroHome
    scoreZeroGuest = 0
    scoreGuest.textContent = scoreZeroGuest
}