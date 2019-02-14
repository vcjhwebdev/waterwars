var computerBoard = document.querySelector('#computer');
var playerBoard = document.querySelector('#player');
var rows = computerBoard.querySelectorAll('tr');
var rows2 = computerBoard.querySelectorAll('tr');
var ships = [2, 3, 3, 4, 5];
var randomThing = 5;
var boardThing = 100;

function hasPlacedAllShips() {
  if(ships.length === 0) {
    return true;
  } else {
    return false;
  }
}

// id="player-1-1"
// id="player-1-2"

function placeShips(e) {

  function isValidStartPoint() {
  }

  function isValidEndPoint() {
  }

  if(ships.length > 0) {
    console.log(e.target);

    if (e.target.innerHTML == " ")
    {
      e.target.innerHTML = '<i class="fas fa-align-justify"></i>';
      ships.pop();
    }


  }
}

function randomShips()
{
  return Math.floor(Math.random() * 18)+1;
}
computerBoard.addEventListener('click', function(e) {
boardThing -= 1;
if(hasPlacedAllShips())
{
if(randomThing >= 1)
{
  randomShips();
  if(randomShips() == 1)
  {
    if(e.target.innerHTML == " ")
    {
      e.target.innerHTML = "X";
      randomThing -= 1;
      e.target.className = "shot hit";
    }
  }
  else
  {
    if(e.target.innerHTML == " ")
    {
    e.target.innerHTML = "O";
    }
  }
}
else if (randomThing <= 0)
{
  if(e.target.innerHTML == " ")
  {
  e.target.innerHTML = "O";
  }
  var alertThing = confirm("You win, do you want to try again?");
  if (alertThing == true)
  {
    location.reload();
  }
  else {
    location.reload();
  }
}
}
else {
  alert("Please place your ships first.");
}
if(boardThing <= 5 && randomThing >=0)
{
    if(e.target.innerHTML == " ")
    {
      e.target.innerHTML = "X";
      randomThing -= 1;
      e.target.className = "shot hit";
    }
}
});

playerBoard.addEventListener('click', function(e) {
  placeShips(e);
});
