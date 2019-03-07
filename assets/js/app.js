var computerBoard = document.querySelector('#computer');
var playerBoard = document.querySelector('#player');
var rows = computerBoard.querySelectorAll('tr');
var rows2 = computerBoard.querySelectorAll('tr');
var ships = [2, 3, 3, 4, 5];
var randomThing = 5;
var boardThing = 100;
var numOfShips = ships.length;
var shipStart = false;
var shipEnd = false;


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

  function seperate(target)
  {
    return target.id.split('-');
  }

  function isEmptySpace(target) {
    if(target.innerHTML == " ") {
      return true;
    }
    return false;
  }

  function isValidEndPoint(target)
  {
    if(target.innerHTML == " ")
    {
      return true;
    }
    //if()
    //{

    //}
    return false;
  }

  var target = e.target;

  if(target.tagName == "TD") {

 var x = seperate(target)[1];
 var y = seperate(target)[2];
 var checkX = 0;
 var checkY = 0;

      // if(ships.length > 0) {

        if (isEmptySpace(target))
        {

          // place first coordinate
          if (shipStart == false){
            checkX = seperate(target)[1];
            checkY = seperate(target)[2];
            target.innerHTML = '<i class="fas fa-align-justify"></i>';
            shipStart = true;

          }
          // place second coordinate
          else {
            console.log(checkX, checkY);
            if (Number(checkX) + 2 == Number(y))
            {
              target.innerHTML = '<i class="fas fa-align-justify"></i>';
              shipEnd = true;

            }
          }
          }
        }
      // }

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
document.write("<h3 class='shipsLeft'>Ships Left: "+ numOfShips + "</h3>");
document.write("<h3 class='shipLength'>Current Ship's Length: " + ships.pop() + "</h3>");
