var playerBoard = document.querySelector('#player');
var rows = playerBoard.querySelectorAll('tr');

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
  if(e.target.className)
  {
    document.getElementsByClassName("A1").innerHTML = "X";
  }
});
