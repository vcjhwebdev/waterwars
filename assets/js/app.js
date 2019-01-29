var playerBoard = document.querySelector('#player');
var rows = playerBoard.querySelectorAll('tr');
var ting = prompt("What Do u want Ur symbol to BE Max 3 characters and More that 0");

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

playerBoard.addEventListener('click', function(e) {

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
