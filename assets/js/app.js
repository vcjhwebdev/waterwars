var computerBoard = document.querySelector('#computer');
var playerBoard = document.querySelector('#player');
var rows = computerBoard.querySelectorAll('tr');
var rows2 = computerBoard.querySelectorAll('tr');
var numOfShips = 17;
var randomThing = 5;
var numberThing = 0;

function addClassNamesToTable() {

  function addClassNamesToCell(row) {
    var letterCell = row.firstElementChild;
    var letter = letterCell.textContent;
    // start at second "column", since first column is the letter column
    for(var i = 1; i < row.children.length; i++) {
      var cell = row.children[i];
      cell.className = letter + i;
    }
  }

  // start at row 1 (letter A), not row 0
  for(var i = 1; i < rows.length; i++) {
    var row = rows[i];
    addClassNamesToCell(row);
  }
}

// Add class names to table
addClassNamesToTable();

function addClassNamesToPlayerTable() {

  function addClassNamesToCell(row2) {
    var letterCell2 = row2.firstElementChild;
    var letter2 = letterCell2.textContent;
    // start at second "column", since first column is the letter column
    for(var i = 1; i < row2.children.length; i++) {
      var cell2 = row2.children[i];
      cell2.className = letter2 + i;
    }
  }

  // start at row 1 (letter A), not row 0
  for(var i = 1; i < rows2.length; i++) {
    var row2 = rows2[i];
    addClassNamesToCell(row2);
  }
}

// Add class names to table
addClassNamesToPlayerTable();
function randomShips()
{
  return Math.floor(Math.random() * 18)+1;
}
computerBoard.addEventListener('click', function(e) {
if(numberThing >= 17)
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
  alert("You win, do you want to try again?");
}
}
else {
  alert("Please place your ships first.");
}
});

playerBoard.addEventListener('click', function(e) {

  if (e.target.innerHTML == " " && numOfShips >=1)
  {
    e.target.innerHTML = '<i class="fas fa-align-justify"></i>';
    numOfShips -= 1;
    e.target.id = "ship";
    numberThing += 1;
  }

console.log(e.target.id);
});
