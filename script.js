let userScore=0;
let compScore=0;
const choices= document.querySelectorAll(".choice");
const info= document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const draw=()=>{
    console.log("match is draw");
    info.innerText="Game Draw!Play Again";
    info.style.backgroundColor = "#01204E";
}
const compchoice=()=>{
    const options =["rock","paper","scissor"];
    const randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
}
const playGame=(userchoice)=>{
    const comChoice=compchoice();
    console.log("computer chose",comChoice);

    if(userchoice==comChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userchoice=="rock")
        {
            userWin=(comChoice==="paper")?false:true;
        }
        else if(userchoice==="scissor")
        {
            userWin=(comChoice==="rock")?false:true;
        }
        else{
            userWin=(compchoice==="scissor")?false:true;
        }
        showWinner(userWin);
    }
}
const showWinner=(userWin,userchoice,comChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you won");
        info.innerText="Congratulations!! You Won";
        info.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("computer won");
        info.innerText="oops!Sorry,You Loss....better Luck next Time";
        info.style.backgroundColor = "red";
    }
}

choices.forEach((choice)=>{
     choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("you choosed",userchoice);
        playGame(userchoice,userchoice,compchoice);
     })
})

