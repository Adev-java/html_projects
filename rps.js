let userscore = 0;
let copmscore = 0;

const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
 const userscorepara = document.querySelector("#userscore");
 const compscorepara = document.querySelector("#compscore");


 
const gencomchoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randomindx = Math.floor(Math.random()*3);
    return options[randomindx];
};
const  drawgame = ()=>{
    console.log("game was draw");
    msg.innerText = "Game was Draw. Play Again ";
    msg.style.backgroundColor = "blue";
};

const showwin =(userwin,userchoice,compchoice)=>{
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win");
        msg.innerText = `You Win! Your ${userchoice}  beats ${compchoice}`;
    msg.style.backgroundColor = "green";

    } else {
        copmscore++;
        compscorepara.innerText = copmscore;
        console.log("computer win"); 
        msg.innerText = `Computer Win! ${compchoice} beats Your ${userchoice}` ;
    msg.style.backgroundColor = "red";

    }
};
 
const playgame = (userchoice)=>{
    //generate computer choice
  const compchoice = gencomchoice();

    if(userchoice===compchoice){
        //draw
        drawgame();
    }else{
        let userwin = true;
        if (userchoice === "rock") {
          //scissors,paper
          userwin = compchoice ==="paper"?false:true;     
        }
        else if(userchoice === "paper"){
//rock,scissors
userwin = compchoice ==="scissors"?false:true;       
        }else {
            // rock ,paper
            userwin = compchoice ==="rock"?false:true;     
        }
        showwin(userwin,userchoice,compchoice);
    
    }
};


choices.forEach((choice) => {
    console.log(choices);
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
     playgame(userchoice);
    } );

});