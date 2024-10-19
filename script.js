console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
//let audioTurn = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
let turn= "X"
let gameover= false

//Change the turn
const changeTurn = ()=>{
    return turn === "X"? "0":"X"
}

//Check win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtext[e[[0]]].innerText === boxtext[e[[1]]].innerText) && (boxtext[e[[2]]].innerText === boxtext[e[[1]]].innerText) && (boxtext[e[[0]]].innerText !=="")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            gameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            music.play()
        }
    })
}

// Check for a draw
const checkDraw = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let allFilled = Array.from(boxtext).every(box => box.innerText !== "");

    if (allFilled && !gameover) {  // If all boxes are filled and no one won
        document.querySelector('.info').innerText = "Draw";4
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        document.getElementById('img1').src='draw.gif';
        gameOver.play();  // Optionally play game over sound for draw
        gameover = true;  // Mark the game as over
    }
};

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext =element.querySelector('.boxtext');
    element.addEventListener('click', (e)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            //audioTurn.play();
            checkWin();
            checkDraw();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for: " + turn;
            }
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    gameover = false
    gameOver.play()
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    document.getElementById('img1').src='excited.gif';
})