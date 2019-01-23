var board = document.querySelector('table');

board.addEventListener('click', function(e) {
  console.log(e.target.className);
});
