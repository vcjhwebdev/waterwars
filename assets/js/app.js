var computerBoard = document.querySelector('#computer');
var playerBoard = document.querySelector('#player');
var rows = computerBoard.querySelectorAll('tr');
var rows2 = computerBoard.querySelectorAll('tr');
var ting = prompt("What Do u wa*nt Ur symbol to BE Max 3 characters and More than 0");
var numOfShips = 5;

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

computerBoard.addEventListener('click', function(e) {

  if (e.target.innerHTML == " ")
  {
  e.target.innerHTML = ting;
  }
});

function limitter()
{
  if (ting == null)
  {
    location.reload();
  }
  if (ting.length > 3)
  {
    location.reload();
  }
  if (ting.length <= 0)
  {
    location.reload();
  }
}
limitter();

playerBoard.addEventListener('click', function(e) {

  if (e.target.innerHTML == " " && numOfShips >=1)
  {
    e.target.innerHTML = "Ship";
    numOfShips -= 1;
    e.target.id = "ship";

  }
console.log(e.target.id);
});
