let incBtn = document.getElementById("inc-btn")
let cookiesMade = document.getElementById("cookies-made")
let resetBtn = document.getElementById("reset-btn")
let cookiesSaved = document.getElementById("cookies-saved")
let count = 0
let space = "     "

function increment(){
    count++
    console.log("check")
    cookiesMade.innerText = count
}

function reset(){
    cookiesSaved.innerText += space + count
    count = 0
    cookiesMade.innerText = count
}

incBtn.addEventListener("click", increment)

resetBtn.addEventListener("click", reset)