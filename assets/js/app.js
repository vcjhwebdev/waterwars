var board = document.querySelector('table');
var rows = board.querySelectorAll('tr');

board.addEventListener('click', function(e) {
  console.log(e.target.className);
});
