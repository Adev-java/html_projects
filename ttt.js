let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turn0 = true;//player1,player2
let clickcount = 0;//for draw

const winpatt = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],   
];
const resetgame = ()=>{
 turn0 = true;
 clickcount= 0;
 enablebox();
 msgcontainer.classList.add("hide"); 
};
boxes.forEach((box)=>{
    box.addEventListener("click", () => {
      console.log("box was clicked"); 
      if (turn0) {
        box.innerText = "0";
        turn0 = false;
      } else {
        box.innerText = "x";
        turn0 = true;  
      } 
      box.disabled = true;
      clickcount++;
        let iswin = checkwin();
        if(clickcount==9 && ! iswin){
gamedraw();
        }
    });
});

const gamedraw =()=>{
  msg.innerText = `Game is Draw. `;
  msgcontainer.classList.remove("hide");
disbox();
};
const disbox = () => {
  for(let box of boxes){
    box.disabled = true;
  }
}
const enablebox = () => {
  for(let box of boxes){
    box.disabled = false;
    box.innerText = ""; 
  }
};
const showwin = (winner)=>{
        msg.innerText =`Congratulations, Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disbox();
};
const checkwin = ()=>{
    for ( let pattern of winpatt){
          let pos1 = boxes[pattern[0]].innerText;
          let pos2 = boxes[pattern[1]].innerText;
          let pos3 = boxes[pattern[2]].innerText;
if(pos1 != "" && pos2 != "" && pos3 != ""){
    if(pos1=== pos2&&  pos2===pos3){
        console.log("Winner")
        showwin(pos1);
        return true;
    }
} }
 };
 newgamebtn.addEventListener("click",resetgame);
 resetbtn.addEventListener("click",resetgame);

 
 