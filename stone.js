let userScore = 0;//Considered userScore is 0
let compScore = 0;//Considered compScore is 0

const userscorePara = document.querySelector('#user-score');
const compscorePara = document.querySelector('#comp-score');

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissor = document.querySelector('#scissor');
const msg = document.querySelector("#msg");

const genGameChoice = ()=>{
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game is draw");
    msg.innerText = "Match has been drawed play again";
    msg.style.backgroundColor ="#081b31";
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userscorePara.innerText = userScore;
        console.log("You win");
        msg.innerText = `You win the match your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compscorePara.innerText = compScore;
        console.log("You lose");
        msg.innerText = `You lose the match ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice)=>{//playgame function with userChoice parameter
    console.log("User clicked = ",userchoice);
    const compChoice = genGameChoice();
    console.log(`Computer choice = ${compChoice}`);
    if(userchoice === compChoice){
        //Game draw
        drawGame();
    }
    else{
        let userWin = true;
        if(userchoice === "rock"){
            //paper and seccior
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            //rock and seccior
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            //rock and paper
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin,userchoice,compChoice);
    }
}

const choices = document.querySelectorAll('.choice');//It is used to select all choice
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute('id');
        playgame(userchoice);//Call to playgame with userChoice argument
    })
});