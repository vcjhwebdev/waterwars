
var computerBoard = document.querySelector('#computer');
var playerBoard = document.querySelector('#player');
var rows = computerBoard.querySelectorAll('tr');
var rows2 = computerBoard.querySelectorAll('tr');
var randomThing = 5;
var boardThing = 100;
var numOfShips = 5;
var shipStart = false;
var shipEnd = false;
var ting = 0;
var shipsLeft = document.querySelector('.shipsLeft');
var placements = [
  [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 0, 0, 0, 0]
  ],
  [
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0, 0]
  ],
  [
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0]
  ],
  [
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0]
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  [
    [0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]
  ],
  [
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0, 0, 0, 0, 1]
  ],
  [
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 1, 1, 1, 1]
  ],
  [
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1]
  ],
  [
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1]
  ]
];

function placeModal(content)
{
  var modal = document.createElement('div');
  modal.className = 'modal';
  var modalContent = `
    <div class="modal-content">
      <h1>${content}</h1>
      <button class="button operator">Play Again</button>
      <h1>STATISTICS</h1>
      <h2>Moves taken: MOVES TAKEN</h2>
    </div>`
  modal.innerHTML = modalContent;
  var button = modal.querySelector('button');
  button.addEventListener("click", function() {
    location.reload();
  });
  var body = document.querySelector('body');
  body.insertBefore(modal, body.children[0]);
}

function placePlayerShips(targetID) {

  var shipLayout = placements[Math.floor(Math.random() * 9)+1];
  console.log(shipLayout);
  for(var row = 1; row <= 10; row++)
  {
    for(var column = 1; column <= 10; column++)
    {
      var cell = document.getElementById(targetID + '-' + row + '-' + column);
      if(shipLayout[row-1][column-1] == 1) {
        // place a ship at cell
        cell.innerHTML = '<i class="fas fa-align-justify" id="playerShip"></i>';
      }
    }
  }
}
function placeComputerShips(targetID) {

  var shipLayout1 = placements[Math.floor(Math.random() * 9)+1];
  for(var row1 = 1; row1 <= 10; row1++)
  {
    for(var column1 = 1; column1 <= 10; column1++)
    {
      var cell1 = document.getElementById(targetID + '-' + row1 + '-' + column1);
      if(shipLayout1[row1-1][column1-1] == 1) {
        // place a ship at cell
        cell1.innerHTML = '<i class="fas fa-align-justify" class="computerShip"></i>';
      }
    }
  }
}

placePlayerShips('player');
placeComputerShips('alien');

computerBoard.addEventListener('click', function(e)
{
    if(e.target.innerHTML == '<i class="fas fa-align-justify" class="computerShip"></i>')
    {
      e.target.innerHTML = '<i class="fas fa-align-justify" class="hitComputerShip"></i>';
      console.log("hit");
      attack();
    }
    else if(e.target.innerHTML == " ")
    {
      e.target.innerHTML = '<div id="miss">X</div>';
      console.log("miss");
      attack();
    }
});
function attack()
{
  function generateRandomCoordinate() {
    // var row = Math....
    var randomRow = 1;
    // var column = Math...
    var randomColumn = 4;
    return randomRow + "-" + randomColumn;
  }
  // choose a random coordinate
  var coord = generateRandomCoordinate();
  // 4-2
  // [1-10][1-10]
  // while target is empty
  // check if there's a ship
}
shipsLeft.textContent = "Ships Left: " + numOfShips;
