window.onload = function(){
  let attri = document.getElementById('board');
  console.log(attri);
  //console.log(attri.parentNode);
  //console.log(attri.children);
  //console.log(attri.firstChild);

  //model= attri.getElementById('#board','div');
  //console.log(model);
  //console.log(attri.firstElementChild);
  //console.log(attri.lastChild);
  //console.log(attri.nextElementSibling);

  //var nde = attri.getElementsByTagName('div');
  //nde.className = "square";
  //console.log(nde);


  //var firstListItem = attri.firstElementChild;
  var child = document.getElementById('board').children;
  //var child= attri.querySelectorAll("div");
  console.log(child);
  //child.forEach(childCell =>{
    //console.log(childCell);
    //childCell.setAttribute("class","square");

    //childCell.setAttribute("id",id);
    //id++;
  //})
  //var lastChild = attri.lastElementChild;
  //firstListItem.className = "square";
  child[0].className = "square";
  child[1].className = "square";
  child[2].className = "square";
  child[3].className = "square";
  child[4].className = "square";
  child[5].className = "square";
  child[6].className = "square";
  child[7].className = "square";
  child[8].className = "square";
  //secondListItem.className = "square";
  //lastChild.className = "square";
  //nde.classList.add('square');

  //const cellNum = document.querySelectorAll('board');

//let xIcon= "fas fa-times";
//let oIcon= "fas fa-circle";

//const squares = Array.from(document.querySelectorAll('.square'));
//const button= document.querySelector(".btn");
let xWins= false;
let oWins= false;
let classX = true;
let gameNow= true;
const winMoves = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

let setBoard= ['', '', '', '', '', '', '', '', ''];



//const classX = 'x';
const classCircle= 'o';
let circlesTurn;
const boxes = Array.from(document.querySelectorAll('.square'));
  boxes.forEach(cell =>{
    cell.addEventListener('click', handleClick, {once: true})
    newGame();
  })

  function handleClick(e){

    const box = e.target;
    if(classX == true && gameNow == true && xWins == false){

      //const classNow = circlesTurn ? classCircle : classX;
      //document.getElementsByClassName('square').innerHtml = "X";
      //var x = document.getElementById('board');
      box.classList.add("X");
      box.textContent = "X";
      var num = box.getAttribute('id');
      console.log('clicked');
      console.log(box);
      const el = (element) => element == box;
      let i = boxes.findIndex(el);
      setBoard[i] = "X";
      if (whoWon()){
        gameNow = false;
        if (classX == true){
          document.getElementById('status').textContent = "Congratulations! X is the Winner!";
          document.getElementById('status').classList.add("you-won");
          xWins= true;
        }
      }
      classX = false;
    }
    else if (classX == false && gameNow == true && oWins == false){
      box.classList.add("O");
      box.textContent = "O";
      const el = (element) => element == box;
      let i = boxes.findIndex(el);
      setBoard[i] = "O";
      if (whoWon()){
        gameNow = false;
        if (classX == false){
          document.getElementById('status').textContent = "Congratulations! O is the Winner!";
          document.getElementById('status').classList.add("you-won");
          oWins= true;
        }
      }
      classX = true;

    }

    else if ((classX==true||classX==false)&&(xWins== false && oWins== false) && gameNow== true){
      if(whoWon()==false){
        document.getElementById('status').textContent = "It is a draw!";
      }
    }
    //placeMark(box, classNow);
    //placeMark
    //Check for Win
    //Check for Draw
    //Switch Turns
    //function placeMark(box, classNow){
      //box.classList.add(classNow);
    //}
  }

  boxes.forEach(function(elem, index, list) {
  elem.addEventListener('mouseover', function(e) {
    e.target.classList.add('hover');
  });

  elem.addEventListener('mouseout', function(e) {
    e.target.classList.remove('hover');
  });
});

function whoWon(){
  let winning= false;
  for (let z = 0; z <= 7; z++){
    const vic = winMoves[z];
    let a = setBoard[vic[0]];
    let b = setBoard[vic[1]];
    let c = setBoard[vic[2]];
    if(a === '' || b === '' || c === ''){
      continue;
    }
    if (a === b && b === c){
      winning = true;
      return winning;
    }

  //  else if(gameNow == false){
      //document.getElementById('status').textContent = "It's a draw!";
    //}
  }
}

function newGame(){
  const btn =  document.querySelector(".btn");
  btn.addEventListener('click', startGame);
}

function startGame(e){
  location.reload();
}

}
