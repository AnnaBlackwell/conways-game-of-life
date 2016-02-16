var indicesOutOfBounds = require('./indicesOutOfBounds')
function getNeighbours(cellRow, cellColumn, board) {
	var neighbours = [];
		for (var x = -1; x < 2; x++) {
		for (var y = -1; y < 2; y++) {
			if (indicesOutOfBounds(cellRow + x, cellColumn + y, board) || (y === 0 && x === 0)){}
			else {neighbours.push(board[cellRow + x][cellColumn + y])}
		}
	}
	return neighbours;
}


//exclude 0,0
module.exports = getNeighbours
