function createBoard(size) {
  var board = [];

  for (var i = 0; i < size; i++) {
  	board.push([]);

	for (var j = 0; j < size; j++) {
	  	board[i].push(false);
	  }
  }
  return board;

}
module.exports = createBoard